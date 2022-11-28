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
var UsersListPublicKeysForUserPathParams = /** @class */ (function (_super) {
    __extends(UsersListPublicKeysForUserPathParams, _super);
    function UsersListPublicKeysForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UsersListPublicKeysForUserPathParams.prototype, "username", void 0);
    return UsersListPublicKeysForUserPathParams;
}(SpeakeasyBase));
export { UsersListPublicKeysForUserPathParams };
var UsersListPublicKeysForUserQueryParams = /** @class */ (function (_super) {
    __extends(UsersListPublicKeysForUserQueryParams, _super);
    function UsersListPublicKeysForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], UsersListPublicKeysForUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], UsersListPublicKeysForUserQueryParams.prototype, "perPage", void 0);
    return UsersListPublicKeysForUserQueryParams;
}(SpeakeasyBase));
export { UsersListPublicKeysForUserQueryParams };
var UsersListPublicKeysForUserRequest = /** @class */ (function (_super) {
    __extends(UsersListPublicKeysForUserRequest, _super);
    function UsersListPublicKeysForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListPublicKeysForUserPathParams)
    ], UsersListPublicKeysForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersListPublicKeysForUserQueryParams)
    ], UsersListPublicKeysForUserRequest.prototype, "queryParams", void 0);
    return UsersListPublicKeysForUserRequest;
}(SpeakeasyBase));
export { UsersListPublicKeysForUserRequest };
var UsersListPublicKeysForUserResponse = /** @class */ (function (_super) {
    __extends(UsersListPublicKeysForUserResponse, _super);
    function UsersListPublicKeysForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersListPublicKeysForUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UsersListPublicKeysForUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersListPublicKeysForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.KeySimple }),
        __metadata("design:type", Array)
    ], UsersListPublicKeysForUserResponse.prototype, "keySimples", void 0);
    return UsersListPublicKeysForUserResponse;
}(SpeakeasyBase));
export { UsersListPublicKeysForUserResponse };
