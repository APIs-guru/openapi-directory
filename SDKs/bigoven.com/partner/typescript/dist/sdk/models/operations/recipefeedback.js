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
var RecipeFeedbackPathParams = /** @class */ (function (_super) {
    __extends(RecipeFeedbackPathParams, _super);
    function RecipeFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" }),
        __metadata("design:type", Number)
    ], RecipeFeedbackPathParams.prototype, "recipeId", void 0);
    return RecipeFeedbackPathParams;
}(SpeakeasyBase));
export { RecipeFeedbackPathParams };
var RecipeFeedbackRequests = /** @class */ (function (_super) {
    __extends(RecipeFeedbackRequests, _super);
    function RecipeFeedbackRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Api2ModelsRecipesFeedbackDto)
    ], RecipeFeedbackRequests.prototype, "api2ModelsRecipesFeedbackDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.Api2ModelsRecipesFeedbackDto)
    ], RecipeFeedbackRequests.prototype, "api2ModelsRecipesFeedbackDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Api2ModelsRecipesFeedbackDto)
    ], RecipeFeedbackRequests.prototype, "api2ModelsRecipesFeedbackDto2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], RecipeFeedbackRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], RecipeFeedbackRequests.prototype, "textXml", void 0);
    return RecipeFeedbackRequests;
}(SpeakeasyBase));
export { RecipeFeedbackRequests };
var RecipeFeedbackRequest = /** @class */ (function (_super) {
    __extends(RecipeFeedbackRequest, _super);
    function RecipeFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeFeedbackPathParams)
    ], RecipeFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeFeedbackRequests)
    ], RecipeFeedbackRequest.prototype, "request", void 0);
    return RecipeFeedbackRequest;
}(SpeakeasyBase));
export { RecipeFeedbackRequest };
var RecipeFeedbackResponse = /** @class */ (function (_super) {
    __extends(RecipeFeedbackResponse, _super);
    function RecipeFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeFeedbackResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RecipeFeedbackResponse.prototype, "systemObject", void 0);
    return RecipeFeedbackResponse;
}(SpeakeasyBase));
export { RecipeFeedbackResponse };
