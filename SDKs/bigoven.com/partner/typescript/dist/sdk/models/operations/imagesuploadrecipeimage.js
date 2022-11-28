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
var ImagesUploadRecipeImagePathParams = /** @class */ (function (_super) {
    __extends(ImagesUploadRecipeImagePathParams, _super);
    function ImagesUploadRecipeImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" }),
        __metadata("design:type", String)
    ], ImagesUploadRecipeImagePathParams.prototype, "recipeId", void 0);
    return ImagesUploadRecipeImagePathParams;
}(SpeakeasyBase));
export { ImagesUploadRecipeImagePathParams };
var ImagesUploadRecipeImageQueryParams = /** @class */ (function (_super) {
    __extends(ImagesUploadRecipeImageQueryParams, _super);
    function ImagesUploadRecipeImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caption" }),
        __metadata("design:type", String)
    ], ImagesUploadRecipeImageQueryParams.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], ImagesUploadRecipeImageQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" }),
        __metadata("design:type", Number)
    ], ImagesUploadRecipeImageQueryParams.prototype, "lng", void 0);
    return ImagesUploadRecipeImageQueryParams;
}(SpeakeasyBase));
export { ImagesUploadRecipeImageQueryParams };
var ImagesUploadRecipeImageRequest = /** @class */ (function (_super) {
    __extends(ImagesUploadRecipeImageRequest, _super);
    function ImagesUploadRecipeImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImagesUploadRecipeImagePathParams)
    ], ImagesUploadRecipeImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImagesUploadRecipeImageQueryParams)
    ], ImagesUploadRecipeImageRequest.prototype, "queryParams", void 0);
    return ImagesUploadRecipeImageRequest;
}(SpeakeasyBase));
export { ImagesUploadRecipeImageRequest };
var ImagesUploadRecipeImageResponse = /** @class */ (function (_super) {
    __extends(ImagesUploadRecipeImageResponse, _super);
    function ImagesUploadRecipeImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ImagesUploadRecipeImageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImagesUploadRecipeImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImagesUploadRecipeImageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ImagesUploadRecipeImageResponse.prototype, "systemObject", void 0);
    return ImagesUploadRecipeImageResponse;
}(SpeakeasyBase));
export { ImagesUploadRecipeImageResponse };
