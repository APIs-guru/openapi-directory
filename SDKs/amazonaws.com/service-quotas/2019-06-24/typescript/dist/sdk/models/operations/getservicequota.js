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
export var GetServiceQuotaXAmzTargetEnum;
(function (GetServiceQuotaXAmzTargetEnum) {
    GetServiceQuotaXAmzTargetEnum["ServiceQuotasV20190624GetServiceQuota"] = "ServiceQuotasV20190624.GetServiceQuota";
})(GetServiceQuotaXAmzTargetEnum || (GetServiceQuotaXAmzTargetEnum = {}));
var GetServiceQuotaHeaders = /** @class */ (function (_super) {
    __extends(GetServiceQuotaHeaders, _super);
    function GetServiceQuotaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetServiceQuotaHeaders.prototype, "xAmzTarget", void 0);
    return GetServiceQuotaHeaders;
}(SpeakeasyBase));
export { GetServiceQuotaHeaders };
var GetServiceQuotaRequest = /** @class */ (function (_super) {
    __extends(GetServiceQuotaRequest, _super);
    function GetServiceQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetServiceQuotaHeaders)
    ], GetServiceQuotaRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetServiceQuotaRequest)
    ], GetServiceQuotaRequest.prototype, "request", void 0);
    return GetServiceQuotaRequest;
}(SpeakeasyBase));
export { GetServiceQuotaRequest };
var GetServiceQuotaResponse = /** @class */ (function (_super) {
    __extends(GetServiceQuotaResponse, _super);
    function GetServiceQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetServiceQuotaResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetServiceQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetServiceQuotaResponse)
    ], GetServiceQuotaResponse.prototype, "getServiceQuotaResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetServiceQuotaResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetServiceQuotaResponse.prototype, "noSuchResourceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetServiceQuotaResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetServiceQuotaResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetServiceQuotaResponse.prototype, "tooManyRequestsException", void 0);
    return GetServiceQuotaResponse;
}(SpeakeasyBase));
export { GetServiceQuotaResponse };
