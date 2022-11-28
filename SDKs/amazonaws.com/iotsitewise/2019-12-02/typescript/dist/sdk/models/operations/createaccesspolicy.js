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
var CreateAccessPolicyHeaders = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyHeaders, _super);
    function CreateAccessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAccessPolicyHeaders;
}(SpeakeasyBase));
export { CreateAccessPolicyHeaders };
// CreateAccessPolicyRequestBodyAccessPolicyIdentity
/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
**/
var CreateAccessPolicyRequestBodyAccessPolicyIdentity = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyRequestBodyAccessPolicyIdentity, _super);
    function CreateAccessPolicyRequestBodyAccessPolicyIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", shared.GroupIdentity)
    ], CreateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamRole" }),
        __metadata("design:type", shared.IamRoleIdentity)
    ], CreateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "iamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamUser" }),
        __metadata("design:type", shared.IamUserIdentity)
    ], CreateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "iamUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", shared.UserIdentity)
    ], CreateAccessPolicyRequestBodyAccessPolicyIdentity.prototype, "user", void 0);
    return CreateAccessPolicyRequestBodyAccessPolicyIdentity;
}(SpeakeasyBase));
export { CreateAccessPolicyRequestBodyAccessPolicyIdentity };
export var CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum;
(function (CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum) {
    CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum["Administrator"] = "ADMINISTRATOR";
    CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum["Viewer"] = "VIEWER";
})(CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum || (CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum = {}));
// CreateAccessPolicyRequestBodyAccessPolicyResource
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
var CreateAccessPolicyRequestBodyAccessPolicyResource = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyRequestBodyAccessPolicyResource, _super);
    function CreateAccessPolicyRequestBodyAccessPolicyResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portal" }),
        __metadata("design:type", shared.PortalResource)
    ], CreateAccessPolicyRequestBodyAccessPolicyResource.prototype, "portal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", shared.ProjectResource)
    ], CreateAccessPolicyRequestBodyAccessPolicyResource.prototype, "project", void 0);
    return CreateAccessPolicyRequestBodyAccessPolicyResource;
}(SpeakeasyBase));
export { CreateAccessPolicyRequestBodyAccessPolicyResource };
var CreateAccessPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyRequestBody, _super);
    function CreateAccessPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyIdentity" }),
        __metadata("design:type", CreateAccessPolicyRequestBodyAccessPolicyIdentity)
    ], CreateAccessPolicyRequestBody.prototype, "accessPolicyIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyPermission" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyRequestBody.prototype, "accessPolicyPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyResource" }),
        __metadata("design:type", CreateAccessPolicyRequestBodyAccessPolicyResource)
    ], CreateAccessPolicyRequestBody.prototype, "accessPolicyResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateAccessPolicyRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAccessPolicyRequestBody.prototype, "tags", void 0);
    return CreateAccessPolicyRequestBody;
}(SpeakeasyBase));
export { CreateAccessPolicyRequestBody };
var CreateAccessPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyRequest, _super);
    function CreateAccessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccessPolicyHeaders)
    ], CreateAccessPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAccessPolicyRequestBody)
    ], CreateAccessPolicyRequest.prototype, "request", void 0);
    return CreateAccessPolicyRequest;
}(SpeakeasyBase));
export { CreateAccessPolicyRequest };
var CreateAccessPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateAccessPolicyResponse, _super);
    function CreateAccessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateAccessPolicyResponse)
    ], CreateAccessPolicyResponse.prototype, "createAccessPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPolicyResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPolicyResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAccessPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPolicyResponse.prototype, "throttlingException", void 0);
    return CreateAccessPolicyResponse;
}(SpeakeasyBase));
export { CreateAccessPolicyResponse };
