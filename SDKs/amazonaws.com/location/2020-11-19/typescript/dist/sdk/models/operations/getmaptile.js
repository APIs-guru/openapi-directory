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
var GetMapTilePathParams = /** @class */ (function (_super) {
    __extends(GetMapTilePathParams, _super);
    function GetMapTilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=MapName" }),
        __metadata("design:type", String)
    ], GetMapTilePathParams.prototype, "mapName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=X" }),
        __metadata("design:type", String)
    ], GetMapTilePathParams.prototype, "x", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Y" }),
        __metadata("design:type", String)
    ], GetMapTilePathParams.prototype, "y", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Z" }),
        __metadata("design:type", String)
    ], GetMapTilePathParams.prototype, "z", void 0);
    return GetMapTilePathParams;
}(SpeakeasyBase));
export { GetMapTilePathParams };
var GetMapTileHeaders = /** @class */ (function (_super) {
    __extends(GetMapTileHeaders, _super);
    function GetMapTileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMapTileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMapTileHeaders;
}(SpeakeasyBase));
export { GetMapTileHeaders };
var GetMapTileRequest = /** @class */ (function (_super) {
    __extends(GetMapTileRequest, _super);
    function GetMapTileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapTilePathParams)
    ], GetMapTileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMapTileHeaders)
    ], GetMapTileRequest.prototype, "headers", void 0);
    return GetMapTileRequest;
}(SpeakeasyBase));
export { GetMapTileRequest };
var GetMapTileResponse = /** @class */ (function (_super) {
    __extends(GetMapTileResponse, _super);
    function GetMapTileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapTileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMapTileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetMapTileResponse)
    ], GetMapTileResponse.prototype, "getMapTileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapTileResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapTileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMapTileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapTileResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMapTileResponse.prototype, "validationException", void 0);
    return GetMapTileResponse;
}(SpeakeasyBase));
export { GetMapTileResponse };
