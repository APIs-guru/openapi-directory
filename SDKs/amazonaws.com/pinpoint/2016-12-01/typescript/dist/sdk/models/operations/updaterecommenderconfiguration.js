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
var UpdateRecommenderConfigurationPathParams = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationPathParams, _super);
    function UpdateRecommenderConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recommender-id" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationPathParams.prototype, "recommenderId", void 0);
    return UpdateRecommenderConfigurationPathParams;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationPathParams };
var UpdateRecommenderConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationHeaders, _super);
    function UpdateRecommenderConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRecommenderConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationHeaders };
// UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration
/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
var UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration, _super);
    function UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderIdType" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationProviderIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderRoleArn" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationProviderRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderUri" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationProviderUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationTransformerUri" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationTransformerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsDisplayName" }),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationsDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsPerMessage" }),
        __metadata("design:type", Number)
    ], UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration.prototype, "recommendationsPerMessage", void 0);
    return UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration };
var UpdateRecommenderConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationRequestBody, _super);
    function UpdateRecommenderConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateRecommenderConfiguration" }),
        __metadata("design:type", UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration)
    ], UpdateRecommenderConfigurationRequestBody.prototype, "updateRecommenderConfiguration", void 0);
    return UpdateRecommenderConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationRequestBody };
var UpdateRecommenderConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationRequest, _super);
    function UpdateRecommenderConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRecommenderConfigurationPathParams)
    ], UpdateRecommenderConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRecommenderConfigurationHeaders)
    ], UpdateRecommenderConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRecommenderConfigurationRequestBody)
    ], UpdateRecommenderConfigurationRequest.prototype, "request", void 0);
    return UpdateRecommenderConfigurationRequest;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationRequest };
var UpdateRecommenderConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateRecommenderConfigurationResponse, _super);
    function UpdateRecommenderConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRecommenderConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRecommenderConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRecommenderConfigurationResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateRecommenderConfigurationResponse)
    ], UpdateRecommenderConfigurationResponse.prototype, "updateRecommenderConfigurationResponse", void 0);
    return UpdateRecommenderConfigurationResponse;
}(SpeakeasyBase));
export { UpdateRecommenderConfigurationResponse };
