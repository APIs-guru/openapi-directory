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
var ApigeeOrganizationsEnvironmentsSubscribePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSubscribePathParams, _super);
    function ApigeeOrganizationsEnvironmentsSubscribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsSubscribePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSubscribePathParams };
var ApigeeOrganizationsEnvironmentsSubscribeQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSubscribeQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSubscribeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSubscribeQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSubscribeQueryParams };
var ApigeeOrganizationsEnvironmentsSubscribeSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSubscribeSecurity, _super);
    function ApigeeOrganizationsEnvironmentsSubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSubscribeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSubscribeSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSubscribeSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSubscribeSecurity };
var ApigeeOrganizationsEnvironmentsSubscribeRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSubscribeRequest, _super);
    function ApigeeOrganizationsEnvironmentsSubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSubscribePathParams)
    ], ApigeeOrganizationsEnvironmentsSubscribeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSubscribeQueryParams)
    ], ApigeeOrganizationsEnvironmentsSubscribeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSubscribeSecurity)
    ], ApigeeOrganizationsEnvironmentsSubscribeRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSubscribeRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSubscribeRequest };
var ApigeeOrganizationsEnvironmentsSubscribeResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSubscribeResponse, _super);
    function ApigeeOrganizationsEnvironmentsSubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Subscription)
    ], ApigeeOrganizationsEnvironmentsSubscribeResponse.prototype, "googleCloudApigeeV1Subscription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSubscribeResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSubscribeResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSubscribeResponse };
