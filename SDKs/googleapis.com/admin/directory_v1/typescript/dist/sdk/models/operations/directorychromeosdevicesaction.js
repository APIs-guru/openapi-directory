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
var DirectoryChromeosdevicesActionPathParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesActionPathParams, _super);
    function DirectoryChromeosdevicesActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionPathParams.prototype, "resourceId", void 0);
    return DirectoryChromeosdevicesActionPathParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesActionPathParams };
var DirectoryChromeosdevicesActionQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesActionQueryParams, _super);
    function DirectoryChromeosdevicesActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryChromeosdevicesActionQueryParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesActionQueryParams };
var DirectoryChromeosdevicesActionSecurity = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesActionSecurity, _super);
    function DirectoryChromeosdevicesActionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesActionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesActionSecurity.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesActionSecurity;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesActionSecurity };
var DirectoryChromeosdevicesActionRequest = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesActionRequest, _super);
    function DirectoryChromeosdevicesActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesActionPathParams)
    ], DirectoryChromeosdevicesActionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesActionQueryParams)
    ], DirectoryChromeosdevicesActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChromeOsDeviceAction)
    ], DirectoryChromeosdevicesActionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesActionSecurity)
    ], DirectoryChromeosdevicesActionRequest.prototype, "security", void 0);
    return DirectoryChromeosdevicesActionRequest;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesActionRequest };
var DirectoryChromeosdevicesActionResponse = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesActionResponse, _super);
    function DirectoryChromeosdevicesActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesActionResponse.prototype, "statusCode", void 0);
    return DirectoryChromeosdevicesActionResponse;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesActionResponse };
