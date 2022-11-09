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
var RemoveLayerVersionPermissionPathParams = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionPathParams, _super);
    function RemoveLayerVersionPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionPathParams.prototype, "layerName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=StatementId" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionPathParams.prototype, "statementId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" }),
        __metadata("design:type", Number)
    ], RemoveLayerVersionPermissionPathParams.prototype, "versionNumber", void 0);
    return RemoveLayerVersionPermissionPathParams;
}(SpeakeasyBase));
export { RemoveLayerVersionPermissionPathParams };
var RemoveLayerVersionPermissionQueryParams = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionQueryParams, _super);
    function RemoveLayerVersionPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RevisionId" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionQueryParams.prototype, "revisionId", void 0);
    return RemoveLayerVersionPermissionQueryParams;
}(SpeakeasyBase));
export { RemoveLayerVersionPermissionQueryParams };
var RemoveLayerVersionPermissionHeaders = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionHeaders, _super);
    function RemoveLayerVersionPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RemoveLayerVersionPermissionHeaders;
}(SpeakeasyBase));
export { RemoveLayerVersionPermissionHeaders };
var RemoveLayerVersionPermissionRequest = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionRequest, _super);
    function RemoveLayerVersionPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveLayerVersionPermissionPathParams)
    ], RemoveLayerVersionPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveLayerVersionPermissionQueryParams)
    ], RemoveLayerVersionPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveLayerVersionPermissionHeaders)
    ], RemoveLayerVersionPermissionRequest.prototype, "headers", void 0);
    return RemoveLayerVersionPermissionRequest;
}(SpeakeasyBase));
export { RemoveLayerVersionPermissionRequest };
var RemoveLayerVersionPermissionResponse = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionResponse, _super);
    function RemoveLayerVersionPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RemoveLayerVersionPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveLayerVersionPermissionResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveLayerVersionPermissionResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveLayerVersionPermissionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveLayerVersionPermissionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RemoveLayerVersionPermissionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveLayerVersionPermissionResponse.prototype, "tooManyRequestsException", void 0);
    return RemoveLayerVersionPermissionResponse;
}(SpeakeasyBase));
export { RemoveLayerVersionPermissionResponse };
