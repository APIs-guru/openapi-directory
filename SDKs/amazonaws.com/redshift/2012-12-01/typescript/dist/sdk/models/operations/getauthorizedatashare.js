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
export var GetAuthorizeDataShareActionEnum;
(function (GetAuthorizeDataShareActionEnum) {
    GetAuthorizeDataShareActionEnum["AuthorizeDataShare"] = "AuthorizeDataShare";
})(GetAuthorizeDataShareActionEnum || (GetAuthorizeDataShareActionEnum = {}));
export var GetAuthorizeDataShareVersionEnum;
(function (GetAuthorizeDataShareVersionEnum) {
    GetAuthorizeDataShareVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAuthorizeDataShareVersionEnum || (GetAuthorizeDataShareVersionEnum = {}));
var GetAuthorizeDataShareQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeDataShareQueryParams, _super);
    function GetAuthorizeDataShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerIdentifier" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareQueryParams.prototype, "consumerIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareQueryParams.prototype, "dataShareArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareQueryParams.prototype, "version", void 0);
    return GetAuthorizeDataShareQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeDataShareQueryParams };
var GetAuthorizeDataShareHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeDataShareHeaders, _super);
    function GetAuthorizeDataShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeDataShareHeaders;
}(SpeakeasyBase));
export { GetAuthorizeDataShareHeaders };
var GetAuthorizeDataShareRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeDataShareRequest, _super);
    function GetAuthorizeDataShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeDataShareQueryParams)
    ], GetAuthorizeDataShareRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizeDataShareHeaders)
    ], GetAuthorizeDataShareRequest.prototype, "headers", void 0);
    return GetAuthorizeDataShareRequest;
}(SpeakeasyBase));
export { GetAuthorizeDataShareRequest };
var GetAuthorizeDataShareResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeDataShareResponse, _super);
    function GetAuthorizeDataShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeDataShareResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizeDataShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeDataShareResponse.prototype, "statusCode", void 0);
    return GetAuthorizeDataShareResponse;
}(SpeakeasyBase));
export { GetAuthorizeDataShareResponse };
