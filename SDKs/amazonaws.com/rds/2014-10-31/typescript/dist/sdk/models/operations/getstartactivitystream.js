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
export var GetStartActivityStreamActionEnum;
(function (GetStartActivityStreamActionEnum) {
    GetStartActivityStreamActionEnum["StartActivityStream"] = "StartActivityStream";
})(GetStartActivityStreamActionEnum || (GetStartActivityStreamActionEnum = {}));
export var GetStartActivityStreamModeEnum;
(function (GetStartActivityStreamModeEnum) {
    GetStartActivityStreamModeEnum["Sync"] = "sync";
    GetStartActivityStreamModeEnum["Async"] = "async";
})(GetStartActivityStreamModeEnum || (GetStartActivityStreamModeEnum = {}));
export var GetStartActivityStreamVersionEnum;
(function (GetStartActivityStreamVersionEnum) {
    GetStartActivityStreamVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStartActivityStreamVersionEnum || (GetStartActivityStreamVersionEnum = {}));
var GetStartActivityStreamQueryParams = /** @class */ (function (_super) {
    __extends(GetStartActivityStreamQueryParams, _super);
    function GetStartActivityStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetStartActivityStreamQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineNativeAuditFieldsIncluded" }),
        __metadata("design:type", Boolean)
    ], GetStartActivityStreamQueryParams.prototype, "engineNativeAuditFieldsIncluded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Mode" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamQueryParams.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamQueryParams.prototype, "version", void 0);
    return GetStartActivityStreamQueryParams;
}(SpeakeasyBase));
export { GetStartActivityStreamQueryParams };
var GetStartActivityStreamHeaders = /** @class */ (function (_super) {
    __extends(GetStartActivityStreamHeaders, _super);
    function GetStartActivityStreamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStartActivityStreamHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStartActivityStreamHeaders;
}(SpeakeasyBase));
export { GetStartActivityStreamHeaders };
var GetStartActivityStreamRequest = /** @class */ (function (_super) {
    __extends(GetStartActivityStreamRequest, _super);
    function GetStartActivityStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStartActivityStreamQueryParams)
    ], GetStartActivityStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStartActivityStreamHeaders)
    ], GetStartActivityStreamRequest.prototype, "headers", void 0);
    return GetStartActivityStreamRequest;
}(SpeakeasyBase));
export { GetStartActivityStreamRequest };
var GetStartActivityStreamResponse = /** @class */ (function (_super) {
    __extends(GetStartActivityStreamResponse, _super);
    function GetStartActivityStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStartActivityStreamResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStartActivityStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStartActivityStreamResponse.prototype, "statusCode", void 0);
    return GetStartActivityStreamResponse;
}(SpeakeasyBase));
export { GetStartActivityStreamResponse };
