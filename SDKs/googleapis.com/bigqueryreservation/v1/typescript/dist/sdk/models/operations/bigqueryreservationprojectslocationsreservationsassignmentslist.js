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
var BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest };
var BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssignmentsResponse)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse.prototype, "listAssignmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse };
