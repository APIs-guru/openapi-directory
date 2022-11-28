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
var ReposAddCollaboratorPathParams = /** @class */ (function (_super) {
    __extends(ReposAddCollaboratorPathParams, _super);
    function ReposAddCollaboratorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposAddCollaboratorPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposAddCollaboratorPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ReposAddCollaboratorPathParams.prototype, "username", void 0);
    return ReposAddCollaboratorPathParams;
}(SpeakeasyBase));
export { ReposAddCollaboratorPathParams };
export var ReposAddCollaboratorRequestBodyPermissionEnum;
(function (ReposAddCollaboratorRequestBodyPermissionEnum) {
    ReposAddCollaboratorRequestBodyPermissionEnum["Pull"] = "pull";
    ReposAddCollaboratorRequestBodyPermissionEnum["Push"] = "push";
    ReposAddCollaboratorRequestBodyPermissionEnum["Admin"] = "admin";
    ReposAddCollaboratorRequestBodyPermissionEnum["Maintain"] = "maintain";
    ReposAddCollaboratorRequestBodyPermissionEnum["Triage"] = "triage";
})(ReposAddCollaboratorRequestBodyPermissionEnum || (ReposAddCollaboratorRequestBodyPermissionEnum = {}));
var ReposAddCollaboratorRequestBody = /** @class */ (function (_super) {
    __extends(ReposAddCollaboratorRequestBody, _super);
    function ReposAddCollaboratorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], ReposAddCollaboratorRequestBody.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], ReposAddCollaboratorRequestBody.prototype, "permissions", void 0);
    return ReposAddCollaboratorRequestBody;
}(SpeakeasyBase));
export { ReposAddCollaboratorRequestBody };
var ReposAddCollaboratorRequest = /** @class */ (function (_super) {
    __extends(ReposAddCollaboratorRequest, _super);
    function ReposAddCollaboratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposAddCollaboratorPathParams)
    ], ReposAddCollaboratorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposAddCollaboratorRequestBody)
    ], ReposAddCollaboratorRequest.prototype, "request", void 0);
    return ReposAddCollaboratorRequest;
}(SpeakeasyBase));
export { ReposAddCollaboratorRequest };
var ReposAddCollaboratorResponse = /** @class */ (function (_super) {
    __extends(ReposAddCollaboratorResponse, _super);
    function ReposAddCollaboratorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposAddCollaboratorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposAddCollaboratorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposAddCollaboratorResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RepositoryInvitation)
    ], ReposAddCollaboratorResponse.prototype, "repositoryInvitation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposAddCollaboratorResponse.prototype, "validationError", void 0);
    return ReposAddCollaboratorResponse;
}(SpeakeasyBase));
export { ReposAddCollaboratorResponse };
