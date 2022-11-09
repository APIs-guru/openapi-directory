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
var PostContainersNameOrIdUnpausePathParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdUnpausePathParams, _super);
    function PostContainersNameOrIdUnpausePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdUnpausePathParams.prototype, "nameOrId", void 0);
    return PostContainersNameOrIdUnpausePathParams;
}(SpeakeasyBase));
export { PostContainersNameOrIdUnpausePathParams };
var PostContainersNameOrIdUnpauseHeaders = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdUnpauseHeaders, _super);
    function PostContainersNameOrIdUnpauseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdUnpauseHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdUnpauseHeaders.prototype, "xAuthToken", void 0);
    return PostContainersNameOrIdUnpauseHeaders;
}(SpeakeasyBase));
export { PostContainersNameOrIdUnpauseHeaders };
var PostContainersNameOrIdUnpauseRequest = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdUnpauseRequest, _super);
    function PostContainersNameOrIdUnpauseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersNameOrIdUnpausePathParams)
    ], PostContainersNameOrIdUnpauseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersNameOrIdUnpauseHeaders)
    ], PostContainersNameOrIdUnpauseRequest.prototype, "headers", void 0);
    return PostContainersNameOrIdUnpauseRequest;
}(SpeakeasyBase));
export { PostContainersNameOrIdUnpauseRequest };
var PostContainersNameOrIdUnpauseResponse = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdUnpauseResponse, _super);
    function PostContainersNameOrIdUnpauseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostContainersNameOrIdUnpauseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdUnpauseResponse.prototype, "statusCode", void 0);
    return PostContainersNameOrIdUnpauseResponse;
}(SpeakeasyBase));
export { PostContainersNameOrIdUnpauseResponse };
