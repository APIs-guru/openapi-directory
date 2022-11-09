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
export var ListHumanLoopsSortOrderEnum;
(function (ListHumanLoopsSortOrderEnum) {
    ListHumanLoopsSortOrderEnum["Ascending"] = "Ascending";
    ListHumanLoopsSortOrderEnum["Descending"] = "Descending";
})(ListHumanLoopsSortOrderEnum || (ListHumanLoopsSortOrderEnum = {}));
var ListHumanLoopsQueryParams = /** @class */ (function (_super) {
    __extends(ListHumanLoopsQueryParams, _super);
    function ListHumanLoopsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CreationTimeAfter" }),
        __metadata("design:type", Date)
    ], ListHumanLoopsQueryParams.prototype, "creationTimeAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CreationTimeBefore" }),
        __metadata("design:type", Date)
    ], ListHumanLoopsQueryParams.prototype, "creationTimeBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FlowDefinitionArn" }),
        __metadata("design:type", String)
    ], ListHumanLoopsQueryParams.prototype, "flowDefinitionArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListHumanLoopsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListHumanLoopsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SortOrder" }),
        __metadata("design:type", String)
    ], ListHumanLoopsQueryParams.prototype, "sortOrder", void 0);
    return ListHumanLoopsQueryParams;
}(SpeakeasyBase));
export { ListHumanLoopsQueryParams };
var ListHumanLoopsHeaders = /** @class */ (function (_super) {
    __extends(ListHumanLoopsHeaders, _super);
    function ListHumanLoopsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListHumanLoopsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListHumanLoopsHeaders;
}(SpeakeasyBase));
export { ListHumanLoopsHeaders };
var ListHumanLoopsRequest = /** @class */ (function (_super) {
    __extends(ListHumanLoopsRequest, _super);
    function ListHumanLoopsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListHumanLoopsQueryParams)
    ], ListHumanLoopsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListHumanLoopsHeaders)
    ], ListHumanLoopsRequest.prototype, "headers", void 0);
    return ListHumanLoopsRequest;
}(SpeakeasyBase));
export { ListHumanLoopsRequest };
var ListHumanLoopsResponse = /** @class */ (function (_super) {
    __extends(ListHumanLoopsResponse, _super);
    function ListHumanLoopsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListHumanLoopsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListHumanLoopsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListHumanLoopsResponse)
    ], ListHumanLoopsResponse.prototype, "listHumanLoopsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListHumanLoopsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListHumanLoopsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListHumanLoopsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListHumanLoopsResponse.prototype, "validationException", void 0);
    return ListHumanLoopsResponse;
}(SpeakeasyBase));
export { ListHumanLoopsResponse };
