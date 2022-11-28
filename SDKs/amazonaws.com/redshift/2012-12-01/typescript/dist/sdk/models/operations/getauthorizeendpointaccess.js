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
export var GetAuthorizeEndpointAccessActionEnum;
(function (GetAuthorizeEndpointAccessActionEnum) {
    GetAuthorizeEndpointAccessActionEnum["AuthorizeEndpointAccess"] = "AuthorizeEndpointAccess";
})(GetAuthorizeEndpointAccessActionEnum || (GetAuthorizeEndpointAccessActionEnum = {}));
export var GetAuthorizeEndpointAccessVersionEnum;
(function (GetAuthorizeEndpointAccessVersionEnum) {
    GetAuthorizeEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAuthorizeEndpointAccessVersionEnum || (GetAuthorizeEndpointAccessVersionEnum = {}));
var GetAuthorizeEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeEndpointAccessQueryParams, _super);
    function GetAuthorizeEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Account" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessQueryParams.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcIds" }),
        __metadata("design:type", Array)
    ], GetAuthorizeEndpointAccessQueryParams.prototype, "vpcIds", void 0);
    return GetAuthorizeEndpointAccessQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeEndpointAccessQueryParams };
var GetAuthorizeEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeEndpointAccessHeaders, _super);
    function GetAuthorizeEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeEndpointAccessHeaders;
}(SpeakeasyBase));
export { GetAuthorizeEndpointAccessHeaders };
var GetAuthorizeEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeEndpointAccessRequest, _super);
    function GetAuthorizeEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeEndpointAccessQueryParams)
    ], GetAuthorizeEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeEndpointAccessHeaders)
    ], GetAuthorizeEndpointAccessRequest.prototype, "headers", void 0);
    return GetAuthorizeEndpointAccessRequest;
}(SpeakeasyBase));
export { GetAuthorizeEndpointAccessRequest };
var GetAuthorizeEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeEndpointAccessResponse, _super);
    function GetAuthorizeEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizeEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeEndpointAccessResponse.prototype, "statusCode", void 0);
    return GetAuthorizeEndpointAccessResponse;
}(SpeakeasyBase));
export { GetAuthorizeEndpointAccessResponse };
