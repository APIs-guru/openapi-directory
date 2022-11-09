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
export var GetListMetricStreamsActionEnum;
(function (GetListMetricStreamsActionEnum) {
    GetListMetricStreamsActionEnum["ListMetricStreams"] = "ListMetricStreams";
})(GetListMetricStreamsActionEnum || (GetListMetricStreamsActionEnum = {}));
export var GetListMetricStreamsVersionEnum;
(function (GetListMetricStreamsVersionEnum) {
    GetListMetricStreamsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetListMetricStreamsVersionEnum || (GetListMetricStreamsVersionEnum = {}));
var GetListMetricStreamsQueryParams = /** @class */ (function (_super) {
    __extends(GetListMetricStreamsQueryParams, _super);
    function GetListMetricStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetListMetricStreamsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsQueryParams.prototype, "version", void 0);
    return GetListMetricStreamsQueryParams;
}(SpeakeasyBase));
export { GetListMetricStreamsQueryParams };
var GetListMetricStreamsHeaders = /** @class */ (function (_super) {
    __extends(GetListMetricStreamsHeaders, _super);
    function GetListMetricStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListMetricStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListMetricStreamsHeaders;
}(SpeakeasyBase));
export { GetListMetricStreamsHeaders };
var GetListMetricStreamsRequest = /** @class */ (function (_super) {
    __extends(GetListMetricStreamsRequest, _super);
    function GetListMetricStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListMetricStreamsQueryParams)
    ], GetListMetricStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListMetricStreamsHeaders)
    ], GetListMetricStreamsRequest.prototype, "headers", void 0);
    return GetListMetricStreamsRequest;
}(SpeakeasyBase));
export { GetListMetricStreamsRequest };
var GetListMetricStreamsResponse = /** @class */ (function (_super) {
    __extends(GetListMetricStreamsResponse, _super);
    function GetListMetricStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListMetricStreamsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListMetricStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListMetricStreamsResponse.prototype, "statusCode", void 0);
    return GetListMetricStreamsResponse;
}(SpeakeasyBase));
export { GetListMetricStreamsResponse };
