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
var ApigeeOrganizationsApiproductsRateplansListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsRateplansListPathParams, _super);
    function ApigeeOrganizationsApiproductsRateplansListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsApiproductsRateplansListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsRateplansListPathParams };
export var ApigeeOrganizationsApiproductsRateplansListStateEnum;
(function (ApigeeOrganizationsApiproductsRateplansListStateEnum) {
    ApigeeOrganizationsApiproductsRateplansListStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ApigeeOrganizationsApiproductsRateplansListStateEnum["Draft"] = "DRAFT";
    ApigeeOrganizationsApiproductsRateplansListStateEnum["Published"] = "PUBLISHED";
})(ApigeeOrganizationsApiproductsRateplansListStateEnum || (ApigeeOrganizationsApiproductsRateplansListStateEnum = {}));
var ApigeeOrganizationsApiproductsRateplansListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsRateplansListQueryParams, _super);
    function ApigeeOrganizationsApiproductsRateplansListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startKey" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "startKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsApiproductsRateplansListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsRateplansListQueryParams };
var ApigeeOrganizationsApiproductsRateplansListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsRateplansListSecurity, _super);
    function ApigeeOrganizationsApiproductsRateplansListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsApiproductsRateplansListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsApiproductsRateplansListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsApiproductsRateplansListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsRateplansListSecurity };
var ApigeeOrganizationsApiproductsRateplansListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsRateplansListRequest, _super);
    function ApigeeOrganizationsApiproductsRateplansListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsRateplansListPathParams)
    ], ApigeeOrganizationsApiproductsRateplansListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsRateplansListQueryParams)
    ], ApigeeOrganizationsApiproductsRateplansListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsRateplansListSecurity)
    ], ApigeeOrganizationsApiproductsRateplansListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsApiproductsRateplansListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsRateplansListRequest };
var ApigeeOrganizationsApiproductsRateplansListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsRateplansListResponse, _super);
    function ApigeeOrganizationsApiproductsRateplansListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsRateplansListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListRatePlansResponse)
    ], ApigeeOrganizationsApiproductsRateplansListResponse.prototype, "googleCloudApigeeV1ListRatePlansResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsApiproductsRateplansListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsApiproductsRateplansListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsRateplansListResponse };
