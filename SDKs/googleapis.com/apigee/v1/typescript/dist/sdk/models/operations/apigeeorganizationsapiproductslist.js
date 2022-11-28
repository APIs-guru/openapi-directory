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
var ApigeeOrganizationsApiproductsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsListPathParams, _super);
    function ApigeeOrganizationsApiproductsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsApiproductsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsListPathParams };
var ApigeeOrganizationsApiproductsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsListQueryParams, _super);
    function ApigeeOrganizationsApiproductsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributename" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "attributename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributevalue" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "attributevalue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "expand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startKey" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "startKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsApiproductsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsListQueryParams };
var ApigeeOrganizationsApiproductsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsListSecurity, _super);
    function ApigeeOrganizationsApiproductsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsApiproductsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsApiproductsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsApiproductsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsListSecurity };
var ApigeeOrganizationsApiproductsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsListRequest, _super);
    function ApigeeOrganizationsApiproductsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsListPathParams)
    ], ApigeeOrganizationsApiproductsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsListQueryParams)
    ], ApigeeOrganizationsApiproductsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsApiproductsListSecurity)
    ], ApigeeOrganizationsApiproductsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsApiproductsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsListRequest };
var ApigeeOrganizationsApiproductsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsApiproductsListResponse, _super);
    function ApigeeOrganizationsApiproductsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsApiproductsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListApiProductsResponse)
    ], ApigeeOrganizationsApiproductsListResponse.prototype, "googleCloudApigeeV1ListApiProductsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsApiproductsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsApiproductsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsApiproductsListResponse };
