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
export var GetStartMetricStreamsActionEnum;
(function (GetStartMetricStreamsActionEnum) {
    GetStartMetricStreamsActionEnum["StartMetricStreams"] = "StartMetricStreams";
})(GetStartMetricStreamsActionEnum || (GetStartMetricStreamsActionEnum = {}));
export var GetStartMetricStreamsVersionEnum;
(function (GetStartMetricStreamsVersionEnum) {
    GetStartMetricStreamsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetStartMetricStreamsVersionEnum || (GetStartMetricStreamsVersionEnum = {}));
var GetStartMetricStreamsQueryParams = /** @class */ (function (_super) {
    __extends(GetStartMetricStreamsQueryParams, _super);
    function GetStartMetricStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Names" }),
        __metadata("design:type", Array)
    ], GetStartMetricStreamsQueryParams.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsQueryParams.prototype, "version", void 0);
    return GetStartMetricStreamsQueryParams;
}(SpeakeasyBase));
export { GetStartMetricStreamsQueryParams };
var GetStartMetricStreamsHeaders = /** @class */ (function (_super) {
    __extends(GetStartMetricStreamsHeaders, _super);
    function GetStartMetricStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStartMetricStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStartMetricStreamsHeaders;
}(SpeakeasyBase));
export { GetStartMetricStreamsHeaders };
var GetStartMetricStreamsRequest = /** @class */ (function (_super) {
    __extends(GetStartMetricStreamsRequest, _super);
    function GetStartMetricStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStartMetricStreamsQueryParams)
    ], GetStartMetricStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStartMetricStreamsHeaders)
    ], GetStartMetricStreamsRequest.prototype, "headers", void 0);
    return GetStartMetricStreamsRequest;
}(SpeakeasyBase));
export { GetStartMetricStreamsRequest };
var GetStartMetricStreamsResponse = /** @class */ (function (_super) {
    __extends(GetStartMetricStreamsResponse, _super);
    function GetStartMetricStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStartMetricStreamsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStartMetricStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStartMetricStreamsResponse.prototype, "statusCode", void 0);
    return GetStartMetricStreamsResponse;
}(SpeakeasyBase));
export { GetStartMetricStreamsResponse };
