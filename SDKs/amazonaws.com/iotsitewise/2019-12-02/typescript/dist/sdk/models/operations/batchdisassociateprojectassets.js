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
var BatchDisassociateProjectAssetsPathParams = /** @class */ (function (_super) {
    __extends(BatchDisassociateProjectAssetsPathParams, _super);
    function BatchDisassociateProjectAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsPathParams.prototype, "projectId", void 0);
    return BatchDisassociateProjectAssetsPathParams;
}(SpeakeasyBase));
export { BatchDisassociateProjectAssetsPathParams };
var BatchDisassociateProjectAssetsHeaders = /** @class */ (function (_super) {
    __extends(BatchDisassociateProjectAssetsHeaders, _super);
    function BatchDisassociateProjectAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchDisassociateProjectAssetsHeaders;
}(SpeakeasyBase));
export { BatchDisassociateProjectAssetsHeaders };
var BatchDisassociateProjectAssetsRequestBody = /** @class */ (function (_super) {
    __extends(BatchDisassociateProjectAssetsRequestBody, _super);
    function BatchDisassociateProjectAssetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetIds" }),
        __metadata("design:type", Array)
    ], BatchDisassociateProjectAssetsRequestBody.prototype, "assetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsRequestBody.prototype, "clientToken", void 0);
    return BatchDisassociateProjectAssetsRequestBody;
}(SpeakeasyBase));
export { BatchDisassociateProjectAssetsRequestBody };
var BatchDisassociateProjectAssetsRequest = /** @class */ (function (_super) {
    __extends(BatchDisassociateProjectAssetsRequest, _super);
    function BatchDisassociateProjectAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchDisassociateProjectAssetsPathParams)
    ], BatchDisassociateProjectAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchDisassociateProjectAssetsHeaders)
    ], BatchDisassociateProjectAssetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchDisassociateProjectAssetsRequestBody)
    ], BatchDisassociateProjectAssetsRequest.prototype, "request", void 0);
    return BatchDisassociateProjectAssetsRequest;
}(SpeakeasyBase));
export { BatchDisassociateProjectAssetsRequest };
var BatchDisassociateProjectAssetsResponse = /** @class */ (function (_super) {
    __extends(BatchDisassociateProjectAssetsResponse, _super);
    function BatchDisassociateProjectAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchDisassociateProjectAssetsResponse)
    ], BatchDisassociateProjectAssetsResponse.prototype, "batchDisassociateProjectAssetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchDisassociateProjectAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateProjectAssetsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateProjectAssetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateProjectAssetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchDisassociateProjectAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchDisassociateProjectAssetsResponse.prototype, "throttlingException", void 0);
    return BatchDisassociateProjectAssetsResponse;
}(SpeakeasyBase));
export { BatchDisassociateProjectAssetsResponse };
