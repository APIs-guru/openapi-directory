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
var ApigeeOrganizationsInstancesAttachmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsCreatePathParams, _super);
    function ApigeeOrganizationsInstancesAttachmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsInstancesAttachmentsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsCreatePathParams };
var ApigeeOrganizationsInstancesAttachmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsCreateQueryParams, _super);
    function ApigeeOrganizationsInstancesAttachmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsInstancesAttachmentsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsCreateQueryParams };
var ApigeeOrganizationsInstancesAttachmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsCreateSecurity, _super);
    function ApigeeOrganizationsInstancesAttachmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsInstancesAttachmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsInstancesAttachmentsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsInstancesAttachmentsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsCreateSecurity };
var ApigeeOrganizationsInstancesAttachmentsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsCreateRequest, _super);
    function ApigeeOrganizationsInstancesAttachmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsCreatePathParams)
    ], ApigeeOrganizationsInstancesAttachmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsCreateQueryParams)
    ], ApigeeOrganizationsInstancesAttachmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1InstanceAttachmentInput)
    ], ApigeeOrganizationsInstancesAttachmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsCreateSecurity)
    ], ApigeeOrganizationsInstancesAttachmentsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsInstancesAttachmentsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsCreateRequest };
var ApigeeOrganizationsInstancesAttachmentsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsCreateResponse, _super);
    function ApigeeOrganizationsInstancesAttachmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ApigeeOrganizationsInstancesAttachmentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesAttachmentsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsInstancesAttachmentsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsCreateResponse };
