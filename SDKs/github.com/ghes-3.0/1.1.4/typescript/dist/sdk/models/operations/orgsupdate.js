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
var OrgsUpdatePathParams = /** @class */ (function (_super) {
    __extends(OrgsUpdatePathParams, _super);
    function OrgsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsUpdatePathParams.prototype, "org", void 0);
    return OrgsUpdatePathParams;
}(SpeakeasyBase));
export { OrgsUpdatePathParams };
export var OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;
(function (OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum) {
    OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum["Read"] = "read";
    OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum["Write"] = "write";
    OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum["Admin"] = "admin";
    OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum["None"] = "none";
})(OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum || (OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum = {}));
export var OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;
(function (OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum) {
    OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum["All"] = "all";
    OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum["Private"] = "private";
    OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum["None"] = "none";
})(OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum || (OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum = {}));
var OrgsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(OrgsUpdateRequestBody, _super);
    function OrgsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_email" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "billingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_repository_permission" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "defaultRepositoryPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_organization_projects" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "hasOrganizationProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_repository_projects" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "hasRepositoryProjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_allowed_repository_creation_type" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "membersAllowedRepositoryCreationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_internal_repositories" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "membersCanCreateInternalRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_pages" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "membersCanCreatePages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_private_repositories" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "membersCanCreatePrivateRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_public_repositories" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "membersCanCreatePublicRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_can_create_repositories" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateRequestBody.prototype, "membersCanCreateRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twitter_username" }),
        __metadata("design:type", String)
    ], OrgsUpdateRequestBody.prototype, "twitterUsername", void 0);
    return OrgsUpdateRequestBody;
}(SpeakeasyBase));
export { OrgsUpdateRequestBody };
var OrgsUpdate415ApplicationJson = /** @class */ (function (_super) {
    __extends(OrgsUpdate415ApplicationJson, _super);
    function OrgsUpdate415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], OrgsUpdate415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OrgsUpdate415ApplicationJson.prototype, "message", void 0);
    return OrgsUpdate415ApplicationJson;
}(SpeakeasyBase));
export { OrgsUpdate415ApplicationJson };
var OrgsUpdateRequest = /** @class */ (function (_super) {
    __extends(OrgsUpdateRequest, _super);
    function OrgsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsUpdatePathParams)
    ], OrgsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OrgsUpdateRequestBody)
    ], OrgsUpdateRequest.prototype, "request", void 0);
    return OrgsUpdateRequest;
}(SpeakeasyBase));
export { OrgsUpdateRequest };
var OrgsUpdateResponse = /** @class */ (function (_super) {
    __extends(OrgsUpdateResponse, _super);
    function OrgsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrganizationFull)
    ], OrgsUpdateResponse.prototype, "organizationFull", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsUpdate415ApplicationJson)
    ], OrgsUpdateResponse.prototype, "orgsUpdate415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], OrgsUpdateResponse.prototype, "orgsUpdate422ApplicationJsonOneOf", void 0);
    return OrgsUpdateResponse;
}(SpeakeasyBase));
export { OrgsUpdateResponse };
