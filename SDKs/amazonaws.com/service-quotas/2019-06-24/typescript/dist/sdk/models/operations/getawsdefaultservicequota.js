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
export var GetAwsDefaultServiceQuotaXAmzTargetEnum;
(function (GetAwsDefaultServiceQuotaXAmzTargetEnum) {
    GetAwsDefaultServiceQuotaXAmzTargetEnum["ServiceQuotasV20190624GetAwsDefaultServiceQuota"] = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota";
})(GetAwsDefaultServiceQuotaXAmzTargetEnum || (GetAwsDefaultServiceQuotaXAmzTargetEnum = {}));
var GetAwsDefaultServiceQuotaHeaders = /** @class */ (function (_super) {
    __extends(GetAwsDefaultServiceQuotaHeaders, _super);
    function GetAwsDefaultServiceQuotaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaHeaders.prototype, "xAmzTarget", void 0);
    return GetAwsDefaultServiceQuotaHeaders;
}(SpeakeasyBase));
export { GetAwsDefaultServiceQuotaHeaders };
var GetAwsDefaultServiceQuotaRequest = /** @class */ (function (_super) {
    __extends(GetAwsDefaultServiceQuotaRequest, _super);
    function GetAwsDefaultServiceQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAwsDefaultServiceQuotaHeaders)
    ], GetAwsDefaultServiceQuotaRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetAwsDefaultServiceQuotaRequest)
    ], GetAwsDefaultServiceQuotaRequest.prototype, "request", void 0);
    return GetAwsDefaultServiceQuotaRequest;
}(SpeakeasyBase));
export { GetAwsDefaultServiceQuotaRequest };
var GetAwsDefaultServiceQuotaResponse = /** @class */ (function (_super) {
    __extends(GetAwsDefaultServiceQuotaResponse, _super);
    function GetAwsDefaultServiceQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetAwsDefaultServiceQuotaResponse)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "getAwsDefaultServiceQuotaResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "noSuchResourceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAwsDefaultServiceQuotaResponse.prototype, "tooManyRequestsException", void 0);
    return GetAwsDefaultServiceQuotaResponse;
}(SpeakeasyBase));
export { GetAwsDefaultServiceQuotaResponse };
