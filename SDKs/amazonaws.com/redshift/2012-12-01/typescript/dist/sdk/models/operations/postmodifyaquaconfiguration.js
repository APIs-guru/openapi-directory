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
export var PostModifyAquaConfigurationActionEnum;
(function (PostModifyAquaConfigurationActionEnum) {
    PostModifyAquaConfigurationActionEnum["ModifyAquaConfiguration"] = "ModifyAquaConfiguration";
})(PostModifyAquaConfigurationActionEnum || (PostModifyAquaConfigurationActionEnum = {}));
export var PostModifyAquaConfigurationVersionEnum;
(function (PostModifyAquaConfigurationVersionEnum) {
    PostModifyAquaConfigurationVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyAquaConfigurationVersionEnum || (PostModifyAquaConfigurationVersionEnum = {}));
var PostModifyAquaConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyAquaConfigurationQueryParams, _super);
    function PostModifyAquaConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationQueryParams.prototype, "version", void 0);
    return PostModifyAquaConfigurationQueryParams;
}(SpeakeasyBase));
export { PostModifyAquaConfigurationQueryParams };
var PostModifyAquaConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PostModifyAquaConfigurationHeaders, _super);
    function PostModifyAquaConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyAquaConfigurationHeaders;
}(SpeakeasyBase));
export { PostModifyAquaConfigurationHeaders };
var PostModifyAquaConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostModifyAquaConfigurationRequest, _super);
    function PostModifyAquaConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyAquaConfigurationQueryParams)
    ], PostModifyAquaConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyAquaConfigurationHeaders)
    ], PostModifyAquaConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyAquaConfigurationRequest.prototype, "request", void 0);
    return PostModifyAquaConfigurationRequest;
}(SpeakeasyBase));
export { PostModifyAquaConfigurationRequest };
var PostModifyAquaConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostModifyAquaConfigurationResponse, _super);
    function PostModifyAquaConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyAquaConfigurationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyAquaConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyAquaConfigurationResponse.prototype, "statusCode", void 0);
    return PostModifyAquaConfigurationResponse;
}(SpeakeasyBase));
export { PostModifyAquaConfigurationResponse };
