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
var ApigeeOrganizationsEnvironmentsUnsubscribePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsUnsubscribePathParams, _super);
    function ApigeeOrganizationsEnvironmentsUnsubscribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsUnsubscribePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsUnsubscribePathParams };
var ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams };
var ApigeeOrganizationsEnvironmentsUnsubscribeSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsUnsubscribeSecurity, _super);
    function ApigeeOrganizationsEnvironmentsUnsubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsUnsubscribeSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsUnsubscribeSecurity };
var ApigeeOrganizationsEnvironmentsUnsubscribeRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsUnsubscribeRequest, _super);
    function ApigeeOrganizationsEnvironmentsUnsubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsUnsubscribePathParams)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsUnsubscribeQueryParams)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1Subscription)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsUnsubscribeSecurity)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsUnsubscribeRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsUnsubscribeRequest };
var ApigeeOrganizationsEnvironmentsUnsubscribeResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsUnsubscribeResponse, _super);
    function ApigeeOrganizationsEnvironmentsUnsubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsUnsubscribeResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsUnsubscribeResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsUnsubscribeResponse };
