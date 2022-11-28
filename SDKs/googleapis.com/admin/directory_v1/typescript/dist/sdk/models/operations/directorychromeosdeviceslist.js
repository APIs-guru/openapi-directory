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
var DirectoryChromeosdevicesListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListPathParams, _super);
    function DirectoryChromeosdevicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListPathParams.prototype, "customerId", void 0);
    return DirectoryChromeosdevicesListPathParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListPathParams };
export var DirectoryChromeosdevicesListOrderByEnum;
(function (DirectoryChromeosdevicesListOrderByEnum) {
    DirectoryChromeosdevicesListOrderByEnum["AnnotatedLocation"] = "annotatedLocation";
    DirectoryChromeosdevicesListOrderByEnum["AnnotatedUser"] = "annotatedUser";
    DirectoryChromeosdevicesListOrderByEnum["LastSync"] = "lastSync";
    DirectoryChromeosdevicesListOrderByEnum["Notes"] = "notes";
    DirectoryChromeosdevicesListOrderByEnum["SerialNumber"] = "serialNumber";
    DirectoryChromeosdevicesListOrderByEnum["Status"] = "status";
})(DirectoryChromeosdevicesListOrderByEnum || (DirectoryChromeosdevicesListOrderByEnum = {}));
export var DirectoryChromeosdevicesListProjectionEnum;
(function (DirectoryChromeosdevicesListProjectionEnum) {
    DirectoryChromeosdevicesListProjectionEnum["Basic"] = "BASIC";
    DirectoryChromeosdevicesListProjectionEnum["Full"] = "FULL";
})(DirectoryChromeosdevicesListProjectionEnum || (DirectoryChromeosdevicesListProjectionEnum = {}));
export var DirectoryChromeosdevicesListSortOrderEnum;
(function (DirectoryChromeosdevicesListSortOrderEnum) {
    DirectoryChromeosdevicesListSortOrderEnum["Ascending"] = "ASCENDING";
    DirectoryChromeosdevicesListSortOrderEnum["Descending"] = "DESCENDING";
})(DirectoryChromeosdevicesListSortOrderEnum || (DirectoryChromeosdevicesListSortOrderEnum = {}));
var DirectoryChromeosdevicesListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListQueryParams, _super);
    function DirectoryChromeosdevicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeChildOrgunits" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "includeChildOrgunits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitPath" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryChromeosdevicesListQueryParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListQueryParams };
var DirectoryChromeosdevicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListSecurityOption1, _super);
    function DirectoryChromeosdevicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListSecurityOption1 };
var DirectoryChromeosdevicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListSecurityOption2, _super);
    function DirectoryChromeosdevicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListSecurityOption2 };
var DirectoryChromeosdevicesListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListSecurity, _super);
    function DirectoryChromeosdevicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryChromeosdevicesListSecurityOption1)
    ], DirectoryChromeosdevicesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryChromeosdevicesListSecurityOption2)
    ], DirectoryChromeosdevicesListSecurity.prototype, "option2", void 0);
    return DirectoryChromeosdevicesListSecurity;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListSecurity };
var DirectoryChromeosdevicesListRequest = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListRequest, _super);
    function DirectoryChromeosdevicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesListPathParams)
    ], DirectoryChromeosdevicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesListQueryParams)
    ], DirectoryChromeosdevicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesListSecurity)
    ], DirectoryChromeosdevicesListRequest.prototype, "security", void 0);
    return DirectoryChromeosdevicesListRequest;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListRequest };
var DirectoryChromeosdevicesListResponse = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesListResponse, _super);
    function DirectoryChromeosdevicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChromeOsDevices)
    ], DirectoryChromeosdevicesListResponse.prototype, "chromeOsDevices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesListResponse.prototype, "statusCode", void 0);
    return DirectoryChromeosdevicesListResponse;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesListResponse };
