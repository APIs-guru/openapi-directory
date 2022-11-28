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
export var PostCreateScheduledActionActionEnum;
(function (PostCreateScheduledActionActionEnum) {
    PostCreateScheduledActionActionEnum["CreateScheduledAction"] = "CreateScheduledAction";
})(PostCreateScheduledActionActionEnum || (PostCreateScheduledActionActionEnum = {}));
export var PostCreateScheduledActionVersionEnum;
(function (PostCreateScheduledActionVersionEnum) {
    PostCreateScheduledActionVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCreateScheduledActionVersionEnum || (PostCreateScheduledActionVersionEnum = {}));
var PostCreateScheduledActionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateScheduledActionQueryParams, _super);
    function PostCreateScheduledActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionQueryParams.prototype, "version", void 0);
    return PostCreateScheduledActionQueryParams;
}(SpeakeasyBase));
export { PostCreateScheduledActionQueryParams };
var PostCreateScheduledActionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateScheduledActionHeaders, _super);
    function PostCreateScheduledActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateScheduledActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateScheduledActionHeaders;
}(SpeakeasyBase));
export { PostCreateScheduledActionHeaders };
var PostCreateScheduledActionRequest = /** @class */ (function (_super) {
    __extends(PostCreateScheduledActionRequest, _super);
    function PostCreateScheduledActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateScheduledActionQueryParams)
    ], PostCreateScheduledActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateScheduledActionHeaders)
    ], PostCreateScheduledActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateScheduledActionRequest.prototype, "request", void 0);
    return PostCreateScheduledActionRequest;
}(SpeakeasyBase));
export { PostCreateScheduledActionRequest };
var PostCreateScheduledActionResponse = /** @class */ (function (_super) {
    __extends(PostCreateScheduledActionResponse, _super);
    function PostCreateScheduledActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateScheduledActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateScheduledActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateScheduledActionResponse.prototype, "statusCode", void 0);
    return PostCreateScheduledActionResponse;
}(SpeakeasyBase));
export { PostCreateScheduledActionResponse };
