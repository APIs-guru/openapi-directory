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
export var PostDeleteAlarmsActionEnum;
(function (PostDeleteAlarmsActionEnum) {
    PostDeleteAlarmsActionEnum["DeleteAlarms"] = "DeleteAlarms";
})(PostDeleteAlarmsActionEnum || (PostDeleteAlarmsActionEnum = {}));
export var PostDeleteAlarmsVersionEnum;
(function (PostDeleteAlarmsVersionEnum) {
    PostDeleteAlarmsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostDeleteAlarmsVersionEnum || (PostDeleteAlarmsVersionEnum = {}));
var PostDeleteAlarmsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteAlarmsQueryParams, _super);
    function PostDeleteAlarmsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsQueryParams.prototype, "version", void 0);
    return PostDeleteAlarmsQueryParams;
}(SpeakeasyBase));
export { PostDeleteAlarmsQueryParams };
var PostDeleteAlarmsHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteAlarmsHeaders, _super);
    function PostDeleteAlarmsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteAlarmsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteAlarmsHeaders;
}(SpeakeasyBase));
export { PostDeleteAlarmsHeaders };
var PostDeleteAlarmsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteAlarmsRequest, _super);
    function PostDeleteAlarmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAlarmsQueryParams)
    ], PostDeleteAlarmsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAlarmsHeaders)
    ], PostDeleteAlarmsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAlarmsRequest.prototype, "request", void 0);
    return PostDeleteAlarmsRequest;
}(SpeakeasyBase));
export { PostDeleteAlarmsRequest };
var PostDeleteAlarmsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteAlarmsResponse, _super);
    function PostDeleteAlarmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAlarmsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteAlarmsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteAlarmsResponse.prototype, "statusCode", void 0);
    return PostDeleteAlarmsResponse;
}(SpeakeasyBase));
export { PostDeleteAlarmsResponse };
