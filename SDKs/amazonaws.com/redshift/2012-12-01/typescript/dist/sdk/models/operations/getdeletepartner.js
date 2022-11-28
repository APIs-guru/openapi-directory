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
export var GetDeletePartnerActionEnum;
(function (GetDeletePartnerActionEnum) {
    GetDeletePartnerActionEnum["DeletePartner"] = "DeletePartner";
})(GetDeletePartnerActionEnum || (GetDeletePartnerActionEnum = {}));
export var GetDeletePartnerVersionEnum;
(function (GetDeletePartnerVersionEnum) {
    GetDeletePartnerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeletePartnerVersionEnum || (GetDeletePartnerVersionEnum = {}));
var GetDeletePartnerQueryParams = /** @class */ (function (_super) {
    __extends(GetDeletePartnerQueryParams, _super);
    function GetDeletePartnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountId" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PartnerName" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "partnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeletePartnerQueryParams.prototype, "version", void 0);
    return GetDeletePartnerQueryParams;
}(SpeakeasyBase));
export { GetDeletePartnerQueryParams };
var GetDeletePartnerHeaders = /** @class */ (function (_super) {
    __extends(GetDeletePartnerHeaders, _super);
    function GetDeletePartnerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeletePartnerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeletePartnerHeaders;
}(SpeakeasyBase));
export { GetDeletePartnerHeaders };
var GetDeletePartnerRequest = /** @class */ (function (_super) {
    __extends(GetDeletePartnerRequest, _super);
    function GetDeletePartnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePartnerQueryParams)
    ], GetDeletePartnerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeletePartnerHeaders)
    ], GetDeletePartnerRequest.prototype, "headers", void 0);
    return GetDeletePartnerRequest;
}(SpeakeasyBase));
export { GetDeletePartnerRequest };
var GetDeletePartnerResponse = /** @class */ (function (_super) {
    __extends(GetDeletePartnerResponse, _super);
    function GetDeletePartnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeletePartnerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeletePartnerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeletePartnerResponse.prototype, "statusCode", void 0);
    return GetDeletePartnerResponse;
}(SpeakeasyBase));
export { GetDeletePartnerResponse };
