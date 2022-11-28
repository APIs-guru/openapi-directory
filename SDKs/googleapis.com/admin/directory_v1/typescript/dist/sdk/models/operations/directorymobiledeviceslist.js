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
var DirectoryMobiledevicesListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListPathParams, _super);
    function DirectoryMobiledevicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListPathParams.prototype, "customerId", void 0);
    return DirectoryMobiledevicesListPathParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListPathParams };
export var DirectoryMobiledevicesListOrderByEnum;
(function (DirectoryMobiledevicesListOrderByEnum) {
    DirectoryMobiledevicesListOrderByEnum["DeviceId"] = "deviceId";
    DirectoryMobiledevicesListOrderByEnum["Email"] = "email";
    DirectoryMobiledevicesListOrderByEnum["LastSync"] = "lastSync";
    DirectoryMobiledevicesListOrderByEnum["Model"] = "model";
    DirectoryMobiledevicesListOrderByEnum["Name"] = "name";
    DirectoryMobiledevicesListOrderByEnum["Os"] = "os";
    DirectoryMobiledevicesListOrderByEnum["Status"] = "status";
    DirectoryMobiledevicesListOrderByEnum["Type"] = "type";
})(DirectoryMobiledevicesListOrderByEnum || (DirectoryMobiledevicesListOrderByEnum = {}));
export var DirectoryMobiledevicesListProjectionEnum;
(function (DirectoryMobiledevicesListProjectionEnum) {
    DirectoryMobiledevicesListProjectionEnum["Basic"] = "BASIC";
    DirectoryMobiledevicesListProjectionEnum["Full"] = "FULL";
})(DirectoryMobiledevicesListProjectionEnum || (DirectoryMobiledevicesListProjectionEnum = {}));
export var DirectoryMobiledevicesListSortOrderEnum;
(function (DirectoryMobiledevicesListSortOrderEnum) {
    DirectoryMobiledevicesListSortOrderEnum["Ascending"] = "ASCENDING";
    DirectoryMobiledevicesListSortOrderEnum["Descending"] = "DESCENDING";
})(DirectoryMobiledevicesListSortOrderEnum || (DirectoryMobiledevicesListSortOrderEnum = {}));
var DirectoryMobiledevicesListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListQueryParams, _super);
    function DirectoryMobiledevicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryMobiledevicesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMobiledevicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMobiledevicesListQueryParams;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListQueryParams };
var DirectoryMobiledevicesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListSecurityOption1, _super);
    function DirectoryMobiledevicesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListSecurityOption1 };
var DirectoryMobiledevicesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListSecurityOption2, _super);
    function DirectoryMobiledevicesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListSecurityOption2 };
var DirectoryMobiledevicesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListSecurityOption3, _super);
    function DirectoryMobiledevicesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMobiledevicesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMobiledevicesListSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryMobiledevicesListSecurityOption3;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListSecurityOption3 };
var DirectoryMobiledevicesListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListSecurity, _super);
    function DirectoryMobiledevicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesListSecurityOption1)
    ], DirectoryMobiledevicesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesListSecurityOption2)
    ], DirectoryMobiledevicesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMobiledevicesListSecurityOption3)
    ], DirectoryMobiledevicesListSecurity.prototype, "option3", void 0);
    return DirectoryMobiledevicesListSecurity;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListSecurity };
var DirectoryMobiledevicesListRequest = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListRequest, _super);
    function DirectoryMobiledevicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesListPathParams)
    ], DirectoryMobiledevicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesListQueryParams)
    ], DirectoryMobiledevicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMobiledevicesListSecurity)
    ], DirectoryMobiledevicesListRequest.prototype, "security", void 0);
    return DirectoryMobiledevicesListRequest;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListRequest };
var DirectoryMobiledevicesListResponse = /** @class */ (function (_super) {
    __extends(DirectoryMobiledevicesListResponse, _super);
    function DirectoryMobiledevicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMobiledevicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MobileDevices)
    ], DirectoryMobiledevicesListResponse.prototype, "mobileDevices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMobiledevicesListResponse.prototype, "statusCode", void 0);
    return DirectoryMobiledevicesListResponse;
}(SpeakeasyBase));
export { DirectoryMobiledevicesListResponse };
