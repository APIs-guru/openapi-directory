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
var PostVolumesNamePathParams = /** @class */ (function (_super) {
    __extends(PostVolumesNamePathParams, _super);
    function PostVolumesNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PostVolumesNamePathParams.prototype, "name", void 0);
    return PostVolumesNamePathParams;
}(SpeakeasyBase));
export { PostVolumesNamePathParams };
var PostVolumesNameHeaders = /** @class */ (function (_super) {
    __extends(PostVolumesNameHeaders, _super);
    function PostVolumesNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostVolumesNameHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostVolumesNameHeaders.prototype, "xAuthToken", void 0);
    return PostVolumesNameHeaders;
}(SpeakeasyBase));
export { PostVolumesNameHeaders };
var PostVolumesNameRequest = /** @class */ (function (_super) {
    __extends(PostVolumesNameRequest, _super);
    function PostVolumesNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesNamePathParams)
    ], PostVolumesNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesNameHeaders)
    ], PostVolumesNameRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostVolumesNameRequest.prototype, "request", void 0);
    return PostVolumesNameRequest;
}(SpeakeasyBase));
export { PostVolumesNameRequest };
var PostVolumesNameResponse = /** @class */ (function (_super) {
    __extends(PostVolumesNameResponse, _super);
    function PostVolumesNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVolumesNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVolumesNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostVolumesNameResponse.prototype, "volume", void 0);
    return PostVolumesNameResponse;
}(SpeakeasyBase));
export { PostVolumesNameResponse };
