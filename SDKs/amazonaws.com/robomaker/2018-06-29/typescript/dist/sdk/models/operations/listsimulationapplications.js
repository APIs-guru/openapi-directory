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
var ListSimulationApplicationsQueryParams = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsQueryParams, _super);
    function ListSimulationApplicationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsQueryParams.prototype, "nextToken", void 0);
    return ListSimulationApplicationsQueryParams;
}(SpeakeasyBase));
export { ListSimulationApplicationsQueryParams };
var ListSimulationApplicationsHeaders = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsHeaders, _super);
    function ListSimulationApplicationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSimulationApplicationsHeaders;
}(SpeakeasyBase));
export { ListSimulationApplicationsHeaders };
var ListSimulationApplicationsRequestBody = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsRequestBody, _super);
    function ListSimulationApplicationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListSimulationApplicationsRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListSimulationApplicationsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=versionQualifier" }),
        __metadata("design:type", String)
    ], ListSimulationApplicationsRequestBody.prototype, "versionQualifier", void 0);
    return ListSimulationApplicationsRequestBody;
}(SpeakeasyBase));
export { ListSimulationApplicationsRequestBody };
var ListSimulationApplicationsRequest = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsRequest, _super);
    function ListSimulationApplicationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSimulationApplicationsQueryParams)
    ], ListSimulationApplicationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSimulationApplicationsHeaders)
    ], ListSimulationApplicationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListSimulationApplicationsRequestBody)
    ], ListSimulationApplicationsRequest.prototype, "request", void 0);
    return ListSimulationApplicationsRequest;
}(SpeakeasyBase));
export { ListSimulationApplicationsRequest };
var ListSimulationApplicationsResponse = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsResponse, _super);
    function ListSimulationApplicationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSimulationApplicationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSimulationApplicationsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSimulationApplicationsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSimulationApplicationsResponse)
    ], ListSimulationApplicationsResponse.prototype, "listSimulationApplicationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSimulationApplicationsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSimulationApplicationsResponse.prototype, "throttlingException", void 0);
    return ListSimulationApplicationsResponse;
}(SpeakeasyBase));
export { ListSimulationApplicationsResponse };
