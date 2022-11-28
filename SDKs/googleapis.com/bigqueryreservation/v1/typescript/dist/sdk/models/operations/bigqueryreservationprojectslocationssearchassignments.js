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
var BigqueryreservationProjectsLocationsSearchAssignmentsPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsPathParams, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsPathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsPathParams };
var BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams };
var BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1 };
var BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2 };
var BigqueryreservationProjectsLocationsSearchAssignmentsSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsSecurity, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsSecurity };
var BigqueryreservationProjectsLocationsSearchAssignmentsRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsRequest, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAssignmentsPathParams)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAssignmentsSecurity)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsRequest };
var BigqueryreservationProjectsLocationsSearchAssignmentsResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAssignmentsResponse, _super);
    function BigqueryreservationProjectsLocationsSearchAssignmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAssignmentsResponse)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsResponse.prototype, "searchAssignmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsSearchAssignmentsResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsSearchAssignmentsResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAssignmentsResponse };
