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
export var GetDeleteDbProxyEndpointActionEnum;
(function (GetDeleteDbProxyEndpointActionEnum) {
    GetDeleteDbProxyEndpointActionEnum["DeleteDbProxyEndpoint"] = "DeleteDBProxyEndpoint";
})(GetDeleteDbProxyEndpointActionEnum || (GetDeleteDbProxyEndpointActionEnum = {}));
export var GetDeleteDbProxyEndpointVersionEnum;
(function (GetDeleteDbProxyEndpointVersionEnum) {
    GetDeleteDbProxyEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteDbProxyEndpointVersionEnum || (GetDeleteDbProxyEndpointVersionEnum = {}));
var GetDeleteDbProxyEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbProxyEndpointQueryParams, _super);
    function GetDeleteDbProxyEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBProxyEndpointName" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointQueryParams.prototype, "dbProxyEndpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointQueryParams.prototype, "version", void 0);
    return GetDeleteDbProxyEndpointQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbProxyEndpointQueryParams };
var GetDeleteDbProxyEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbProxyEndpointHeaders, _super);
    function GetDeleteDbProxyEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbProxyEndpointHeaders;
}(SpeakeasyBase));
export { GetDeleteDbProxyEndpointHeaders };
var GetDeleteDbProxyEndpointRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbProxyEndpointRequest, _super);
    function GetDeleteDbProxyEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteDbProxyEndpointQueryParams)
    ], GetDeleteDbProxyEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteDbProxyEndpointHeaders)
    ], GetDeleteDbProxyEndpointRequest.prototype, "headers", void 0);
    return GetDeleteDbProxyEndpointRequest;
}(SpeakeasyBase));
export { GetDeleteDbProxyEndpointRequest };
var GetDeleteDbProxyEndpointResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbProxyEndpointResponse, _super);
    function GetDeleteDbProxyEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbProxyEndpointResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteDbProxyEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbProxyEndpointResponse.prototype, "statusCode", void 0);
    return GetDeleteDbProxyEndpointResponse;
}(SpeakeasyBase));
export { GetDeleteDbProxyEndpointResponse };
