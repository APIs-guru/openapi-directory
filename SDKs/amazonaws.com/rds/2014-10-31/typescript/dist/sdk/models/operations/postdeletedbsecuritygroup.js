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
export var PostDeleteDbSecurityGroupActionEnum;
(function (PostDeleteDbSecurityGroupActionEnum) {
    PostDeleteDbSecurityGroupActionEnum["DeleteDbSecurityGroup"] = "DeleteDBSecurityGroup";
})(PostDeleteDbSecurityGroupActionEnum || (PostDeleteDbSecurityGroupActionEnum = {}));
export var PostDeleteDbSecurityGroupVersionEnum;
(function (PostDeleteDbSecurityGroupVersionEnum) {
    PostDeleteDbSecurityGroupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteDbSecurityGroupVersionEnum || (PostDeleteDbSecurityGroupVersionEnum = {}));
var PostDeleteDbSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbSecurityGroupQueryParams, _super);
    function PostDeleteDbSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupQueryParams.prototype, "version", void 0);
    return PostDeleteDbSecurityGroupQueryParams;
}(SpeakeasyBase));
export { PostDeleteDbSecurityGroupQueryParams };
var PostDeleteDbSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbSecurityGroupHeaders, _super);
    function PostDeleteDbSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbSecurityGroupHeaders;
}(SpeakeasyBase));
export { PostDeleteDbSecurityGroupHeaders };
var PostDeleteDbSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbSecurityGroupRequest, _super);
    function PostDeleteDbSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbSecurityGroupQueryParams)
    ], PostDeleteDbSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteDbSecurityGroupHeaders)
    ], PostDeleteDbSecurityGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbSecurityGroupRequest.prototype, "request", void 0);
    return PostDeleteDbSecurityGroupRequest;
}(SpeakeasyBase));
export { PostDeleteDbSecurityGroupRequest };
var PostDeleteDbSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbSecurityGroupResponse, _super);
    function PostDeleteDbSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteDbSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteDbSecurityGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteDbSecurityGroupResponse;
}(SpeakeasyBase));
export { PostDeleteDbSecurityGroupResponse };
