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
var GetLayerVersionPolicyPathParams = /** @class */ (function (_super) {
    __extends(GetLayerVersionPolicyPathParams, _super);
    function GetLayerVersionPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyPathParams.prototype, "layerName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=VersionNumber" }),
        __metadata("design:type", Number)
    ], GetLayerVersionPolicyPathParams.prototype, "versionNumber", void 0);
    return GetLayerVersionPolicyPathParams;
}(SpeakeasyBase));
export { GetLayerVersionPolicyPathParams };
var GetLayerVersionPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetLayerVersionPolicyHeaders, _super);
    function GetLayerVersionPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetLayerVersionPolicyHeaders;
}(SpeakeasyBase));
export { GetLayerVersionPolicyHeaders };
var GetLayerVersionPolicyRequest = /** @class */ (function (_super) {
    __extends(GetLayerVersionPolicyRequest, _super);
    function GetLayerVersionPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLayerVersionPolicyPathParams)
    ], GetLayerVersionPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetLayerVersionPolicyHeaders)
    ], GetLayerVersionPolicyRequest.prototype, "headers", void 0);
    return GetLayerVersionPolicyRequest;
}(SpeakeasyBase));
export { GetLayerVersionPolicyRequest };
var GetLayerVersionPolicyResponse = /** @class */ (function (_super) {
    __extends(GetLayerVersionPolicyResponse, _super);
    function GetLayerVersionPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLayerVersionPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetLayerVersionPolicyResponse)
    ], GetLayerVersionPolicyResponse.prototype, "getLayerVersionPolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionPolicyResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionPolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionPolicyResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLayerVersionPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionPolicyResponse.prototype, "tooManyRequestsException", void 0);
    return GetLayerVersionPolicyResponse;
}(SpeakeasyBase));
export { GetLayerVersionPolicyResponse };
