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
var ReposCreateCommitStatusPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateCommitStatusPathParams, _super);
    function ReposCreateCommitStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sha" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusPathParams.prototype, "sha", void 0);
    return ReposCreateCommitStatusPathParams;
}(SpeakeasyBase));
export { ReposCreateCommitStatusPathParams };
export var ReposCreateCommitStatusRequestBodyStateEnum;
(function (ReposCreateCommitStatusRequestBodyStateEnum) {
    ReposCreateCommitStatusRequestBodyStateEnum["Error"] = "error";
    ReposCreateCommitStatusRequestBodyStateEnum["Failure"] = "failure";
    ReposCreateCommitStatusRequestBodyStateEnum["Pending"] = "pending";
    ReposCreateCommitStatusRequestBodyStateEnum["Success"] = "success";
})(ReposCreateCommitStatusRequestBodyStateEnum || (ReposCreateCommitStatusRequestBodyStateEnum = {}));
var ReposCreateCommitStatusRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateCommitStatusRequestBody, _super);
    function ReposCreateCommitStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusRequestBody.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusRequestBody.prototype, "targetUrl", void 0);
    return ReposCreateCommitStatusRequestBody;
}(SpeakeasyBase));
export { ReposCreateCommitStatusRequestBody };
var ReposCreateCommitStatusRequest = /** @class */ (function (_super) {
    __extends(ReposCreateCommitStatusRequest, _super);
    function ReposCreateCommitStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateCommitStatusPathParams)
    ], ReposCreateCommitStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateCommitStatusRequestBody)
    ], ReposCreateCommitStatusRequest.prototype, "request", void 0);
    return ReposCreateCommitStatusRequest;
}(SpeakeasyBase));
export { ReposCreateCommitStatusRequest };
var ReposCreateCommitStatusResponse = /** @class */ (function (_super) {
    __extends(ReposCreateCommitStatusResponse, _super);
    function ReposCreateCommitStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateCommitStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateCommitStatusResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateCommitStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Status)
    ], ReposCreateCommitStatusResponse.prototype, "status", void 0);
    return ReposCreateCommitStatusResponse;
}(SpeakeasyBase));
export { ReposCreateCommitStatusResponse };
