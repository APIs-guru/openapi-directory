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
export var PostModifyScheduledActionActionEnum;
(function (PostModifyScheduledActionActionEnum) {
    PostModifyScheduledActionActionEnum["ModifyScheduledAction"] = "ModifyScheduledAction";
})(PostModifyScheduledActionActionEnum || (PostModifyScheduledActionActionEnum = {}));
export var PostModifyScheduledActionVersionEnum;
(function (PostModifyScheduledActionVersionEnum) {
    PostModifyScheduledActionVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyScheduledActionVersionEnum || (PostModifyScheduledActionVersionEnum = {}));
var PostModifyScheduledActionQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyScheduledActionQueryParams, _super);
    function PostModifyScheduledActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionQueryParams.prototype, "version", void 0);
    return PostModifyScheduledActionQueryParams;
}(SpeakeasyBase));
export { PostModifyScheduledActionQueryParams };
var PostModifyScheduledActionHeaders = /** @class */ (function (_super) {
    __extends(PostModifyScheduledActionHeaders, _super);
    function PostModifyScheduledActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyScheduledActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyScheduledActionHeaders;
}(SpeakeasyBase));
export { PostModifyScheduledActionHeaders };
var PostModifyScheduledActionRequest = /** @class */ (function (_super) {
    __extends(PostModifyScheduledActionRequest, _super);
    function PostModifyScheduledActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyScheduledActionQueryParams)
    ], PostModifyScheduledActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyScheduledActionHeaders)
    ], PostModifyScheduledActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyScheduledActionRequest.prototype, "request", void 0);
    return PostModifyScheduledActionRequest;
}(SpeakeasyBase));
export { PostModifyScheduledActionRequest };
var PostModifyScheduledActionResponse = /** @class */ (function (_super) {
    __extends(PostModifyScheduledActionResponse, _super);
    function PostModifyScheduledActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyScheduledActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyScheduledActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyScheduledActionResponse.prototype, "statusCode", void 0);
    return PostModifyScheduledActionResponse;
}(SpeakeasyBase));
export { PostModifyScheduledActionResponse };
