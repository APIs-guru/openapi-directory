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
var AssociateAssetsPathParams = /** @class */ (function (_super) {
    __extends(AssociateAssetsPathParams, _super);
    function AssociateAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assetId" }),
        __metadata("design:type", String)
    ], AssociateAssetsPathParams.prototype, "assetId", void 0);
    return AssociateAssetsPathParams;
}(SpeakeasyBase));
export { AssociateAssetsPathParams };
var AssociateAssetsHeaders = /** @class */ (function (_super) {
    __extends(AssociateAssetsHeaders, _super);
    function AssociateAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateAssetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateAssetsHeaders;
}(SpeakeasyBase));
export { AssociateAssetsHeaders };
var AssociateAssetsRequestBody = /** @class */ (function (_super) {
    __extends(AssociateAssetsRequestBody, _super);
    function AssociateAssetsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=childAssetId" }),
        __metadata("design:type", String)
    ], AssociateAssetsRequestBody.prototype, "childAssetId", void 0);
    __decorate([
        Metadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], AssociateAssetsRequestBody.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=hierarchyId" }),
        __metadata("design:type", String)
    ], AssociateAssetsRequestBody.prototype, "hierarchyId", void 0);
    return AssociateAssetsRequestBody;
}(SpeakeasyBase));
export { AssociateAssetsRequestBody };
var AssociateAssetsRequest = /** @class */ (function (_super) {
    __extends(AssociateAssetsRequest, _super);
    function AssociateAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateAssetsPathParams)
    ], AssociateAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateAssetsHeaders)
    ], AssociateAssetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateAssetsRequestBody)
    ], AssociateAssetsRequest.prototype, "request", void 0);
    return AssociateAssetsRequest;
}(SpeakeasyBase));
export { AssociateAssetsRequest };
var AssociateAssetsResponse = /** @class */ (function (_super) {
    __extends(AssociateAssetsResponse, _super);
    function AssociateAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateAssetsResponse.prototype, "throttlingException", void 0);
    return AssociateAssetsResponse;
}(SpeakeasyBase));
export { AssociateAssetsResponse };
