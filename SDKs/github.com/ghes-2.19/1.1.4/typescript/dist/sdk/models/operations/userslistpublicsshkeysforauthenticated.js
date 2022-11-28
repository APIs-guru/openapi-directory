var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var UsersListPublicSshKeysForAuthenticatedQueryParams = /** @class */ (function (_super) {
    __extends(UsersListPublicSshKeysForAuthenticatedQueryParams, _super);
    function UsersListPublicSshKeysForAuthenticatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], UsersListPublicSshKeysForAuthenticatedQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], UsersListPublicSshKeysForAuthenticatedQueryParams.prototype, "perPage", void 0);
    return UsersListPublicSshKeysForAuthenticatedQueryParams;
}(SpeakeasyBase));
export { UsersListPublicSshKeysForAuthenticatedQueryParams };
var UsersListPublicSshKeysForAuthenticatedRequest = /** @class */ (function (_super) {
    __extends(UsersListPublicSshKeysForAuthenticatedRequest, _super);
    function UsersListPublicSshKeysForAuthenticatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListPublicSshKeysForAuthenticatedQueryParams)
    ], UsersListPublicSshKeysForAuthenticatedRequest.prototype, "queryParams", void 0);
    return UsersListPublicSshKeysForAuthenticatedRequest;
}(SpeakeasyBase));
export { UsersListPublicSshKeysForAuthenticatedRequest };
var UsersListPublicSshKeysForAuthenticatedResponse = /** @class */ (function (_super) {
    __extends(UsersListPublicSshKeysForAuthenticatedResponse, _super);
    function UsersListPublicSshKeysForAuthenticatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersListPublicSshKeysForAuthenticatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersListPublicSshKeysForAuthenticatedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersListPublicSshKeysForAuthenticatedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], UsersListPublicSshKeysForAuthenticatedResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Key }),
        __metadata("design:type", Array)
    ], UsersListPublicSshKeysForAuthenticatedResponse.prototype, "keys", void 0);
    return UsersListPublicSshKeysForAuthenticatedResponse;
}(SpeakeasyBase));
export { UsersListPublicSshKeysForAuthenticatedResponse };
