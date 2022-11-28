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
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams.prototype, "name", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest };
var BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse };
