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
export var PostResetClusterParameterGroupActionEnum;
(function (PostResetClusterParameterGroupActionEnum) {
    PostResetClusterParameterGroupActionEnum["ResetClusterParameterGroup"] = "ResetClusterParameterGroup";
})(PostResetClusterParameterGroupActionEnum || (PostResetClusterParameterGroupActionEnum = {}));
export var PostResetClusterParameterGroupVersionEnum;
(function (PostResetClusterParameterGroupVersionEnum) {
    PostResetClusterParameterGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostResetClusterParameterGroupVersionEnum || (PostResetClusterParameterGroupVersionEnum = {}));
var PostResetClusterParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostResetClusterParameterGroupQueryParams, _super);
    function PostResetClusterParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupQueryParams.prototype, "version", void 0);
    return PostResetClusterParameterGroupQueryParams;
}(SpeakeasyBase));
export { PostResetClusterParameterGroupQueryParams };
var PostResetClusterParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostResetClusterParameterGroupHeaders, _super);
    function PostResetClusterParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostResetClusterParameterGroupHeaders;
}(SpeakeasyBase));
export { PostResetClusterParameterGroupHeaders };
var PostResetClusterParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostResetClusterParameterGroupRequest, _super);
    function PostResetClusterParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetClusterParameterGroupQueryParams)
    ], PostResetClusterParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostResetClusterParameterGroupHeaders)
    ], PostResetClusterParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostResetClusterParameterGroupRequest.prototype, "request", void 0);
    return PostResetClusterParameterGroupRequest;
}(SpeakeasyBase));
export { PostResetClusterParameterGroupRequest };
var PostResetClusterParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostResetClusterParameterGroupResponse, _super);
    function PostResetClusterParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostResetClusterParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostResetClusterParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostResetClusterParameterGroupResponse.prototype, "statusCode", void 0);
    return PostResetClusterParameterGroupResponse;
}(SpeakeasyBase));
export { PostResetClusterParameterGroupResponse };
