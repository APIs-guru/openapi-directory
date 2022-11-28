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
var DeleteItemBookmarkPathParams = /** @class */ (function (_super) {
    __extends(DeleteItemBookmarkPathParams, _super);
    function DeleteItemBookmarkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], DeleteItemBookmarkPathParams.prototype, "itemId", void 0);
    return DeleteItemBookmarkPathParams;
}(SpeakeasyBase));
export { DeleteItemBookmarkPathParams };
var DeleteItemBookmarkQueryParams = /** @class */ (function (_super) {
    __extends(DeleteItemBookmarkQueryParams, _super);
    function DeleteItemBookmarkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], DeleteItemBookmarkQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], DeleteItemBookmarkQueryParams.prototype, "lang", void 0);
    return DeleteItemBookmarkQueryParams;
}(SpeakeasyBase));
export { DeleteItemBookmarkQueryParams };
var DeleteItemBookmarkSecurity = /** @class */ (function (_super) {
    __extends(DeleteItemBookmarkSecurity, _super);
    function DeleteItemBookmarkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], DeleteItemBookmarkSecurity.prototype, "profileAuth", void 0);
    return DeleteItemBookmarkSecurity;
}(SpeakeasyBase));
export { DeleteItemBookmarkSecurity };
var DeleteItemBookmarkRequest = /** @class */ (function (_super) {
    __extends(DeleteItemBookmarkRequest, _super);
    function DeleteItemBookmarkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemBookmarkPathParams)
    ], DeleteItemBookmarkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemBookmarkQueryParams)
    ], DeleteItemBookmarkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItemBookmarkSecurity)
    ], DeleteItemBookmarkRequest.prototype, "security", void 0);
    return DeleteItemBookmarkRequest;
}(SpeakeasyBase));
export { DeleteItemBookmarkRequest };
var DeleteItemBookmarkResponse = /** @class */ (function (_super) {
    __extends(DeleteItemBookmarkResponse, _super);
    function DeleteItemBookmarkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteItemBookmarkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], DeleteItemBookmarkResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteItemBookmarkResponse.prototype, "statusCode", void 0);
    return DeleteItemBookmarkResponse;
}(SpeakeasyBase));
export { DeleteItemBookmarkResponse };
