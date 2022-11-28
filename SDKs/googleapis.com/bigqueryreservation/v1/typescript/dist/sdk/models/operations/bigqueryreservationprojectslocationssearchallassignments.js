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
var BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1 };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2 };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest };
var BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse, _super);
    function BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAllAssignmentsResponse)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse.prototype, "searchAllAssignmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse };
