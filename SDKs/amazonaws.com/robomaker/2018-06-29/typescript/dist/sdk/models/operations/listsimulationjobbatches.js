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
var ListSimulationJobBatchesQueryParams = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesQueryParams, _super);
    function ListSimulationJobBatchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesQueryParams.prototype, "nextToken", void 0);
    return ListSimulationJobBatchesQueryParams;
}(SpeakeasyBase));
export { ListSimulationJobBatchesQueryParams };
var ListSimulationJobBatchesHeaders = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesHeaders, _super);
    function ListSimulationJobBatchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSimulationJobBatchesHeaders;
}(SpeakeasyBase));
export { ListSimulationJobBatchesHeaders };
var ListSimulationJobBatchesRequestBody = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesRequestBody, _super);
    function ListSimulationJobBatchesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListSimulationJobBatchesRequestBody.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListSimulationJobBatchesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesRequestBody.prototype, "nextToken", void 0);
    return ListSimulationJobBatchesRequestBody;
}(SpeakeasyBase));
export { ListSimulationJobBatchesRequestBody };
var ListSimulationJobBatchesRequest = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesRequest, _super);
    function ListSimulationJobBatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListSimulationJobBatchesQueryParams)
    ], ListSimulationJobBatchesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListSimulationJobBatchesHeaders)
    ], ListSimulationJobBatchesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListSimulationJobBatchesRequestBody)
    ], ListSimulationJobBatchesRequest.prototype, "request", void 0);
    return ListSimulationJobBatchesRequest;
}(SpeakeasyBase));
export { ListSimulationJobBatchesRequest };
var ListSimulationJobBatchesResponse = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesResponse, _super);
    function ListSimulationJobBatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListSimulationJobBatchesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSimulationJobBatchesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListSimulationJobBatchesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSimulationJobBatchesResponse)
    ], ListSimulationJobBatchesResponse.prototype, "listSimulationJobBatchesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListSimulationJobBatchesResponse.prototype, "statusCode", void 0);
    return ListSimulationJobBatchesResponse;
}(SpeakeasyBase));
export { ListSimulationJobBatchesResponse };
