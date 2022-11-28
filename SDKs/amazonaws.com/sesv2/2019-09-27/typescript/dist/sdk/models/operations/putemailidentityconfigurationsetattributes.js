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
var PutEmailIdentityConfigurationSetAttributesPathParams = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesPathParams, _super);
    function PutEmailIdentityConfigurationSetAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesPathParams.prototype, "emailIdentity", void 0);
    return PutEmailIdentityConfigurationSetAttributesPathParams;
}(SpeakeasyBase));
export { PutEmailIdentityConfigurationSetAttributesPathParams };
var PutEmailIdentityConfigurationSetAttributesHeaders = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesHeaders, _super);
    function PutEmailIdentityConfigurationSetAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutEmailIdentityConfigurationSetAttributesHeaders;
}(SpeakeasyBase));
export { PutEmailIdentityConfigurationSetAttributesHeaders };
var PutEmailIdentityConfigurationSetAttributesRequestBody = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesRequestBody, _super);
    function PutEmailIdentityConfigurationSetAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesRequestBody.prototype, "configurationSetName", void 0);
    return PutEmailIdentityConfigurationSetAttributesRequestBody;
}(SpeakeasyBase));
export { PutEmailIdentityConfigurationSetAttributesRequestBody };
var PutEmailIdentityConfigurationSetAttributesRequest = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesRequest, _super);
    function PutEmailIdentityConfigurationSetAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmailIdentityConfigurationSetAttributesPathParams)
    ], PutEmailIdentityConfigurationSetAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutEmailIdentityConfigurationSetAttributesHeaders)
    ], PutEmailIdentityConfigurationSetAttributesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutEmailIdentityConfigurationSetAttributesRequestBody)
    ], PutEmailIdentityConfigurationSetAttributesRequest.prototype, "request", void 0);
    return PutEmailIdentityConfigurationSetAttributesRequest;
}(SpeakeasyBase));
export { PutEmailIdentityConfigurationSetAttributesRequest };
var PutEmailIdentityConfigurationSetAttributesResponse = /** @class */ (function (_super) {
    __extends(PutEmailIdentityConfigurationSetAttributesResponse, _super);
    function PutEmailIdentityConfigurationSetAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "putEmailIdentityConfigurationSetAttributesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutEmailIdentityConfigurationSetAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return PutEmailIdentityConfigurationSetAttributesResponse;
}(SpeakeasyBase));
export { PutEmailIdentityConfigurationSetAttributesResponse };
