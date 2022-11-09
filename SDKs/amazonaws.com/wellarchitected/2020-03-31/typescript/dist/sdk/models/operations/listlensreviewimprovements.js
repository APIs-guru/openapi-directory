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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ListLensReviewImprovementsPathParams = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsPathParams, _super);
    function ListLensReviewImprovementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LensAlias" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsPathParams.prototype, "lensAlias", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsPathParams.prototype, "workloadId", void 0);
    return ListLensReviewImprovementsPathParams;
}(SpeakeasyBase));
export { ListLensReviewImprovementsPathParams };
var ListLensReviewImprovementsQueryParams = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsQueryParams, _super);
    function ListLensReviewImprovementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListLensReviewImprovementsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MilestoneNumber" }),
        __metadata("design:type", Number)
    ], ListLensReviewImprovementsQueryParams.prototype, "milestoneNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PillarId" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsQueryParams.prototype, "pillarId", void 0);
    return ListLensReviewImprovementsQueryParams;
}(SpeakeasyBase));
export { ListLensReviewImprovementsQueryParams };
var ListLensReviewImprovementsHeaders = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsHeaders, _super);
    function ListLensReviewImprovementsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListLensReviewImprovementsHeaders;
}(SpeakeasyBase));
export { ListLensReviewImprovementsHeaders };
var ListLensReviewImprovementsRequest = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsRequest, _super);
    function ListLensReviewImprovementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListLensReviewImprovementsPathParams)
    ], ListLensReviewImprovementsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListLensReviewImprovementsQueryParams)
    ], ListLensReviewImprovementsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListLensReviewImprovementsHeaders)
    ], ListLensReviewImprovementsRequest.prototype, "headers", void 0);
    return ListLensReviewImprovementsRequest;
}(SpeakeasyBase));
export { ListLensReviewImprovementsRequest };
var ListLensReviewImprovementsResponse = /** @class */ (function (_super) {
    __extends(ListLensReviewImprovementsResponse, _super);
    function ListLensReviewImprovementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLensReviewImprovementsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListLensReviewImprovementsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLensReviewImprovementsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLensReviewImprovementsOutput)
    ], ListLensReviewImprovementsResponse.prototype, "listLensReviewImprovementsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLensReviewImprovementsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListLensReviewImprovementsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLensReviewImprovementsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLensReviewImprovementsResponse.prototype, "validationException", void 0);
    return ListLensReviewImprovementsResponse;
}(SpeakeasyBase));
export { ListLensReviewImprovementsResponse };
