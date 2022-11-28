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
var CreateConfigurationSetHeaders = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetHeaders, _super);
    function CreateConfigurationSetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateConfigurationSetHeaders;
}(SpeakeasyBase));
export { CreateConfigurationSetHeaders };
// CreateConfigurationSetRequestBodyDeliveryOptions
/**
 * Used to associate a configuration set with a dedicated IP pool.
**/
var CreateConfigurationSetRequestBodyDeliveryOptions = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBodyDeliveryOptions, _super);
    function CreateConfigurationSetRequestBodyDeliveryOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingPoolName" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetRequestBodyDeliveryOptions.prototype, "sendingPoolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TlsPolicy" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetRequestBodyDeliveryOptions.prototype, "tlsPolicy", void 0);
    return CreateConfigurationSetRequestBodyDeliveryOptions;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBodyDeliveryOptions };
// CreateConfigurationSetRequestBodyReputationOptions
/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
**/
var CreateConfigurationSetRequestBodyReputationOptions = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBodyReputationOptions, _super);
    function CreateConfigurationSetRequestBodyReputationOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastFreshStart" }),
        __metadata("design:type", Date)
    ], CreateConfigurationSetRequestBodyReputationOptions.prototype, "lastFreshStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReputationMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateConfigurationSetRequestBodyReputationOptions.prototype, "reputationMetricsEnabled", void 0);
    return CreateConfigurationSetRequestBodyReputationOptions;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBodyReputationOptions };
// CreateConfigurationSetRequestBodySendingOptions
/**
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
var CreateConfigurationSetRequestBodySendingOptions = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBodySendingOptions, _super);
    function CreateConfigurationSetRequestBodySendingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateConfigurationSetRequestBodySendingOptions.prototype, "sendingEnabled", void 0);
    return CreateConfigurationSetRequestBodySendingOptions;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBodySendingOptions };
// CreateConfigurationSetRequestBodySuppressionOptions
/**
 * An object that contains information about the suppression list preferences for your account.
**/
var CreateConfigurationSetRequestBodySuppressionOptions = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBodySuppressionOptions, _super);
    function CreateConfigurationSetRequestBodySuppressionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuppressedReasons" }),
        __metadata("design:type", Array)
    ], CreateConfigurationSetRequestBodySuppressionOptions.prototype, "suppressedReasons", void 0);
    return CreateConfigurationSetRequestBodySuppressionOptions;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBodySuppressionOptions };
// CreateConfigurationSetRequestBodyTrackingOptions
/**
 * <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
**/
var CreateConfigurationSetRequestBodyTrackingOptions = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBodyTrackingOptions, _super);
    function CreateConfigurationSetRequestBodyTrackingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomRedirectDomain" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetRequestBodyTrackingOptions.prototype, "customRedirectDomain", void 0);
    return CreateConfigurationSetRequestBodyTrackingOptions;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBodyTrackingOptions };
var CreateConfigurationSetRequestBody = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequestBody, _super);
    function CreateConfigurationSetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], CreateConfigurationSetRequestBody.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryOptions" }),
        __metadata("design:type", CreateConfigurationSetRequestBodyDeliveryOptions)
    ], CreateConfigurationSetRequestBody.prototype, "deliveryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReputationOptions" }),
        __metadata("design:type", CreateConfigurationSetRequestBodyReputationOptions)
    ], CreateConfigurationSetRequestBody.prototype, "reputationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingOptions" }),
        __metadata("design:type", CreateConfigurationSetRequestBodySendingOptions)
    ], CreateConfigurationSetRequestBody.prototype, "sendingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuppressionOptions" }),
        __metadata("design:type", CreateConfigurationSetRequestBodySuppressionOptions)
    ], CreateConfigurationSetRequestBody.prototype, "suppressionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateConfigurationSetRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrackingOptions" }),
        __metadata("design:type", CreateConfigurationSetRequestBodyTrackingOptions)
    ], CreateConfigurationSetRequestBody.prototype, "trackingOptions", void 0);
    return CreateConfigurationSetRequestBody;
}(SpeakeasyBase));
export { CreateConfigurationSetRequestBody };
var CreateConfigurationSetRequest = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetRequest, _super);
    function CreateConfigurationSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConfigurationSetHeaders)
    ], CreateConfigurationSetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConfigurationSetRequestBody)
    ], CreateConfigurationSetRequest.prototype, "request", void 0);
    return CreateConfigurationSetRequest;
}(SpeakeasyBase));
export { CreateConfigurationSetRequest };
var CreateConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(CreateConfigurationSetResponse, _super);
    function CreateConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "alreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConfigurationSetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateConfigurationSetResponse.prototype, "createConfigurationSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConfigurationSetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConfigurationSetResponse.prototype, "tooManyRequestsException", void 0);
    return CreateConfigurationSetResponse;
}(SpeakeasyBase));
export { CreateConfigurationSetResponse };
