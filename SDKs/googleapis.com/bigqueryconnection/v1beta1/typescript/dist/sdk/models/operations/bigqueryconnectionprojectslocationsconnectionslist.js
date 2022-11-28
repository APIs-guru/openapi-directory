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
var BigqueryconnectionProjectsLocationsConnectionsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListPathParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListPathParams.prototype, "parent", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListPathParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListPathParams };
var BigqueryconnectionProjectsLocationsConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListQueryParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListQueryParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListQueryParams };
var BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1 };
var BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2 };
var BigqueryconnectionProjectsLocationsConnectionsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListSecurity, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2)
    ], BigqueryconnectionProjectsLocationsConnectionsListSecurity.prototype, "option2", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListSecurity;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListSecurity };
var BigqueryconnectionProjectsLocationsConnectionsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListRequest, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsListPathParams)
    ], BigqueryconnectionProjectsLocationsConnectionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsListQueryParams)
    ], BigqueryconnectionProjectsLocationsConnectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsListSecurity)
    ], BigqueryconnectionProjectsLocationsConnectionsListRequest.prototype, "security", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListRequest;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListRequest };
var BigqueryconnectionProjectsLocationsConnectionsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsListResponse, _super);
    function BigqueryconnectionProjectsLocationsConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConnectionsResponse)
    ], BigqueryconnectionProjectsLocationsConnectionsListResponse.prototype, "listConnectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsListResponse.prototype, "statusCode", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsListResponse;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsListResponse };
