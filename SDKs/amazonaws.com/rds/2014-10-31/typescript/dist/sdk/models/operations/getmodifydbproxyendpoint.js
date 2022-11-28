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
export var GetModifyDbProxyEndpointActionEnum;
(function (GetModifyDbProxyEndpointActionEnum) {
    GetModifyDbProxyEndpointActionEnum["ModifyDbProxyEndpoint"] = "ModifyDBProxyEndpoint";
})(GetModifyDbProxyEndpointActionEnum || (GetModifyDbProxyEndpointActionEnum = {}));
export var GetModifyDbProxyEndpointVersionEnum;
(function (GetModifyDbProxyEndpointVersionEnum) {
    GetModifyDbProxyEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbProxyEndpointVersionEnum || (GetModifyDbProxyEndpointVersionEnum = {}));
var GetModifyDbProxyEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyEndpointQueryParams, _super);
    function GetModifyDbProxyEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBProxyEndpointName" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointQueryParams.prototype, "dbProxyEndpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBProxyEndpointName" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointQueryParams.prototype, "newDbProxyEndpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetModifyDbProxyEndpointQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetModifyDbProxyEndpointQueryParams;
}(SpeakeasyBase));
export { GetModifyDbProxyEndpointQueryParams };
var GetModifyDbProxyEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyEndpointHeaders, _super);
    function GetModifyDbProxyEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbProxyEndpointHeaders;
}(SpeakeasyBase));
export { GetModifyDbProxyEndpointHeaders };
var GetModifyDbProxyEndpointRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyEndpointRequest, _super);
    function GetModifyDbProxyEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbProxyEndpointQueryParams)
    ], GetModifyDbProxyEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbProxyEndpointHeaders)
    ], GetModifyDbProxyEndpointRequest.prototype, "headers", void 0);
    return GetModifyDbProxyEndpointRequest;
}(SpeakeasyBase));
export { GetModifyDbProxyEndpointRequest };
var GetModifyDbProxyEndpointResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbProxyEndpointResponse, _super);
    function GetModifyDbProxyEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbProxyEndpointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyDbProxyEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyDbProxyEndpointResponse.prototype, "statusCode", void 0);
    return GetModifyDbProxyEndpointResponse;
}(SpeakeasyBase));
export { GetModifyDbProxyEndpointResponse };
