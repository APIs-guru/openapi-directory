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
var PostBuildQueryParams = /** @class */ (function (_super) {
    __extends(PostBuildQueryParams, _super);
    function PostBuildQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nocache" }),
        __metadata("design:type", Boolean)
    ], PostBuildQueryParams.prototype, "nocache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pull" }),
        __metadata("design:type", Boolean)
    ], PostBuildQueryParams.prototype, "pull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", Boolean)
    ], PostBuildQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t" }),
        __metadata("design:type", String)
    ], PostBuildQueryParams.prototype, "t", void 0);
    return PostBuildQueryParams;
}(SpeakeasyBase));
export { PostBuildQueryParams };
var PostBuildHeaders = /** @class */ (function (_super) {
    __extends(PostBuildHeaders, _super);
    function PostBuildHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostBuildHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostBuildHeaders.prototype, "xAuthToken", void 0);
    return PostBuildHeaders;
}(SpeakeasyBase));
export { PostBuildHeaders };
var PostBuildRequest = /** @class */ (function (_super) {
    __extends(PostBuildRequest, _super);
    function PostBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBuildQueryParams)
    ], PostBuildRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBuildHeaders)
    ], PostBuildRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/tar" }),
        __metadata("design:type", Uint8Array)
    ], PostBuildRequest.prototype, "request", void 0);
    return PostBuildRequest;
}(SpeakeasyBase));
export { PostBuildRequest };
var PostBuildResponse = /** @class */ (function (_super) {
    __extends(PostBuildResponse, _super);
    function PostBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBuildResponse.prototype, "statusCode", void 0);
    return PostBuildResponse;
}(SpeakeasyBase));
export { PostBuildResponse };
