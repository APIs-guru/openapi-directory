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
export var GetStopMetricStreamsActionEnum;
(function (GetStopMetricStreamsActionEnum) {
    GetStopMetricStreamsActionEnum["StopMetricStreams"] = "StopMetricStreams";
})(GetStopMetricStreamsActionEnum || (GetStopMetricStreamsActionEnum = {}));
export var GetStopMetricStreamsVersionEnum;
(function (GetStopMetricStreamsVersionEnum) {
    GetStopMetricStreamsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetStopMetricStreamsVersionEnum || (GetStopMetricStreamsVersionEnum = {}));
var GetStopMetricStreamsQueryParams = /** @class */ (function (_super) {
    __extends(GetStopMetricStreamsQueryParams, _super);
    function GetStopMetricStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Names" }),
        __metadata("design:type", Array)
    ], GetStopMetricStreamsQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsQueryParams.prototype, "version", void 0);
    return GetStopMetricStreamsQueryParams;
}(SpeakeasyBase));
export { GetStopMetricStreamsQueryParams };
var GetStopMetricStreamsHeaders = /** @class */ (function (_super) {
    __extends(GetStopMetricStreamsHeaders, _super);
    function GetStopMetricStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStopMetricStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStopMetricStreamsHeaders;
}(SpeakeasyBase));
export { GetStopMetricStreamsHeaders };
var GetStopMetricStreamsRequest = /** @class */ (function (_super) {
    __extends(GetStopMetricStreamsRequest, _super);
    function GetStopMetricStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopMetricStreamsQueryParams)
    ], GetStopMetricStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopMetricStreamsHeaders)
    ], GetStopMetricStreamsRequest.prototype, "headers", void 0);
    return GetStopMetricStreamsRequest;
}(SpeakeasyBase));
export { GetStopMetricStreamsRequest };
var GetStopMetricStreamsResponse = /** @class */ (function (_super) {
    __extends(GetStopMetricStreamsResponse, _super);
    function GetStopMetricStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStopMetricStreamsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStopMetricStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStopMetricStreamsResponse.prototype, "statusCode", void 0);
    return GetStopMetricStreamsResponse;
}(SpeakeasyBase));
export { GetStopMetricStreamsResponse };
