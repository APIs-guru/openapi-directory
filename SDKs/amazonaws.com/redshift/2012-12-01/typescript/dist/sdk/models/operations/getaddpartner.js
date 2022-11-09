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
export var GetAddPartnerActionEnum;
(function (GetAddPartnerActionEnum) {
    GetAddPartnerActionEnum["AddPartner"] = "AddPartner";
})(GetAddPartnerActionEnum || (GetAddPartnerActionEnum = {}));
export var GetAddPartnerVersionEnum;
(function (GetAddPartnerVersionEnum) {
    GetAddPartnerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAddPartnerVersionEnum || (GetAddPartnerVersionEnum = {}));
var GetAddPartnerQueryParams = /** @class */ (function (_super) {
    __extends(GetAddPartnerQueryParams, _super);
    function GetAddPartnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccountId" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DatabaseName" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "databaseName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PartnerName" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "partnerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddPartnerQueryParams.prototype, "version", void 0);
    return GetAddPartnerQueryParams;
}(SpeakeasyBase));
export { GetAddPartnerQueryParams };
var GetAddPartnerHeaders = /** @class */ (function (_super) {
    __extends(GetAddPartnerHeaders, _super);
    function GetAddPartnerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddPartnerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddPartnerHeaders;
}(SpeakeasyBase));
export { GetAddPartnerHeaders };
var GetAddPartnerRequest = /** @class */ (function (_super) {
    __extends(GetAddPartnerRequest, _super);
    function GetAddPartnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddPartnerQueryParams)
    ], GetAddPartnerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddPartnerHeaders)
    ], GetAddPartnerRequest.prototype, "headers", void 0);
    return GetAddPartnerRequest;
}(SpeakeasyBase));
export { GetAddPartnerRequest };
var GetAddPartnerResponse = /** @class */ (function (_super) {
    __extends(GetAddPartnerResponse, _super);
    function GetAddPartnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddPartnerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAddPartnerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAddPartnerResponse.prototype, "statusCode", void 0);
    return GetAddPartnerResponse;
}(SpeakeasyBase));
export { GetAddPartnerResponse };
