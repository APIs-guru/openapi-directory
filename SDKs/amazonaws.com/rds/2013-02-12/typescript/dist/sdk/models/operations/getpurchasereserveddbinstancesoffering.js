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
export var GetPurchaseReservedDbInstancesOfferingActionEnum;
(function (GetPurchaseReservedDbInstancesOfferingActionEnum) {
    GetPurchaseReservedDbInstancesOfferingActionEnum["PurchaseReservedDbInstancesOffering"] = "PurchaseReservedDBInstancesOffering";
})(GetPurchaseReservedDbInstancesOfferingActionEnum || (GetPurchaseReservedDbInstancesOfferingActionEnum = {}));
export var GetPurchaseReservedDbInstancesOfferingVersionEnum;
(function (GetPurchaseReservedDbInstancesOfferingVersionEnum) {
    GetPurchaseReservedDbInstancesOfferingVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetPurchaseReservedDbInstancesOfferingVersionEnum || (GetPurchaseReservedDbInstancesOfferingVersionEnum = {}));
var GetPurchaseReservedDbInstancesOfferingQueryParams = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedDbInstancesOfferingQueryParams, _super);
    function GetPurchaseReservedDbInstancesOfferingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceCount" }),
        __metadata("design:type", Number)
    ], GetPurchaseReservedDbInstancesOfferingQueryParams.prototype, "dbInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstanceId" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingQueryParams.prototype, "reservedDbInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingQueryParams.prototype, "reservedDbInstancesOfferingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingQueryParams.prototype, "version", void 0);
    return GetPurchaseReservedDbInstancesOfferingQueryParams;
}(SpeakeasyBase));
export { GetPurchaseReservedDbInstancesOfferingQueryParams };
var GetPurchaseReservedDbInstancesOfferingHeaders = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedDbInstancesOfferingHeaders, _super);
    function GetPurchaseReservedDbInstancesOfferingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPurchaseReservedDbInstancesOfferingHeaders;
}(SpeakeasyBase));
export { GetPurchaseReservedDbInstancesOfferingHeaders };
var GetPurchaseReservedDbInstancesOfferingRequest = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedDbInstancesOfferingRequest, _super);
    function GetPurchaseReservedDbInstancesOfferingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPurchaseReservedDbInstancesOfferingQueryParams)
    ], GetPurchaseReservedDbInstancesOfferingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPurchaseReservedDbInstancesOfferingHeaders)
    ], GetPurchaseReservedDbInstancesOfferingRequest.prototype, "headers", void 0);
    return GetPurchaseReservedDbInstancesOfferingRequest;
}(SpeakeasyBase));
export { GetPurchaseReservedDbInstancesOfferingRequest };
var GetPurchaseReservedDbInstancesOfferingResponse = /** @class */ (function (_super) {
    __extends(GetPurchaseReservedDbInstancesOfferingResponse, _super);
    function GetPurchaseReservedDbInstancesOfferingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPurchaseReservedDbInstancesOfferingResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPurchaseReservedDbInstancesOfferingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPurchaseReservedDbInstancesOfferingResponse.prototype, "statusCode", void 0);
    return GetPurchaseReservedDbInstancesOfferingResponse;
}(SpeakeasyBase));
export { GetPurchaseReservedDbInstancesOfferingResponse };
