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
export var GetUntagResourceActionEnum;
(function (GetUntagResourceActionEnum) {
    GetUntagResourceActionEnum["UntagResource"] = "UntagResource";
})(GetUntagResourceActionEnum || (GetUntagResourceActionEnum = {}));
export var GetUntagResourceVersionEnum;
(function (GetUntagResourceVersionEnum) {
    GetUntagResourceVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetUntagResourceVersionEnum || (GetUntagResourceVersionEnum = {}));
var GetUntagResourceQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagResourceQueryParams, _super);
    function GetUntagResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagResourceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceARN" }),
        __metadata("design:type", String)
    ], GetUntagResourceQueryParams.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagResourceQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagResourceQueryParams.prototype, "version", void 0);
    return GetUntagResourceQueryParams;
}(SpeakeasyBase));
export { GetUntagResourceQueryParams };
var GetUntagResourceHeaders = /** @class */ (function (_super) {
    __extends(GetUntagResourceHeaders, _super);
    function GetUntagResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagResourceHeaders;
}(SpeakeasyBase));
export { GetUntagResourceHeaders };
var GetUntagResourceRequest = /** @class */ (function (_super) {
    __extends(GetUntagResourceRequest, _super);
    function GetUntagResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagResourceQueryParams)
    ], GetUntagResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagResourceHeaders)
    ], GetUntagResourceRequest.prototype, "headers", void 0);
    return GetUntagResourceRequest;
}(SpeakeasyBase));
export { GetUntagResourceRequest };
var GetUntagResourceResponse = /** @class */ (function (_super) {
    __extends(GetUntagResourceResponse, _super);
    function GetUntagResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntagResourceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUntagResourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUntagResourceResponse.prototype, "statusCode", void 0);
    return GetUntagResourceResponse;
}(SpeakeasyBase));
export { GetUntagResourceResponse };
