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
var PostContainersNameOrIdStopPathParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdStopPathParams, _super);
    function PostContainersNameOrIdStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdStopPathParams.prototype, "nameOrId", void 0);
    return PostContainersNameOrIdStopPathParams;
}(SpeakeasyBase));
export { PostContainersNameOrIdStopPathParams };
var PostContainersNameOrIdStopQueryParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdStopQueryParams, _super);
    function PostContainersNameOrIdStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t" }),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdStopQueryParams.prototype, "t", void 0);
    return PostContainersNameOrIdStopQueryParams;
}(SpeakeasyBase));
export { PostContainersNameOrIdStopQueryParams };
var PostContainersNameOrIdStopHeaders = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdStopHeaders, _super);
    function PostContainersNameOrIdStopHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdStopHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdStopHeaders.prototype, "xAuthToken", void 0);
    return PostContainersNameOrIdStopHeaders;
}(SpeakeasyBase));
export { PostContainersNameOrIdStopHeaders };
var PostContainersNameOrIdStopRequest = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdStopRequest, _super);
    function PostContainersNameOrIdStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContainersNameOrIdStopPathParams)
    ], PostContainersNameOrIdStopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContainersNameOrIdStopQueryParams)
    ], PostContainersNameOrIdStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContainersNameOrIdStopHeaders)
    ], PostContainersNameOrIdStopRequest.prototype, "headers", void 0);
    return PostContainersNameOrIdStopRequest;
}(SpeakeasyBase));
export { PostContainersNameOrIdStopRequest };
var PostContainersNameOrIdStopResponse = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdStopResponse, _super);
    function PostContainersNameOrIdStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostContainersNameOrIdStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdStopResponse.prototype, "statusCode", void 0);
    return PostContainersNameOrIdStopResponse;
}(SpeakeasyBase));
export { PostContainersNameOrIdStopResponse };
