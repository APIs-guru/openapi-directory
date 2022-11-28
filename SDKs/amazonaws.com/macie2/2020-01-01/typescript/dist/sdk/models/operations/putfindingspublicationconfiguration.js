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
var PutFindingsPublicationConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationHeaders, _super);
    function PutFindingsPublicationConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutFindingsPublicationConfigurationHeaders;
}(SpeakeasyBase));
export { PutFindingsPublicationConfigurationHeaders };
// PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration
/**
 * Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.
**/
var PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration, _super);
    function PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishClassificationFindings" }),
        __metadata("design:type", Boolean)
    ], PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration.prototype, "publishClassificationFindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishPolicyFindings" }),
        __metadata("design:type", Boolean)
    ], PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration.prototype, "publishPolicyFindings", void 0);
    return PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;
}(SpeakeasyBase));
export { PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration };
var PutFindingsPublicationConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationRequestBody, _super);
    function PutFindingsPublicationConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityHubConfiguration" }),
        __metadata("design:type", PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration)
    ], PutFindingsPublicationConfigurationRequestBody.prototype, "securityHubConfiguration", void 0);
    return PutFindingsPublicationConfigurationRequestBody;
}(SpeakeasyBase));
export { PutFindingsPublicationConfigurationRequestBody };
var PutFindingsPublicationConfigurationRequest = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationRequest, _super);
    function PutFindingsPublicationConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFindingsPublicationConfigurationHeaders)
    ], PutFindingsPublicationConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFindingsPublicationConfigurationRequestBody)
    ], PutFindingsPublicationConfigurationRequest.prototype, "request", void 0);
    return PutFindingsPublicationConfigurationRequest;
}(SpeakeasyBase));
export { PutFindingsPublicationConfigurationRequest };
var PutFindingsPublicationConfigurationResponse = /** @class */ (function (_super) {
    __extends(PutFindingsPublicationConfigurationResponse, _super);
    function PutFindingsPublicationConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFindingsPublicationConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutFindingsPublicationConfigurationResponse.prototype, "putFindingsPublicationConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFindingsPublicationConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutFindingsPublicationConfigurationResponse.prototype, "validationException", void 0);
    return PutFindingsPublicationConfigurationResponse;
}(SpeakeasyBase));
export { PutFindingsPublicationConfigurationResponse };
