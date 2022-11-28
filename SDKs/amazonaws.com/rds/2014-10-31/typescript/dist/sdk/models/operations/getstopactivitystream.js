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
export var GetStopActivityStreamActionEnum;
(function (GetStopActivityStreamActionEnum) {
    GetStopActivityStreamActionEnum["StopActivityStream"] = "StopActivityStream";
})(GetStopActivityStreamActionEnum || (GetStopActivityStreamActionEnum = {}));
export var GetStopActivityStreamVersionEnum;
(function (GetStopActivityStreamVersionEnum) {
    GetStopActivityStreamVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStopActivityStreamVersionEnum || (GetStopActivityStreamVersionEnum = {}));
var GetStopActivityStreamQueryParams = /** @class */ (function (_super) {
    __extends(GetStopActivityStreamQueryParams, _super);
    function GetStopActivityStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetStopActivityStreamQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamQueryParams.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamQueryParams.prototype, "version", void 0);
    return GetStopActivityStreamQueryParams;
}(SpeakeasyBase));
export { GetStopActivityStreamQueryParams };
var GetStopActivityStreamHeaders = /** @class */ (function (_super) {
    __extends(GetStopActivityStreamHeaders, _super);
    function GetStopActivityStreamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStopActivityStreamHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStopActivityStreamHeaders;
}(SpeakeasyBase));
export { GetStopActivityStreamHeaders };
var GetStopActivityStreamRequest = /** @class */ (function (_super) {
    __extends(GetStopActivityStreamRequest, _super);
    function GetStopActivityStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopActivityStreamQueryParams)
    ], GetStopActivityStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStopActivityStreamHeaders)
    ], GetStopActivityStreamRequest.prototype, "headers", void 0);
    return GetStopActivityStreamRequest;
}(SpeakeasyBase));
export { GetStopActivityStreamRequest };
var GetStopActivityStreamResponse = /** @class */ (function (_super) {
    __extends(GetStopActivityStreamResponse, _super);
    function GetStopActivityStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStopActivityStreamResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStopActivityStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStopActivityStreamResponse.prototype, "statusCode", void 0);
    return GetStopActivityStreamResponse;
}(SpeakeasyBase));
export { GetStopActivityStreamResponse };
