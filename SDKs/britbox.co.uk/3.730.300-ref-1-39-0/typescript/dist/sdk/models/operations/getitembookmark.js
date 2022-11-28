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
var GetItemBookmarkPathParams = /** @class */ (function (_super) {
    __extends(GetItemBookmarkPathParams, _super);
    function GetItemBookmarkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetItemBookmarkPathParams.prototype, "itemId", void 0);
    return GetItemBookmarkPathParams;
}(SpeakeasyBase));
export { GetItemBookmarkPathParams };
var GetItemBookmarkQueryParams = /** @class */ (function (_super) {
    __extends(GetItemBookmarkQueryParams, _super);
    function GetItemBookmarkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetItemBookmarkQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetItemBookmarkQueryParams.prototype, "lang", void 0);
    return GetItemBookmarkQueryParams;
}(SpeakeasyBase));
export { GetItemBookmarkQueryParams };
var GetItemBookmarkSecurity = /** @class */ (function (_super) {
    __extends(GetItemBookmarkSecurity, _super);
    function GetItemBookmarkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeProfileAuth)
    ], GetItemBookmarkSecurity.prototype, "profileAuth", void 0);
    return GetItemBookmarkSecurity;
}(SpeakeasyBase));
export { GetItemBookmarkSecurity };
var GetItemBookmarkRequest = /** @class */ (function (_super) {
    __extends(GetItemBookmarkRequest, _super);
    function GetItemBookmarkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemBookmarkPathParams)
    ], GetItemBookmarkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemBookmarkQueryParams)
    ], GetItemBookmarkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemBookmarkSecurity)
    ], GetItemBookmarkRequest.prototype, "security", void 0);
    return GetItemBookmarkRequest;
}(SpeakeasyBase));
export { GetItemBookmarkRequest };
var GetItemBookmarkResponse = /** @class */ (function (_super) {
    __extends(GetItemBookmarkResponse, _super);
    function GetItemBookmarkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Bookmark)
    ], GetItemBookmarkResponse.prototype, "bookmark", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemBookmarkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetItemBookmarkResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemBookmarkResponse.prototype, "statusCode", void 0);
    return GetItemBookmarkResponse;
}(SpeakeasyBase));
export { GetItemBookmarkResponse };
