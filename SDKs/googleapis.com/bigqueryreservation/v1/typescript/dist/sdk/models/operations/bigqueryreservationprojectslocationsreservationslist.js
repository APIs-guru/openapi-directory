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
var BigqueryreservationProjectsLocationsReservationsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListPathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListPathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsReservationsListPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListPathParams };
var BigqueryreservationProjectsLocationsReservationsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsListQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListQueryParams };
var BigqueryreservationProjectsLocationsReservationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsListSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsListSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsListSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsListSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListSecurity };
var BigqueryreservationProjectsLocationsReservationsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsListPathParams)
    ], BigqueryreservationProjectsLocationsReservationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsListQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsListSecurity)
    ], BigqueryreservationProjectsLocationsReservationsListRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsListRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListRequest };
var BigqueryreservationProjectsLocationsReservationsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsListResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReservationsResponse)
    ], BigqueryreservationProjectsLocationsReservationsListResponse.prototype, "listReservationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsListResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsListResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsListResponse };
