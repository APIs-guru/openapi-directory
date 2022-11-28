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
var SearchPlaceIndexForPositionPathParams = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionPathParams, _super);
    function SearchPlaceIndexForPositionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IndexName" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionPathParams.prototype, "indexName", void 0);
    return SearchPlaceIndexForPositionPathParams;
}(SpeakeasyBase));
export { SearchPlaceIndexForPositionPathParams };
var SearchPlaceIndexForPositionHeaders = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionHeaders, _super);
    function SearchPlaceIndexForPositionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SearchPlaceIndexForPositionHeaders;
}(SpeakeasyBase));
export { SearchPlaceIndexForPositionHeaders };
var SearchPlaceIndexForPositionRequestBody = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionRequestBody, _super);
    function SearchPlaceIndexForPositionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], SearchPlaceIndexForPositionRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Position" }),
        __metadata("design:type", Array)
    ], SearchPlaceIndexForPositionRequestBody.prototype, "position", void 0);
    return SearchPlaceIndexForPositionRequestBody;
}(SpeakeasyBase));
export { SearchPlaceIndexForPositionRequestBody };
var SearchPlaceIndexForPositionRequest = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionRequest, _super);
    function SearchPlaceIndexForPositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchPlaceIndexForPositionPathParams)
    ], SearchPlaceIndexForPositionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchPlaceIndexForPositionHeaders)
    ], SearchPlaceIndexForPositionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SearchPlaceIndexForPositionRequestBody)
    ], SearchPlaceIndexForPositionRequest.prototype, "request", void 0);
    return SearchPlaceIndexForPositionRequest;
}(SpeakeasyBase));
export { SearchPlaceIndexForPositionRequest };
var SearchPlaceIndexForPositionResponse = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionResponse, _super);
    function SearchPlaceIndexForPositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchPlaceIndexForPositionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchPlaceIndexForPositionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchPlaceIndexForPositionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchPlaceIndexForPositionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchPlaceIndexForPositionResponse)
    ], SearchPlaceIndexForPositionResponse.prototype, "searchPlaceIndexForPositionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchPlaceIndexForPositionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchPlaceIndexForPositionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchPlaceIndexForPositionResponse.prototype, "validationException", void 0);
    return SearchPlaceIndexForPositionResponse;
}(SpeakeasyBase));
export { SearchPlaceIndexForPositionResponse };
