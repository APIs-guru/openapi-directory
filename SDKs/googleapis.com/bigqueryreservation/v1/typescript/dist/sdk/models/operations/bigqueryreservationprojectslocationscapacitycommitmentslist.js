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
var BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams.prototype, "parent", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2 };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity.prototype, "option2", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest.prototype, "security", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest };
var BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse, _super);
    function BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCapacityCommitmentsResponse)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse.prototype, "listCapacityCommitmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse.prototype, "statusCode", void 0);
    return BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse;
}(SpeakeasyBase));
export { BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse };
