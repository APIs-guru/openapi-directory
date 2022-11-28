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
import * as shared from "../shared";
var PostLocksPathPathParams = /** @class */ (function (_super) {
    __extends(PostLocksPathPathParams, _super);
    function PostLocksPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], PostLocksPathPathParams.prototype, "path", void 0);
    return PostLocksPathPathParams;
}(SpeakeasyBase));
export { PostLocksPathPathParams };
var PostLocksPathRequestBody = /** @class */ (function (_super) {
    __extends(PostLocksPathRequestBody, _super);
    function PostLocksPathRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_access_by_any_user" }),
        __metadata("design:type", Boolean)
    ], PostLocksPathRequestBody.prototype, "allowAccessByAnyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=exclusive" }),
        __metadata("design:type", Boolean)
    ], PostLocksPathRequestBody.prototype, "exclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recursive" }),
        __metadata("design:type", String)
    ], PostLocksPathRequestBody.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=timeout" }),
        __metadata("design:type", Number)
    ], PostLocksPathRequestBody.prototype, "timeout", void 0);
    return PostLocksPathRequestBody;
}(SpeakeasyBase));
export { PostLocksPathRequestBody };
var PostLocksPathRequest = /** @class */ (function (_super) {
    __extends(PostLocksPathRequest, _super);
    function PostLocksPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLocksPathPathParams)
    ], PostLocksPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostLocksPathRequestBody)
    ], PostLocksPathRequest.prototype, "request", void 0);
    return PostLocksPathRequest;
}(SpeakeasyBase));
export { PostLocksPathRequest };
var PostLocksPathResponse = /** @class */ (function (_super) {
    __extends(PostLocksPathResponse, _super);
    function PostLocksPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLocksPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LockEntity)
    ], PostLocksPathResponse.prototype, "lockEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLocksPathResponse.prototype, "statusCode", void 0);
    return PostLocksPathResponse;
}(SpeakeasyBase));
export { PostLocksPathResponse };
