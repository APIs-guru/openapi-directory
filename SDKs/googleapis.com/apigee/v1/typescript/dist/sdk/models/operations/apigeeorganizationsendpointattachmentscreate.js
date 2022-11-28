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
var ApigeeOrganizationsEndpointAttachmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsCreatePathParams, _super);
    function ApigeeOrganizationsEndpointAttachmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEndpointAttachmentsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsCreatePathParams };
var ApigeeOrganizationsEndpointAttachmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsCreateQueryParams, _super);
    function ApigeeOrganizationsEndpointAttachmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endpointAttachmentId" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "endpointAttachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEndpointAttachmentsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsCreateQueryParams };
var ApigeeOrganizationsEndpointAttachmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsCreateSecurity, _super);
    function ApigeeOrganizationsEndpointAttachmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEndpointAttachmentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEndpointAttachmentsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEndpointAttachmentsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsCreateSecurity };
var ApigeeOrganizationsEndpointAttachmentsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsCreateRequest, _super);
    function ApigeeOrganizationsEndpointAttachmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsCreatePathParams)
    ], ApigeeOrganizationsEndpointAttachmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsCreateQueryParams)
    ], ApigeeOrganizationsEndpointAttachmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1EndpointAttachmentInput)
    ], ApigeeOrganizationsEndpointAttachmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsCreateSecurity)
    ], ApigeeOrganizationsEndpointAttachmentsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEndpointAttachmentsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsCreateRequest };
var ApigeeOrganizationsEndpointAttachmentsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsCreateResponse, _super);
    function ApigeeOrganizationsEndpointAttachmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], ApigeeOrganizationsEndpointAttachmentsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEndpointAttachmentsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEndpointAttachmentsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsCreateResponse };
