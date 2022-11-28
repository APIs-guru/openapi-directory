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
var DirectoryResourcesFeaturesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesUpdatePathParams, _super);
    function DirectoryResourcesFeaturesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdatePathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=featureKey" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdatePathParams.prototype, "featureKey", void 0);
    return DirectoryResourcesFeaturesUpdatePathParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesUpdatePathParams };
var DirectoryResourcesFeaturesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesUpdateQueryParams, _super);
    function DirectoryResourcesFeaturesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesFeaturesUpdateQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesUpdateQueryParams };
var DirectoryResourcesFeaturesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesUpdateSecurity, _super);
    function DirectoryResourcesFeaturesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesUpdateSecurity.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesUpdateSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesUpdateSecurity };
var DirectoryResourcesFeaturesUpdateRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesUpdateRequest, _super);
    function DirectoryResourcesFeaturesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesUpdatePathParams)
    ], DirectoryResourcesFeaturesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesUpdateQueryParams)
    ], DirectoryResourcesFeaturesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Feature)
    ], DirectoryResourcesFeaturesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesUpdateSecurity)
    ], DirectoryResourcesFeaturesUpdateRequest.prototype, "security", void 0);
    return DirectoryResourcesFeaturesUpdateRequest;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesUpdateRequest };
var DirectoryResourcesFeaturesUpdateResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesUpdateResponse, _super);
    function DirectoryResourcesFeaturesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Feature)
    ], DirectoryResourcesFeaturesUpdateResponse.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesFeaturesUpdateResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesFeaturesUpdateResponse;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesUpdateResponse };
