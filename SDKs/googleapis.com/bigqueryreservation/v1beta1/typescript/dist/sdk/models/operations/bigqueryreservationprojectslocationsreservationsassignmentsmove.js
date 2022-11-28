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
var BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams.prototype, "name", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MoveAssignmentRequest)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest };
var BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Assignment)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse.prototype, "assignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse };
