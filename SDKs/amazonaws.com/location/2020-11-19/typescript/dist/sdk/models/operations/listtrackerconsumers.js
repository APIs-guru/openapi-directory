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
var ListTrackerConsumersPathParams = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersPathParams, _super);
    function ListTrackerConsumersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrackerName" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersPathParams.prototype, "trackerName", void 0);
    return ListTrackerConsumersPathParams;
}(SpeakeasyBase));
export { ListTrackerConsumersPathParams };
var ListTrackerConsumersQueryParams = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersQueryParams, _super);
    function ListTrackerConsumersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersQueryParams.prototype, "nextToken", void 0);
    return ListTrackerConsumersQueryParams;
}(SpeakeasyBase));
export { ListTrackerConsumersQueryParams };
var ListTrackerConsumersHeaders = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersHeaders, _super);
    function ListTrackerConsumersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListTrackerConsumersHeaders;
}(SpeakeasyBase));
export { ListTrackerConsumersHeaders };
var ListTrackerConsumersRequestBody = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersRequestBody, _super);
    function ListTrackerConsumersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListTrackerConsumersRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListTrackerConsumersRequestBody.prototype, "nextToken", void 0);
    return ListTrackerConsumersRequestBody;
}(SpeakeasyBase));
export { ListTrackerConsumersRequestBody };
var ListTrackerConsumersRequest = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersRequest, _super);
    function ListTrackerConsumersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrackerConsumersPathParams)
    ], ListTrackerConsumersRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrackerConsumersQueryParams)
    ], ListTrackerConsumersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListTrackerConsumersHeaders)
    ], ListTrackerConsumersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListTrackerConsumersRequestBody)
    ], ListTrackerConsumersRequest.prototype, "request", void 0);
    return ListTrackerConsumersRequest;
}(SpeakeasyBase));
export { ListTrackerConsumersRequest };
var ListTrackerConsumersResponse = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersResponse, _super);
    function ListTrackerConsumersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTrackerConsumersResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTrackerConsumersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTrackerConsumersResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTrackerConsumersResponse)
    ], ListTrackerConsumersResponse.prototype, "listTrackerConsumersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTrackerConsumersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTrackerConsumersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTrackerConsumersResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTrackerConsumersResponse.prototype, "validationException", void 0);
    return ListTrackerConsumersResponse;
}(SpeakeasyBase));
export { ListTrackerConsumersResponse };
