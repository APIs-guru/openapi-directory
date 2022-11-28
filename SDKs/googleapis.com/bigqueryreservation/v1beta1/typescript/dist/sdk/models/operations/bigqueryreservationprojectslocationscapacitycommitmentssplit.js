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
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams.prototype, "name", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SplitCapacityCommitmentRequest)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest };
var BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SplitCapacityCommitmentResponse)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse.prototype, "splitCapacityCommitmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse };
