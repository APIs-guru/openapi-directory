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
var ReposCreateDeployKeyPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyPathParams, _super);
    function ReposCreateDeployKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyPathParams.prototype, "repo", void 0);
    return ReposCreateDeployKeyPathParams;
}(SpeakeasyBase));
export { ReposCreateDeployKeyPathParams };
var ReposCreateDeployKeyRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyRequestBody, _super);
    function ReposCreateDeployKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyRequestBody.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read_only" }),
        __metadata("design:type", Boolean)
    ], ReposCreateDeployKeyRequestBody.prototype, "readOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyRequestBody.prototype, "title", void 0);
    return ReposCreateDeployKeyRequestBody;
}(SpeakeasyBase));
export { ReposCreateDeployKeyRequestBody };
var ReposCreateDeployKeyRequest = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyRequest, _super);
    function ReposCreateDeployKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateDeployKeyPathParams)
    ], ReposCreateDeployKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateDeployKeyRequestBody)
    ], ReposCreateDeployKeyRequest.prototype, "request", void 0);
    return ReposCreateDeployKeyRequest;
}(SpeakeasyBase));
export { ReposCreateDeployKeyRequest };
var ReposCreateDeployKeyResponse = /** @class */ (function (_super) {
    __extends(ReposCreateDeployKeyResponse, _super);
    function ReposCreateDeployKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateDeployKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateDeployKeyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateDeployKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeployKey)
    ], ReposCreateDeployKeyResponse.prototype, "deployKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateDeployKeyResponse.prototype, "validationError", void 0);
    return ReposCreateDeployKeyResponse;
}(SpeakeasyBase));
export { ReposCreateDeployKeyResponse };
