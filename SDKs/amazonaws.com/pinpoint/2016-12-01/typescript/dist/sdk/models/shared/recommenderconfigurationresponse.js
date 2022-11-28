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
// RecommenderConfigurationResponse
/**
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
**/
var RecommenderConfigurationResponse = /** @class */ (function (_super) {
    __extends(RecommenderConfigurationResponse, _super);
    function RecommenderConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], RecommenderConfigurationResponse.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderIdType" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "recommendationProviderIdType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderRoleArn" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "recommendationProviderRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationProviderUri" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "recommendationProviderUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationTransformerUri" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "recommendationTransformerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsDisplayName" }),
        __metadata("design:type", String)
    ], RecommenderConfigurationResponse.prototype, "recommendationsDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationsPerMessage" }),
        __metadata("design:type", Number)
    ], RecommenderConfigurationResponse.prototype, "recommendationsPerMessage", void 0);
    return RecommenderConfigurationResponse;
}(SpeakeasyBase));
export { RecommenderConfigurationResponse };
