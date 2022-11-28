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
var ReposGetCollaboratorPermissionLevelPathParams = /** @class */ (function (_super) {
    __extends(ReposGetCollaboratorPermissionLevelPathParams, _super);
    function ReposGetCollaboratorPermissionLevelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposGetCollaboratorPermissionLevelPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposGetCollaboratorPermissionLevelPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ReposGetCollaboratorPermissionLevelPathParams.prototype, "username", void 0);
    return ReposGetCollaboratorPermissionLevelPathParams;
}(SpeakeasyBase));
export { ReposGetCollaboratorPermissionLevelPathParams };
var ReposGetCollaboratorPermissionLevelRequest = /** @class */ (function (_super) {
    __extends(ReposGetCollaboratorPermissionLevelRequest, _super);
    function ReposGetCollaboratorPermissionLevelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetCollaboratorPermissionLevelPathParams)
    ], ReposGetCollaboratorPermissionLevelRequest.prototype, "pathParams", void 0);
    return ReposGetCollaboratorPermissionLevelRequest;
}(SpeakeasyBase));
export { ReposGetCollaboratorPermissionLevelRequest };
var ReposGetCollaboratorPermissionLevelResponse = /** @class */ (function (_super) {
    __extends(ReposGetCollaboratorPermissionLevelResponse, _super);
    function ReposGetCollaboratorPermissionLevelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposGetCollaboratorPermissionLevelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposGetCollaboratorPermissionLevelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposGetCollaboratorPermissionLevelResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RepositoryCollaboratorPermission)
    ], ReposGetCollaboratorPermissionLevelResponse.prototype, "repositoryCollaboratorPermission", void 0);
    return ReposGetCollaboratorPermissionLevelResponse;
}(SpeakeasyBase));
export { ReposGetCollaboratorPermissionLevelResponse };
