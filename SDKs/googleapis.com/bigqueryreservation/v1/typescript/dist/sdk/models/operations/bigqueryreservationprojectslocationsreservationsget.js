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
var BigqueryreservationProjectsLocationsReservationsGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetPathParams, _super);
    function BigqueryreservationProjectsLocationsReservationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetPathParams.prototype, "name", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetPathParams };
var BigqueryreservationProjectsLocationsReservationsGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetQueryParams, _super);
    function BigqueryreservationProjectsLocationsReservationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetQueryParams };
var BigqueryreservationProjectsLocationsReservationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsReservationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetSecurityOption1 };
var BigqueryreservationProjectsLocationsReservationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsReservationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetSecurityOption2 };
var BigqueryreservationProjectsLocationsReservationsGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetSecurity, _super);
    function BigqueryreservationProjectsLocationsReservationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsGetSecurityOption1)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsGetSecurityOption2)
    ], BigqueryreservationProjectsLocationsReservationsGetSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetSecurity };
var BigqueryreservationProjectsLocationsReservationsGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetRequest, _super);
    function BigqueryreservationProjectsLocationsReservationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsGetPathParams)
    ], BigqueryreservationProjectsLocationsReservationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsGetQueryParams)
    ], BigqueryreservationProjectsLocationsReservationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsReservationsGetSecurity)
    ], BigqueryreservationProjectsLocationsReservationsGetRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetRequest };
var BigqueryreservationProjectsLocationsReservationsGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsReservationsGetResponse, _super);
    function BigqueryreservationProjectsLocationsReservationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsReservationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reservation)
    ], BigqueryreservationProjectsLocationsReservationsGetResponse.prototype, "reservation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsReservationsGetResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsReservationsGetResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsReservationsGetResponse };
