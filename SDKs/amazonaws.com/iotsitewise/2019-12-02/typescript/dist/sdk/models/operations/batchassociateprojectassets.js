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
var BatchAssociateProjectAssetsPathParams = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsPathParams, _super);
    function BatchAssociateProjectAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsPathParams.prototype, "projectId", void 0);
    return BatchAssociateProjectAssetsPathParams;
}(SpeakeasyBase));
export { BatchAssociateProjectAssetsPathParams };
var BatchAssociateProjectAssetsHeaders = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsHeaders, _super);
    function BatchAssociateProjectAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchAssociateProjectAssetsHeaders;
}(SpeakeasyBase));
export { BatchAssociateProjectAssetsHeaders };
var BatchAssociateProjectAssetsRequestBody = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsRequestBody, _super);
    function BatchAssociateProjectAssetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assetIds" }),
        __metadata("design:type", Array)
    ], BatchAssociateProjectAssetsRequestBody.prototype, "assetIds", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsRequestBody.prototype, "clientToken", void 0);
    return BatchAssociateProjectAssetsRequestBody;
}(SpeakeasyBase));
export { BatchAssociateProjectAssetsRequestBody };
var BatchAssociateProjectAssetsRequest = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsRequest, _super);
    function BatchAssociateProjectAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BatchAssociateProjectAssetsPathParams)
    ], BatchAssociateProjectAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BatchAssociateProjectAssetsHeaders)
    ], BatchAssociateProjectAssetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchAssociateProjectAssetsRequestBody)
    ], BatchAssociateProjectAssetsRequest.prototype, "request", void 0);
    return BatchAssociateProjectAssetsRequest;
}(SpeakeasyBase));
export { BatchAssociateProjectAssetsRequest };
var BatchAssociateProjectAssetsResponse = /** @class */ (function (_super) {
    __extends(BatchAssociateProjectAssetsResponse, _super);
    function BatchAssociateProjectAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchAssociateProjectAssetsResponse)
    ], BatchAssociateProjectAssetsResponse.prototype, "batchAssociateProjectAssetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BatchAssociateProjectAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAssociateProjectAssetsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAssociateProjectAssetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAssociateProjectAssetsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAssociateProjectAssetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BatchAssociateProjectAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BatchAssociateProjectAssetsResponse.prototype, "throttlingException", void 0);
    return BatchAssociateProjectAssetsResponse;
}(SpeakeasyBase));
export { BatchAssociateProjectAssetsResponse };
