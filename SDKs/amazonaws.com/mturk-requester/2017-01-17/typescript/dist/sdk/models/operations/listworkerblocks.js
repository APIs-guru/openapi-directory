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
var ListWorkerBlocksQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkerBlocksQueryParams, _super);
    function ListWorkerBlocksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksQueryParams.prototype, "nextToken", void 0);
    return ListWorkerBlocksQueryParams;
}(SpeakeasyBase));
export { ListWorkerBlocksQueryParams };
export var ListWorkerBlocksXAmzTargetEnum;
(function (ListWorkerBlocksXAmzTargetEnum) {
    ListWorkerBlocksXAmzTargetEnum["MTurkRequesterServiceV20170117ListWorkerBlocks"] = "MTurkRequesterServiceV20170117.ListWorkerBlocks";
})(ListWorkerBlocksXAmzTargetEnum || (ListWorkerBlocksXAmzTargetEnum = {}));
var ListWorkerBlocksHeaders = /** @class */ (function (_super) {
    __extends(ListWorkerBlocksHeaders, _super);
    function ListWorkerBlocksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListWorkerBlocksHeaders.prototype, "xAmzTarget", void 0);
    return ListWorkerBlocksHeaders;
}(SpeakeasyBase));
export { ListWorkerBlocksHeaders };
var ListWorkerBlocksRequest = /** @class */ (function (_super) {
    __extends(ListWorkerBlocksRequest, _super);
    function ListWorkerBlocksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerBlocksQueryParams)
    ], ListWorkerBlocksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkerBlocksHeaders)
    ], ListWorkerBlocksRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListWorkerBlocksRequest)
    ], ListWorkerBlocksRequest.prototype, "request", void 0);
    return ListWorkerBlocksRequest;
}(SpeakeasyBase));
export { ListWorkerBlocksRequest };
var ListWorkerBlocksResponse = /** @class */ (function (_super) {
    __extends(ListWorkerBlocksResponse, _super);
    function ListWorkerBlocksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkerBlocksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkerBlocksResponse)
    ], ListWorkerBlocksResponse.prototype, "listWorkerBlocksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListWorkerBlocksResponse.prototype, "requestError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListWorkerBlocksResponse.prototype, "serviceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWorkerBlocksResponse.prototype, "statusCode", void 0);
    return ListWorkerBlocksResponse;
}(SpeakeasyBase));
export { ListWorkerBlocksResponse };
