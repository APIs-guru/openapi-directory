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
export var GetPurchaseReservedNodeOfferingActionEnum;
(function (GetPurchaseReservedNodeOfferingActionEnum) {
    GetPurchaseReservedNodeOfferingActionEnum["PurchaseReservedNodeOffering"] = "PurchaseReservedNodeOffering";
})(GetPurchaseReservedNodeOfferingActionEnum || (GetPurchaseReservedNodeOfferingActionEnum = {}));
export var GetPurchaseReservedNodeOfferingVersionEnum;
(function (GetPurchaseReservedNodeOfferingVersionEnum) {
    GetPurchaseReservedNodeOfferingVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetPurchaseReservedNodeOfferingVersionEnum || (GetPurchaseReservedNodeOfferingVersionEnum = {}));
var GetPurchaseReservedNodeOfferingQueryParams = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedNodeOfferingQueryParams, _super);
    function GetPurchaseReservedNodeOfferingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NodeCount" }),
        __metadata("design:type", Number)
    ], GetPurchaseReservedNodeOfferingQueryParams.prototype, "nodeCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeOfferingId" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingQueryParams.prototype, "reservedNodeOfferingId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingQueryParams.prototype, "version", void 0);
    return GetPurchaseReservedNodeOfferingQueryParams;
}(SpeakeasyBase));
export { GetPurchaseReservedNodeOfferingQueryParams };
var GetPurchaseReservedNodeOfferingHeaders = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedNodeOfferingHeaders, _super);
    function GetPurchaseReservedNodeOfferingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPurchaseReservedNodeOfferingHeaders;
}(SpeakeasyBase));
export { GetPurchaseReservedNodeOfferingHeaders };
var GetPurchaseReservedNodeOfferingRequest = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedNodeOfferingRequest, _super);
    function GetPurchaseReservedNodeOfferingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPurchaseReservedNodeOfferingQueryParams)
    ], GetPurchaseReservedNodeOfferingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPurchaseReservedNodeOfferingHeaders)
    ], GetPurchaseReservedNodeOfferingRequest.prototype, "headers", void 0);
    return GetPurchaseReservedNodeOfferingRequest;
}(SpeakeasyBase));
export { GetPurchaseReservedNodeOfferingRequest };
var GetPurchaseReservedNodeOfferingResponse = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedNodeOfferingResponse, _super);
    function GetPurchaseReservedNodeOfferingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPurchaseReservedNodeOfferingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPurchaseReservedNodeOfferingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPurchaseReservedNodeOfferingResponse.prototype, "statusCode", void 0);
    return GetPurchaseReservedNodeOfferingResponse;
}(SpeakeasyBase));
export { GetPurchaseReservedNodeOfferingResponse };
