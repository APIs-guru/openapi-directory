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
var DirectoryResourcesFeaturesPatchPathParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesPatchPathParams, _super);
    function DirectoryResourcesFeaturesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchPathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=featureKey" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchPathParams.prototype, "featureKey", void 0);
    return DirectoryResourcesFeaturesPatchPathParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesPatchPathParams };
var DirectoryResourcesFeaturesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesPatchQueryParams, _super);
    function DirectoryResourcesFeaturesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryResourcesFeaturesPatchQueryParams;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesPatchQueryParams };
var DirectoryResourcesFeaturesPatchSecurity = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesPatchSecurity, _super);
    function DirectoryResourcesFeaturesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryResourcesFeaturesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryResourcesFeaturesPatchSecurity.prototype, "oauth2c", void 0);
    return DirectoryResourcesFeaturesPatchSecurity;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesPatchSecurity };
var DirectoryResourcesFeaturesPatchRequest = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesPatchRequest, _super);
    function DirectoryResourcesFeaturesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesPatchPathParams)
    ], DirectoryResourcesFeaturesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesPatchQueryParams)
    ], DirectoryResourcesFeaturesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Feature)
    ], DirectoryResourcesFeaturesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryResourcesFeaturesPatchSecurity)
    ], DirectoryResourcesFeaturesPatchRequest.prototype, "security", void 0);
    return DirectoryResourcesFeaturesPatchRequest;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesPatchRequest };
var DirectoryResourcesFeaturesPatchResponse = /** @class */ (function (_super) {
    __extends(DirectoryResourcesFeaturesPatchResponse, _super);
    function DirectoryResourcesFeaturesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryResourcesFeaturesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Feature)
    ], DirectoryResourcesFeaturesPatchResponse.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryResourcesFeaturesPatchResponse.prototype, "statusCode", void 0);
    return DirectoryResourcesFeaturesPatchResponse;
}(SpeakeasyBase));
export { DirectoryResourcesFeaturesPatchResponse };
