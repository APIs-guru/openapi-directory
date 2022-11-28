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
export var GetCreateEndpointAccessActionEnum;
(function (GetCreateEndpointAccessActionEnum) {
    GetCreateEndpointAccessActionEnum["CreateEndpointAccess"] = "CreateEndpointAccess";
})(GetCreateEndpointAccessActionEnum || (GetCreateEndpointAccessActionEnum = {}));
export var GetCreateEndpointAccessVersionEnum;
(function (GetCreateEndpointAccessVersionEnum) {
    GetCreateEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetCreateEndpointAccessVersionEnum || (GetCreateEndpointAccessVersionEnum = {}));
var GetCreateEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateEndpointAccessQueryParams, _super);
    function GetCreateEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndpointName" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceOwner" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "resourceOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetGroupName" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "subnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetCreateEndpointAccessQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetCreateEndpointAccessQueryParams;
}(SpeakeasyBase));
export { GetCreateEndpointAccessQueryParams };
var GetCreateEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(GetCreateEndpointAccessHeaders, _super);
    function GetCreateEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateEndpointAccessHeaders;
}(SpeakeasyBase));
export { GetCreateEndpointAccessHeaders };
var GetCreateEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(GetCreateEndpointAccessRequest, _super);
    function GetCreateEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateEndpointAccessQueryParams)
    ], GetCreateEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateEndpointAccessHeaders)
    ], GetCreateEndpointAccessRequest.prototype, "headers", void 0);
    return GetCreateEndpointAccessRequest;
}(SpeakeasyBase));
export { GetCreateEndpointAccessRequest };
var GetCreateEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(GetCreateEndpointAccessResponse, _super);
    function GetCreateEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateEndpointAccessResponse.prototype, "statusCode", void 0);
    return GetCreateEndpointAccessResponse;
}(SpeakeasyBase));
export { GetCreateEndpointAccessResponse };
