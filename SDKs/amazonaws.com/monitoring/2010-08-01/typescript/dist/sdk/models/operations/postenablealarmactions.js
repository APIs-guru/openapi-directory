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
export var PostEnableAlarmActionsActionEnum;
(function (PostEnableAlarmActionsActionEnum) {
    PostEnableAlarmActionsActionEnum["EnableAlarmActions"] = "EnableAlarmActions";
})(PostEnableAlarmActionsActionEnum || (PostEnableAlarmActionsActionEnum = {}));
export var PostEnableAlarmActionsVersionEnum;
(function (PostEnableAlarmActionsVersionEnum) {
    PostEnableAlarmActionsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostEnableAlarmActionsVersionEnum || (PostEnableAlarmActionsVersionEnum = {}));
var PostEnableAlarmActionsQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsQueryParams, _super);
    function PostEnableAlarmActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsQueryParams.prototype, "version", void 0);
    return PostEnableAlarmActionsQueryParams;
}(SpeakeasyBase));
export { PostEnableAlarmActionsQueryParams };
var PostEnableAlarmActionsHeaders = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsHeaders, _super);
    function PostEnableAlarmActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableAlarmActionsHeaders;
}(SpeakeasyBase));
export { PostEnableAlarmActionsHeaders };
var PostEnableAlarmActionsRequest = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsRequest, _super);
    function PostEnableAlarmActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableAlarmActionsQueryParams)
    ], PostEnableAlarmActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEnableAlarmActionsHeaders)
    ], PostEnableAlarmActionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableAlarmActionsRequest.prototype, "request", void 0);
    return PostEnableAlarmActionsRequest;
}(SpeakeasyBase));
export { PostEnableAlarmActionsRequest };
var PostEnableAlarmActionsResponse = /** @class */ (function (_super) {
    __extends(PostEnableAlarmActionsResponse, _super);
    function PostEnableAlarmActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEnableAlarmActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEnableAlarmActionsResponse.prototype, "statusCode", void 0);
    return PostEnableAlarmActionsResponse;
}(SpeakeasyBase));
export { PostEnableAlarmActionsResponse };
