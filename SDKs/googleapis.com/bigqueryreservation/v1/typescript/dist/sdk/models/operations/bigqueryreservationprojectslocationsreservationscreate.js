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
var BigqueryreservationProjectsLocationsReservationsCreatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreatePathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreatePathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreatePathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreatePathParams };
var BigqueryreservationProjectsLocationsReservationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reservationId" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "reservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateQueryParams };
var BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsCreateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsCreateSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsCreateSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsCreateSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateSecurity };
var BigqueryreservationProjectsLocationsReservationsCreateRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsCreatePathParams)
    ], BigqueryreservationProjectsLocationsReservationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsCreateQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReservationInput)
    ], BigqueryreservationProjectsLocationsReservationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsCreateSecurity)
    ], BigqueryreservationProjectsLocationsReservationsCreateRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateRequest };
var BigqueryreservationProjectsLocationsReservationsCreateResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsCreateResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reservation)
    ], BigqueryreservationProjectsLocationsReservationsCreateResponse.prototype, "reservation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsCreateResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsCreateResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsCreateResponse };
