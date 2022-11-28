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
var PostProjectUsernameProjectSshKeyPathParams = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyPathParams, _super);
    function PostProjectUsernameProjectSshKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyPathParams.prototype, "username", void 0);
    return PostProjectUsernameProjectSshKeyPathParams;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyPathParams };
export var PostProjectUsernameProjectSshKeyContentTypeEnum;
(function (PostProjectUsernameProjectSshKeyContentTypeEnum) {
    PostProjectUsernameProjectSshKeyContentTypeEnum["ApplicationJson"] = "application/json";
})(PostProjectUsernameProjectSshKeyContentTypeEnum || (PostProjectUsernameProjectSshKeyContentTypeEnum = {}));
var PostProjectUsernameProjectSshKeyHeaders = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyHeaders, _super);
    function PostProjectUsernameProjectSshKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyHeaders.prototype, "contentType", void 0);
    return PostProjectUsernameProjectSshKeyHeaders;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyHeaders };
var PostProjectUsernameProjectSshKeyRequestBody = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyRequestBody, _super);
    function PostProjectUsernameProjectSshKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyRequestBody.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyRequestBody.prototype, "privateKey", void 0);
    return PostProjectUsernameProjectSshKeyRequestBody;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyRequestBody };
var PostProjectUsernameProjectSshKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyDefaultApplicationJson, _super);
    function PostProjectUsernameProjectSshKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyDefaultApplicationJson.prototype, "message", void 0);
    return PostProjectUsernameProjectSshKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyDefaultApplicationJson };
var PostProjectUsernameProjectSshKeyRequest = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyRequest, _super);
    function PostProjectUsernameProjectSshKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProjectUsernameProjectSshKeyPathParams)
    ], PostProjectUsernameProjectSshKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProjectUsernameProjectSshKeyHeaders)
    ], PostProjectUsernameProjectSshKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostProjectUsernameProjectSshKeyRequestBody)
    ], PostProjectUsernameProjectSshKeyRequest.prototype, "request", void 0);
    return PostProjectUsernameProjectSshKeyRequest;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyRequest };
var PostProjectUsernameProjectSshKeyResponse = /** @class */ (function (_super) {
    __extends(PostProjectUsernameProjectSshKeyResponse, _super);
    function PostProjectUsernameProjectSshKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProjectUsernameProjectSshKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProjectUsernameProjectSshKeyDefaultApplicationJson)
    ], PostProjectUsernameProjectSshKeyResponse.prototype, "postProjectUsernameProjectSshKeyDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProjectUsernameProjectSshKeyResponse.prototype, "statusCode", void 0);
    return PostProjectUsernameProjectSshKeyResponse;
}(SpeakeasyBase));
export { PostProjectUsernameProjectSshKeyResponse };
