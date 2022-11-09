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
import * as shared from "../shared";
var GetMapGlyphsPathParams = /** @class */ (function (_super) {
    __extends(GetMapGlyphsPathParams, _super);
    function GetMapGlyphsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FontStack" }),
        __metadata("design:type", String)
    ], GetMapGlyphsPathParams.prototype, "fontStack", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=FontUnicodeRange" }),
        __metadata("design:type", String)
    ], GetMapGlyphsPathParams.prototype, "fontUnicodeRange", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapName" }),
        __metadata("design:type", String)
    ], GetMapGlyphsPathParams.prototype, "mapName", void 0);
    return GetMapGlyphsPathParams;
}(SpeakeasyBase));
export { GetMapGlyphsPathParams };
var GetMapGlyphsHeaders = /** @class */ (function (_super) {
    __extends(GetMapGlyphsHeaders, _super);
    function GetMapGlyphsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMapGlyphsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMapGlyphsHeaders;
}(SpeakeasyBase));
export { GetMapGlyphsHeaders };
var GetMapGlyphsRequest = /** @class */ (function (_super) {
    __extends(GetMapGlyphsRequest, _super);
    function GetMapGlyphsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapGlyphsPathParams)
    ], GetMapGlyphsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapGlyphsHeaders)
    ], GetMapGlyphsRequest.prototype, "headers", void 0);
    return GetMapGlyphsRequest;
}(SpeakeasyBase));
export { GetMapGlyphsRequest };
var GetMapGlyphsResponse = /** @class */ (function (_super) {
    __extends(GetMapGlyphsResponse, _super);
    function GetMapGlyphsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapGlyphsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapGlyphsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetMapGlyphsResponse)
    ], GetMapGlyphsResponse.prototype, "getMapGlyphsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapGlyphsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapGlyphsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapGlyphsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapGlyphsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapGlyphsResponse.prototype, "validationException", void 0);
    return GetMapGlyphsResponse;
}(SpeakeasyBase));
export { GetMapGlyphsResponse };
