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
export var PostCreateDbParameterGroupActionEnum;
(function (PostCreateDbParameterGroupActionEnum) {
    PostCreateDbParameterGroupActionEnum["CreateDbParameterGroup"] = "CreateDBParameterGroup";
})(PostCreateDbParameterGroupActionEnum || (PostCreateDbParameterGroupActionEnum = {}));
export var PostCreateDbParameterGroupVersionEnum;
(function (PostCreateDbParameterGroupVersionEnum) {
    PostCreateDbParameterGroupVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(PostCreateDbParameterGroupVersionEnum || (PostCreateDbParameterGroupVersionEnum = {}));
var PostCreateDbParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateDbParameterGroupQueryParams, _super);
    function PostCreateDbParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupQueryParams.prototype, "version", void 0);
    return PostCreateDbParameterGroupQueryParams;
}(SpeakeasyBase));
export { PostCreateDbParameterGroupQueryParams };
var PostCreateDbParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateDbParameterGroupHeaders, _super);
    function PostCreateDbParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateDbParameterGroupHeaders;
}(SpeakeasyBase));
export { PostCreateDbParameterGroupHeaders };
var PostCreateDbParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateDbParameterGroupRequest, _super);
    function PostCreateDbParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateDbParameterGroupQueryParams)
    ], PostCreateDbParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateDbParameterGroupHeaders)
    ], PostCreateDbParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbParameterGroupRequest.prototype, "request", void 0);
    return PostCreateDbParameterGroupRequest;
}(SpeakeasyBase));
export { PostCreateDbParameterGroupRequest };
var PostCreateDbParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateDbParameterGroupResponse, _super);
    function PostCreateDbParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateDbParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateDbParameterGroupResponse.prototype, "statusCode", void 0);
    return PostCreateDbParameterGroupResponse;
}(SpeakeasyBase));
export { PostCreateDbParameterGroupResponse };
