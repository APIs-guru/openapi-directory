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
export var GetDeauthorizeDataShareActionEnum;
(function (GetDeauthorizeDataShareActionEnum) {
    GetDeauthorizeDataShareActionEnum["DeauthorizeDataShare"] = "DeauthorizeDataShare";
})(GetDeauthorizeDataShareActionEnum || (GetDeauthorizeDataShareActionEnum = {}));
export var GetDeauthorizeDataShareVersionEnum;
(function (GetDeauthorizeDataShareVersionEnum) {
    GetDeauthorizeDataShareVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeauthorizeDataShareVersionEnum || (GetDeauthorizeDataShareVersionEnum = {}));
var GetDeauthorizeDataShareQueryParams = /** @class */ (function (_super) {
    __extends(GetDeauthorizeDataShareQueryParams, _super);
    function GetDeauthorizeDataShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerIdentifier" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareQueryParams.prototype, "consumerIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareQueryParams.prototype, "dataShareArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareQueryParams.prototype, "version", void 0);
    return GetDeauthorizeDataShareQueryParams;
}(SpeakeasyBase));
export { GetDeauthorizeDataShareQueryParams };
var GetDeauthorizeDataShareHeaders = /** @class */ (function (_super) {
    __extends(GetDeauthorizeDataShareHeaders, _super);
    function GetDeauthorizeDataShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeauthorizeDataShareHeaders;
}(SpeakeasyBase));
export { GetDeauthorizeDataShareHeaders };
var GetDeauthorizeDataShareRequest = /** @class */ (function (_super) {
    __extends(GetDeauthorizeDataShareRequest, _super);
    function GetDeauthorizeDataShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeauthorizeDataShareQueryParams)
    ], GetDeauthorizeDataShareRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeauthorizeDataShareHeaders)
    ], GetDeauthorizeDataShareRequest.prototype, "headers", void 0);
    return GetDeauthorizeDataShareRequest;
}(SpeakeasyBase));
export { GetDeauthorizeDataShareRequest };
var GetDeauthorizeDataShareResponse = /** @class */ (function (_super) {
    __extends(GetDeauthorizeDataShareResponse, _super);
    function GetDeauthorizeDataShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeauthorizeDataShareResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeauthorizeDataShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeauthorizeDataShareResponse.prototype, "statusCode", void 0);
    return GetDeauthorizeDataShareResponse;
}(SpeakeasyBase));
export { GetDeauthorizeDataShareResponse };
