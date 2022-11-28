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
export var PostRemoveSourceIdentifierFromSubscriptionActionEnum;
(function (PostRemoveSourceIdentifierFromSubscriptionActionEnum) {
    PostRemoveSourceIdentifierFromSubscriptionActionEnum["RemoveSourceIdentifierFromSubscription"] = "RemoveSourceIdentifierFromSubscription";
})(PostRemoveSourceIdentifierFromSubscriptionActionEnum || (PostRemoveSourceIdentifierFromSubscriptionActionEnum = {}));
export var PostRemoveSourceIdentifierFromSubscriptionVersionEnum;
(function (PostRemoveSourceIdentifierFromSubscriptionVersionEnum) {
    PostRemoveSourceIdentifierFromSubscriptionVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostRemoveSourceIdentifierFromSubscriptionVersionEnum || (PostRemoveSourceIdentifierFromSubscriptionVersionEnum = {}));
var PostRemoveSourceIdentifierFromSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(PostRemoveSourceIdentifierFromSubscriptionQueryParams, _super);
    function PostRemoveSourceIdentifierFromSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionQueryParams.prototype, "version", void 0);
    return PostRemoveSourceIdentifierFromSubscriptionQueryParams;
}(SpeakeasyBase));
export { PostRemoveSourceIdentifierFromSubscriptionQueryParams };
var PostRemoveSourceIdentifierFromSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(PostRemoveSourceIdentifierFromSubscriptionHeaders, _super);
    function PostRemoveSourceIdentifierFromSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRemoveSourceIdentifierFromSubscriptionHeaders;
}(SpeakeasyBase));
export { PostRemoveSourceIdentifierFromSubscriptionHeaders };
var PostRemoveSourceIdentifierFromSubscriptionRequest = /** @class */ (function (_super) {
    __extends(PostRemoveSourceIdentifierFromSubscriptionRequest, _super);
    function PostRemoveSourceIdentifierFromSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRemoveSourceIdentifierFromSubscriptionQueryParams)
    ], PostRemoveSourceIdentifierFromSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRemoveSourceIdentifierFromSubscriptionHeaders)
    ], PostRemoveSourceIdentifierFromSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRemoveSourceIdentifierFromSubscriptionRequest.prototype, "request", void 0);
    return PostRemoveSourceIdentifierFromSubscriptionRequest;
}(SpeakeasyBase));
export { PostRemoveSourceIdentifierFromSubscriptionRequest };
var PostRemoveSourceIdentifierFromSubscriptionResponse = /** @class */ (function (_super) {
    __extends(PostRemoveSourceIdentifierFromSubscriptionResponse, _super);
    function PostRemoveSourceIdentifierFromSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRemoveSourceIdentifierFromSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRemoveSourceIdentifierFromSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRemoveSourceIdentifierFromSubscriptionResponse.prototype, "statusCode", void 0);
    return PostRemoveSourceIdentifierFromSubscriptionResponse;
}(SpeakeasyBase));
export { PostRemoveSourceIdentifierFromSubscriptionResponse };
