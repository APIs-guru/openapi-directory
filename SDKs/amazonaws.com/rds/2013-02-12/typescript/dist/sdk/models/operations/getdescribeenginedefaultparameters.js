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
export var GetDescribeEngineDefaultParametersActionEnum;
(function (GetDescribeEngineDefaultParametersActionEnum) {
    GetDescribeEngineDefaultParametersActionEnum["DescribeEngineDefaultParameters"] = "DescribeEngineDefaultParameters";
})(GetDescribeEngineDefaultParametersActionEnum || (GetDescribeEngineDefaultParametersActionEnum = {}));
export var GetDescribeEngineDefaultParametersVersionEnum;
(function (GetDescribeEngineDefaultParametersVersionEnum) {
    GetDescribeEngineDefaultParametersVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeEngineDefaultParametersVersionEnum || (GetDescribeEngineDefaultParametersVersionEnum = {}));
var GetDescribeEngineDefaultParametersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEngineDefaultParametersQueryParams, _super);
    function GetDescribeEngineDefaultParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersQueryParams.prototype, "dbParameterGroupFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeEngineDefaultParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersQueryParams.prototype, "version", void 0);
    return GetDescribeEngineDefaultParametersQueryParams;
}(SpeakeasyBase));
export { GetDescribeEngineDefaultParametersQueryParams };
var GetDescribeEngineDefaultParametersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEngineDefaultParametersHeaders, _super);
    function GetDescribeEngineDefaultParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEngineDefaultParametersHeaders;
}(SpeakeasyBase));
export { GetDescribeEngineDefaultParametersHeaders };
var GetDescribeEngineDefaultParametersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEngineDefaultParametersRequest, _super);
    function GetDescribeEngineDefaultParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEngineDefaultParametersQueryParams)
    ], GetDescribeEngineDefaultParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEngineDefaultParametersHeaders)
    ], GetDescribeEngineDefaultParametersRequest.prototype, "headers", void 0);
    return GetDescribeEngineDefaultParametersRequest;
}(SpeakeasyBase));
export { GetDescribeEngineDefaultParametersRequest };
var GetDescribeEngineDefaultParametersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEngineDefaultParametersResponse, _super);
    function GetDescribeEngineDefaultParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEngineDefaultParametersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeEngineDefaultParametersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeEngineDefaultParametersResponse.prototype, "statusCode", void 0);
    return GetDescribeEngineDefaultParametersResponse;
}(SpeakeasyBase));
export { GetDescribeEngineDefaultParametersResponse };
