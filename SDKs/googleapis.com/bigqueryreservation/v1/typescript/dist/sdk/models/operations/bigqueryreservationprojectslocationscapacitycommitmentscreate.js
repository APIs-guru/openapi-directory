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
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=capacityCommitmentId" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "capacityCommitmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleAdminProjectPerOrg" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "enforceSingleAdminProjectPerOrg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CapacityCommitmentInput)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest };
var BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CapacityCommitment)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse.prototype, "capacityCommitment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse };
