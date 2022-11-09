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
export var PostGetCallerIdentityActionEnum;
(function (PostGetCallerIdentityActionEnum) {
    PostGetCallerIdentityActionEnum["GetCallerIdentity"] = "GetCallerIdentity";
})(PostGetCallerIdentityActionEnum || (PostGetCallerIdentityActionEnum = {}));
export var PostGetCallerIdentityVersionEnum;
(function (PostGetCallerIdentityVersionEnum) {
    PostGetCallerIdentityVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(PostGetCallerIdentityVersionEnum || (PostGetCallerIdentityVersionEnum = {}));
var PostGetCallerIdentityQueryParams = /** @class */ (function (_super) {
    __extends(PostGetCallerIdentityQueryParams, _super);
    function PostGetCallerIdentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityQueryParams.prototype, "version", void 0);
    return PostGetCallerIdentityQueryParams;
}(SpeakeasyBase));
export { PostGetCallerIdentityQueryParams };
var PostGetCallerIdentityHeaders = /** @class */ (function (_super) {
    __extends(PostGetCallerIdentityHeaders, _super);
    function PostGetCallerIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetCallerIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetCallerIdentityHeaders;
}(SpeakeasyBase));
export { PostGetCallerIdentityHeaders };
var PostGetCallerIdentityRequest = /** @class */ (function (_super) {
    __extends(PostGetCallerIdentityRequest, _super);
    function PostGetCallerIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetCallerIdentityQueryParams)
    ], PostGetCallerIdentityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostGetCallerIdentityHeaders)
    ], PostGetCallerIdentityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetCallerIdentityRequest.prototype, "request", void 0);
    return PostGetCallerIdentityRequest;
}(SpeakeasyBase));
export { PostGetCallerIdentityRequest };
var PostGetCallerIdentityResponse = /** @class */ (function (_super) {
    __extends(PostGetCallerIdentityResponse, _super);
    function PostGetCallerIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetCallerIdentityResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostGetCallerIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostGetCallerIdentityResponse.prototype, "statusCode", void 0);
    return PostGetCallerIdentityResponse;
}(SpeakeasyBase));
export { PostGetCallerIdentityResponse };
