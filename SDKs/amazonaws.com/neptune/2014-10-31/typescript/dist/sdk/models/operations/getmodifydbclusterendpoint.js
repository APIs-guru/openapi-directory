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
export var GetModifyDbClusterEndpointActionEnum;
(function (GetModifyDbClusterEndpointActionEnum) {
    GetModifyDbClusterEndpointActionEnum["ModifyDbClusterEndpoint"] = "ModifyDBClusterEndpoint";
})(GetModifyDbClusterEndpointActionEnum || (GetModifyDbClusterEndpointActionEnum = {}));
export var GetModifyDbClusterEndpointVersionEnum;
(function (GetModifyDbClusterEndpointVersionEnum) {
    GetModifyDbClusterEndpointVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbClusterEndpointVersionEnum || (GetModifyDbClusterEndpointVersionEnum = {}));
var GetModifyDbClusterEndpointQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterEndpointQueryParams, _super);
    function GetModifyDbClusterEndpointQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterEndpointIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "dbClusterEndpointIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndpointType" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "endpointType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludedMembers" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "excludedMembers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StaticMembers" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "staticMembers", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointQueryParams.prototype, "version", void 0);
    return GetModifyDbClusterEndpointQueryParams;
}(SpeakeasyBase));
export { GetModifyDbClusterEndpointQueryParams };
var GetModifyDbClusterEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterEndpointHeaders, _super);
    function GetModifyDbClusterEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbClusterEndpointHeaders;
}(SpeakeasyBase));
export { GetModifyDbClusterEndpointHeaders };
var GetModifyDbClusterEndpointRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterEndpointRequest, _super);
    function GetModifyDbClusterEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDbClusterEndpointQueryParams)
    ], GetModifyDbClusterEndpointRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyDbClusterEndpointHeaders)
    ], GetModifyDbClusterEndpointRequest.prototype, "headers", void 0);
    return GetModifyDbClusterEndpointRequest;
}(SpeakeasyBase));
export { GetModifyDbClusterEndpointRequest };
var GetModifyDbClusterEndpointResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterEndpointResponse, _super);
    function GetModifyDbClusterEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbClusterEndpointResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyDbClusterEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyDbClusterEndpointResponse.prototype, "statusCode", void 0);
    return GetModifyDbClusterEndpointResponse;
}(SpeakeasyBase));
export { GetModifyDbClusterEndpointResponse };
