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
export var PostCreateClusterSecurityGroupActionEnum;
(function (PostCreateClusterSecurityGroupActionEnum) {
    PostCreateClusterSecurityGroupActionEnum["CreateClusterSecurityGroup"] = "CreateClusterSecurityGroup";
})(PostCreateClusterSecurityGroupActionEnum || (PostCreateClusterSecurityGroupActionEnum = {}));
export var PostCreateClusterSecurityGroupVersionEnum;
(function (PostCreateClusterSecurityGroupVersionEnum) {
    PostCreateClusterSecurityGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCreateClusterSecurityGroupVersionEnum || (PostCreateClusterSecurityGroupVersionEnum = {}));
var PostCreateClusterSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateClusterSecurityGroupQueryParams, _super);
    function PostCreateClusterSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupQueryParams.prototype, "version", void 0);
    return PostCreateClusterSecurityGroupQueryParams;
}(SpeakeasyBase));
export { PostCreateClusterSecurityGroupQueryParams };
var PostCreateClusterSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateClusterSecurityGroupHeaders, _super);
    function PostCreateClusterSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateClusterSecurityGroupHeaders;
}(SpeakeasyBase));
export { PostCreateClusterSecurityGroupHeaders };
var PostCreateClusterSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateClusterSecurityGroupRequest, _super);
    function PostCreateClusterSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateClusterSecurityGroupQueryParams)
    ], PostCreateClusterSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateClusterSecurityGroupHeaders)
    ], PostCreateClusterSecurityGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateClusterSecurityGroupRequest.prototype, "request", void 0);
    return PostCreateClusterSecurityGroupRequest;
}(SpeakeasyBase));
export { PostCreateClusterSecurityGroupRequest };
var PostCreateClusterSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateClusterSecurityGroupResponse, _super);
    function PostCreateClusterSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateClusterSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateClusterSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateClusterSecurityGroupResponse.prototype, "statusCode", void 0);
    return PostCreateClusterSecurityGroupResponse;
}(SpeakeasyBase));
export { PostCreateClusterSecurityGroupResponse };
