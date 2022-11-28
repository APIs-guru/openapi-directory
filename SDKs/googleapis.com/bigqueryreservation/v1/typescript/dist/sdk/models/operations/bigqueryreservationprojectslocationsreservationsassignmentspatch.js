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
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams.prototype, "name", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssignmentInput)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest };
var BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Assignment)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse.prototype, "assignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse };
