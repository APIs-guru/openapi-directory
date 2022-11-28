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
export var GetDisableLoggingActionEnum;
(function (GetDisableLoggingActionEnum) {
    GetDisableLoggingActionEnum["DisableLogging"] = "DisableLogging";
})(GetDisableLoggingActionEnum || (GetDisableLoggingActionEnum = {}));
export var GetDisableLoggingVersionEnum;
(function (GetDisableLoggingVersionEnum) {
    GetDisableLoggingVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDisableLoggingVersionEnum || (GetDisableLoggingVersionEnum = {}));
var GetDisableLoggingQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableLoggingQueryParams, _super);
    function GetDisableLoggingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableLoggingQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDisableLoggingQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableLoggingQueryParams.prototype, "version", void 0);
    return GetDisableLoggingQueryParams;
}(SpeakeasyBase));
export { GetDisableLoggingQueryParams };
var GetDisableLoggingHeaders = /** @class */ (function (_super) {
    __extends(GetDisableLoggingHeaders, _super);
    function GetDisableLoggingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableLoggingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableLoggingHeaders;
}(SpeakeasyBase));
export { GetDisableLoggingHeaders };
var GetDisableLoggingRequest = /** @class */ (function (_super) {
    __extends(GetDisableLoggingRequest, _super);
    function GetDisableLoggingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableLoggingQueryParams)
    ], GetDisableLoggingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableLoggingHeaders)
    ], GetDisableLoggingRequest.prototype, "headers", void 0);
    return GetDisableLoggingRequest;
}(SpeakeasyBase));
export { GetDisableLoggingRequest };
var GetDisableLoggingResponse = /** @class */ (function (_super) {
    __extends(GetDisableLoggingResponse, _super);
    function GetDisableLoggingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableLoggingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableLoggingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableLoggingResponse.prototype, "statusCode", void 0);
    return GetDisableLoggingResponse;
}(SpeakeasyBase));
export { GetDisableLoggingResponse };
