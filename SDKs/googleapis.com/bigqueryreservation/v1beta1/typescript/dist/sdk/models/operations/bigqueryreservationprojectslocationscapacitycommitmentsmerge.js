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
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MergeCapacityCommitmentsRequest)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest };
var BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CapacityCommitment)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse.prototype, "capacityCommitment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse };
