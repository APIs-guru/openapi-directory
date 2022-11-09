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
import * as shared from "../shared";
export var PostLoginSampleSourceEnum;
(function (PostLoginSampleSourceEnum) {
    PostLoginSampleSourceEnum["IOs"] = "iOS";
    PostLoginSampleSourceEnum["Android"] = "android";
    PostLoginSampleSourceEnum["Web"] = "web";
})(PostLoginSampleSourceEnum || (PostLoginSampleSourceEnum = {}));
var PostLoginSample = /** @class */ (function (_super) {
    __extends(PostLoginSample, _super);
    function PostLoginSample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostLoginSample.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostLoginSample.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PostLoginSample.prototype, "source", void 0);
    return PostLoginSample;
}(SpeakeasyBase));
export { PostLoginSample };
var PostLoginRequest = /** @class */ (function (_super) {
    __extends(PostLoginRequest, _super);
    function PostLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoginSample)
    ], PostLoginRequest.prototype, "request", void 0);
    return PostLoginRequest;
}(SpeakeasyBase));
export { PostLoginRequest };
var PostLoginResponse = /** @class */ (function (_super) {
    __extends(PostLoginResponse, _super);
    function PostLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostLoginResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostLoginResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvalidToken)
    ], PostLoginResponse.prototype, "invalidToken", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LoginResponse)
    ], PostLoginResponse.prototype, "loginResponse", void 0);
    return PostLoginResponse;
}(SpeakeasyBase));
export { PostLoginResponse };
