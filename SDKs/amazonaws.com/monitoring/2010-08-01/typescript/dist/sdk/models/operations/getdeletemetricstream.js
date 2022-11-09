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
export var GetDeleteMetricStreamActionEnum;
(function (GetDeleteMetricStreamActionEnum) {
    GetDeleteMetricStreamActionEnum["DeleteMetricStream"] = "DeleteMetricStream";
})(GetDeleteMetricStreamActionEnum || (GetDeleteMetricStreamActionEnum = {}));
export var GetDeleteMetricStreamVersionEnum;
(function (GetDeleteMetricStreamVersionEnum) {
    GetDeleteMetricStreamVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDeleteMetricStreamVersionEnum || (GetDeleteMetricStreamVersionEnum = {}));
var GetDeleteMetricStreamQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteMetricStreamQueryParams, _super);
    function GetDeleteMetricStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Name" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamQueryParams.prototype, "version", void 0);
    return GetDeleteMetricStreamQueryParams;
}(SpeakeasyBase));
export { GetDeleteMetricStreamQueryParams };
var GetDeleteMetricStreamHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteMetricStreamHeaders, _super);
    function GetDeleteMetricStreamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteMetricStreamHeaders;
}(SpeakeasyBase));
export { GetDeleteMetricStreamHeaders };
var GetDeleteMetricStreamRequest = /** @class */ (function (_super) {
    __extends(GetDeleteMetricStreamRequest, _super);
    function GetDeleteMetricStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteMetricStreamQueryParams)
    ], GetDeleteMetricStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteMetricStreamHeaders)
    ], GetDeleteMetricStreamRequest.prototype, "headers", void 0);
    return GetDeleteMetricStreamRequest;
}(SpeakeasyBase));
export { GetDeleteMetricStreamRequest };
var GetDeleteMetricStreamResponse = /** @class */ (function (_super) {
    __extends(GetDeleteMetricStreamResponse, _super);
    function GetDeleteMetricStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteMetricStreamResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteMetricStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteMetricStreamResponse.prototype, "statusCode", void 0);
    return GetDeleteMetricStreamResponse;
}(SpeakeasyBase));
export { GetDeleteMetricStreamResponse };
