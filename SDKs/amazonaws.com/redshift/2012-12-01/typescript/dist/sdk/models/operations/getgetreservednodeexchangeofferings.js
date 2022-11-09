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
export var GetGetReservedNodeExchangeOfferingsActionEnum;
(function (GetGetReservedNodeExchangeOfferingsActionEnum) {
    GetGetReservedNodeExchangeOfferingsActionEnum["GetReservedNodeExchangeOfferings"] = "GetReservedNodeExchangeOfferings";
})(GetGetReservedNodeExchangeOfferingsActionEnum || (GetGetReservedNodeExchangeOfferingsActionEnum = {}));
export var GetGetReservedNodeExchangeOfferingsVersionEnum;
(function (GetGetReservedNodeExchangeOfferingsVersionEnum) {
    GetGetReservedNodeExchangeOfferingsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetGetReservedNodeExchangeOfferingsVersionEnum || (GetGetReservedNodeExchangeOfferingsVersionEnum = {}));
var GetGetReservedNodeExchangeOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetReservedNodeExchangeOfferingsQueryParams, _super);
    function GetGetReservedNodeExchangeOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetGetReservedNodeExchangeOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeId" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsQueryParams.prototype, "reservedNodeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsQueryParams.prototype, "version", void 0);
    return GetGetReservedNodeExchangeOfferingsQueryParams;
}(SpeakeasyBase));
export { GetGetReservedNodeExchangeOfferingsQueryParams };
var GetGetReservedNodeExchangeOfferingsHeaders = /** @class */ (function (_super) {
    __extends(GetGetReservedNodeExchangeOfferingsHeaders, _super);
    function GetGetReservedNodeExchangeOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetReservedNodeExchangeOfferingsHeaders;
}(SpeakeasyBase));
export { GetGetReservedNodeExchangeOfferingsHeaders };
var GetGetReservedNodeExchangeOfferingsRequest = /** @class */ (function (_super) {
    __extends(GetGetReservedNodeExchangeOfferingsRequest, _super);
    function GetGetReservedNodeExchangeOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetReservedNodeExchangeOfferingsQueryParams)
    ], GetGetReservedNodeExchangeOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetReservedNodeExchangeOfferingsHeaders)
    ], GetGetReservedNodeExchangeOfferingsRequest.prototype, "headers", void 0);
    return GetGetReservedNodeExchangeOfferingsRequest;
}(SpeakeasyBase));
export { GetGetReservedNodeExchangeOfferingsRequest };
var GetGetReservedNodeExchangeOfferingsResponse = /** @class */ (function (_super) {
    __extends(GetGetReservedNodeExchangeOfferingsResponse, _super);
    function GetGetReservedNodeExchangeOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetReservedNodeExchangeOfferingsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetReservedNodeExchangeOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetReservedNodeExchangeOfferingsResponse.prototype, "statusCode", void 0);
    return GetGetReservedNodeExchangeOfferingsResponse;
}(SpeakeasyBase));
export { GetGetReservedNodeExchangeOfferingsResponse };
