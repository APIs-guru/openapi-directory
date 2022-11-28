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
var ListCallAnalyticsCategoriesQueryParams = /** @class */ (function (_super) {
    __extends(ListCallAnalyticsCategoriesQueryParams, _super);
    function ListCallAnalyticsCategoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesQueryParams.prototype, "nextToken", void 0);
    return ListCallAnalyticsCategoriesQueryParams;
}(SpeakeasyBase));
export { ListCallAnalyticsCategoriesQueryParams };
export var ListCallAnalyticsCategoriesXAmzTargetEnum;
(function (ListCallAnalyticsCategoriesXAmzTargetEnum) {
    ListCallAnalyticsCategoriesXAmzTargetEnum["TranscribeListCallAnalyticsCategories"] = "Transcribe.ListCallAnalyticsCategories";
})(ListCallAnalyticsCategoriesXAmzTargetEnum || (ListCallAnalyticsCategoriesXAmzTargetEnum = {}));
var ListCallAnalyticsCategoriesHeaders = /** @class */ (function (_super) {
    __extends(ListCallAnalyticsCategoriesHeaders, _super);
    function ListCallAnalyticsCategoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesHeaders.prototype, "xAmzTarget", void 0);
    return ListCallAnalyticsCategoriesHeaders;
}(SpeakeasyBase));
export { ListCallAnalyticsCategoriesHeaders };
var ListCallAnalyticsCategoriesRequest = /** @class */ (function (_super) {
    __extends(ListCallAnalyticsCategoriesRequest, _super);
    function ListCallAnalyticsCategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallAnalyticsCategoriesQueryParams)
    ], ListCallAnalyticsCategoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallAnalyticsCategoriesHeaders)
    ], ListCallAnalyticsCategoriesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListCallAnalyticsCategoriesRequest)
    ], ListCallAnalyticsCategoriesRequest.prototype, "request", void 0);
    return ListCallAnalyticsCategoriesRequest;
}(SpeakeasyBase));
export { ListCallAnalyticsCategoriesRequest };
var ListCallAnalyticsCategoriesResponse = /** @class */ (function (_super) {
    __extends(ListCallAnalyticsCategoriesResponse, _super);
    function ListCallAnalyticsCategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCallAnalyticsCategoriesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCallAnalyticsCategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCallAnalyticsCategoriesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListCallAnalyticsCategoriesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCallAnalyticsCategoriesResponse)
    ], ListCallAnalyticsCategoriesResponse.prototype, "listCallAnalyticsCategoriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCallAnalyticsCategoriesResponse.prototype, "statusCode", void 0);
    return ListCallAnalyticsCategoriesResponse;
}(SpeakeasyBase));
export { ListCallAnalyticsCategoriesResponse };
