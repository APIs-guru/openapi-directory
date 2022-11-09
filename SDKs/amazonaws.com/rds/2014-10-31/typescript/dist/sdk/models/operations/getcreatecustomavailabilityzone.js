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
export var GetCreateCustomAvailabilityZoneActionEnum;
(function (GetCreateCustomAvailabilityZoneActionEnum) {
    GetCreateCustomAvailabilityZoneActionEnum["CreateCustomAvailabilityZone"] = "CreateCustomAvailabilityZone";
})(GetCreateCustomAvailabilityZoneActionEnum || (GetCreateCustomAvailabilityZoneActionEnum = {}));
export var GetCreateCustomAvailabilityZoneVersionEnum;
(function (GetCreateCustomAvailabilityZoneVersionEnum) {
    GetCreateCustomAvailabilityZoneVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetCreateCustomAvailabilityZoneVersionEnum || (GetCreateCustomAvailabilityZoneVersionEnum = {}));
var GetCreateCustomAvailabilityZoneQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateCustomAvailabilityZoneQueryParams, _super);
    function GetCreateCustomAvailabilityZoneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CustomAvailabilityZoneName" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "customAvailabilityZoneName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExistingVpnId" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "existingVpnId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NewVpnTunnelName" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "newVpnTunnelName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpnTunnelOriginatorIP" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneQueryParams.prototype, "vpnTunnelOriginatorIp", void 0);
    return GetCreateCustomAvailabilityZoneQueryParams;
}(SpeakeasyBase));
export { GetCreateCustomAvailabilityZoneQueryParams };
var GetCreateCustomAvailabilityZoneHeaders = /** @class */ (function (_super) {
    __extends(GetCreateCustomAvailabilityZoneHeaders, _super);
    function GetCreateCustomAvailabilityZoneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateCustomAvailabilityZoneHeaders;
}(SpeakeasyBase));
export { GetCreateCustomAvailabilityZoneHeaders };
var GetCreateCustomAvailabilityZoneRequest = /** @class */ (function (_super) {
    __extends(GetCreateCustomAvailabilityZoneRequest, _super);
    function GetCreateCustomAvailabilityZoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateCustomAvailabilityZoneQueryParams)
    ], GetCreateCustomAvailabilityZoneRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateCustomAvailabilityZoneHeaders)
    ], GetCreateCustomAvailabilityZoneRequest.prototype, "headers", void 0);
    return GetCreateCustomAvailabilityZoneRequest;
}(SpeakeasyBase));
export { GetCreateCustomAvailabilityZoneRequest };
var GetCreateCustomAvailabilityZoneResponse = /** @class */ (function (_super) {
    __extends(GetCreateCustomAvailabilityZoneResponse, _super);
    function GetCreateCustomAvailabilityZoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateCustomAvailabilityZoneResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateCustomAvailabilityZoneResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateCustomAvailabilityZoneResponse.prototype, "statusCode", void 0);
    return GetCreateCustomAvailabilityZoneResponse;
}(SpeakeasyBase));
export { GetCreateCustomAvailabilityZoneResponse };
