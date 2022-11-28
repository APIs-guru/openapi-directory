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
var ListVocabularyFiltersQueryParams = /** @class */ (function (_super) {
    __extends(ListVocabularyFiltersQueryParams, _super);
    function ListVocabularyFiltersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersQueryParams.prototype, "nextToken", void 0);
    return ListVocabularyFiltersQueryParams;
}(SpeakeasyBase));
export { ListVocabularyFiltersQueryParams };
export var ListVocabularyFiltersXAmzTargetEnum;
(function (ListVocabularyFiltersXAmzTargetEnum) {
    ListVocabularyFiltersXAmzTargetEnum["TranscribeListVocabularyFilters"] = "Transcribe.ListVocabularyFilters";
})(ListVocabularyFiltersXAmzTargetEnum || (ListVocabularyFiltersXAmzTargetEnum = {}));
var ListVocabularyFiltersHeaders = /** @class */ (function (_super) {
    __extends(ListVocabularyFiltersHeaders, _super);
    function ListVocabularyFiltersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListVocabularyFiltersHeaders.prototype, "xAmzTarget", void 0);
    return ListVocabularyFiltersHeaders;
}(SpeakeasyBase));
export { ListVocabularyFiltersHeaders };
var ListVocabularyFiltersRequest = /** @class */ (function (_super) {
    __extends(ListVocabularyFiltersRequest, _super);
    function ListVocabularyFiltersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVocabularyFiltersQueryParams)
    ], ListVocabularyFiltersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListVocabularyFiltersHeaders)
    ], ListVocabularyFiltersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListVocabularyFiltersRequest)
    ], ListVocabularyFiltersRequest.prototype, "request", void 0);
    return ListVocabularyFiltersRequest;
}(SpeakeasyBase));
export { ListVocabularyFiltersRequest };
var ListVocabularyFiltersResponse = /** @class */ (function (_super) {
    __extends(ListVocabularyFiltersResponse, _super);
    function ListVocabularyFiltersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListVocabularyFiltersResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListVocabularyFiltersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListVocabularyFiltersResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListVocabularyFiltersResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVocabularyFiltersResponse)
    ], ListVocabularyFiltersResponse.prototype, "listVocabularyFiltersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListVocabularyFiltersResponse.prototype, "statusCode", void 0);
    return ListVocabularyFiltersResponse;
}(SpeakeasyBase));
export { ListVocabularyFiltersResponse };
