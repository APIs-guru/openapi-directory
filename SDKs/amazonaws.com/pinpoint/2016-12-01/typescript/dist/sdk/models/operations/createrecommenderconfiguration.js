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
var CreateRecommenderConfigurationHeaders = /** @class */ (function (_super) {
    __extends(CreateRecommenderConfigurationHeaders, _super);
    function CreateRecommenderConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRecommenderConfigurationHeaders;
}(SpeakeasyBase));
export { CreateRecommenderConfigurationHeaders };
// CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration
/**
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
var CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration = /** @class */ (function (_super) {
    __extends(CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration, _super);
    function CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderIdType" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationProviderIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderRoleArn" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationProviderRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderUri" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationProviderUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationTransformerUri" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationTransformerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsDisplayName" }),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationsDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsPerMessage" }),
        __metadata("design:type", Number)
    ], CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration.prototype, "recommendationsPerMessage", void 0);
    return CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration;
}(SpeakeasyBase));
export { CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration };
var CreateRecommenderConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(CreateRecommenderConfigurationRequestBody, _super);
    function CreateRecommenderConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateRecommenderConfiguration" }),
        __metadata("design:type", CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration)
    ], CreateRecommenderConfigurationRequestBody.prototype, "createRecommenderConfiguration", void 0);
    return CreateRecommenderConfigurationRequestBody;
}(SpeakeasyBase));
export { CreateRecommenderConfigurationRequestBody };
var CreateRecommenderConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateRecommenderConfigurationRequest, _super);
    function CreateRecommenderConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRecommenderConfigurationHeaders)
    ], CreateRecommenderConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRecommenderConfigurationRequestBody)
    ], CreateRecommenderConfigurationRequest.prototype, "request", void 0);
    return CreateRecommenderConfigurationRequest;
}(SpeakeasyBase));
export { CreateRecommenderConfigurationRequest };
var CreateRecommenderConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateRecommenderConfigurationResponse, _super);
    function CreateRecommenderConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRecommenderConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRecommenderConfigurationResponse)
    ], CreateRecommenderConfigurationResponse.prototype, "createRecommenderConfigurationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRecommenderConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRecommenderConfigurationResponse.prototype, "tooManyRequestsException", void 0);
    return CreateRecommenderConfigurationResponse;
}(SpeakeasyBase));
export { CreateRecommenderConfigurationResponse };
