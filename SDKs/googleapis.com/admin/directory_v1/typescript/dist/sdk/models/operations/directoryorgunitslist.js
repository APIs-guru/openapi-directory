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
var DirectoryOrgunitsListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListPathParams, _super);
    function DirectoryOrgunitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListPathParams.prototype, "customerId", void 0);
    return DirectoryOrgunitsListPathParams;
}(SpeakeasyBase));
export { DirectoryOrgunitsListPathParams };
export var DirectoryOrgunitsListTypeEnum;
(function (DirectoryOrgunitsListTypeEnum) {
    DirectoryOrgunitsListTypeEnum["All"] = "all";
    DirectoryOrgunitsListTypeEnum["Children"] = "children";
})(DirectoryOrgunitsListTypeEnum || (DirectoryOrgunitsListTypeEnum = {}));
var DirectoryOrgunitsListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListQueryParams, _super);
    function DirectoryOrgunitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitPath" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryOrgunitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryOrgunitsListQueryParams;
}(SpeakeasyBase));
export { DirectoryOrgunitsListQueryParams };
var DirectoryOrgunitsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListSecurityOption1, _super);
    function DirectoryOrgunitsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryOrgunitsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryOrgunitsListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryOrgunitsListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryOrgunitsListSecurityOption1 };
var DirectoryOrgunitsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListSecurityOption2, _super);
    function DirectoryOrgunitsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryOrgunitsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryOrgunitsListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryOrgunitsListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryOrgunitsListSecurityOption2 };
var DirectoryOrgunitsListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListSecurity, _super);
    function DirectoryOrgunitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryOrgunitsListSecurityOption1)
    ], DirectoryOrgunitsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryOrgunitsListSecurityOption2)
    ], DirectoryOrgunitsListSecurity.prototype, "option2", void 0);
    return DirectoryOrgunitsListSecurity;
}(SpeakeasyBase));
export { DirectoryOrgunitsListSecurity };
var DirectoryOrgunitsListRequest = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListRequest, _super);
    function DirectoryOrgunitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsListPathParams)
    ], DirectoryOrgunitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsListQueryParams)
    ], DirectoryOrgunitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryOrgunitsListSecurity)
    ], DirectoryOrgunitsListRequest.prototype, "security", void 0);
    return DirectoryOrgunitsListRequest;
}(SpeakeasyBase));
export { DirectoryOrgunitsListRequest };
var DirectoryOrgunitsListResponse = /** @class */ (function (_super) {
    __extends(DirectoryOrgunitsListResponse, _super);
    function DirectoryOrgunitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryOrgunitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrgUnits)
    ], DirectoryOrgunitsListResponse.prototype, "orgUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryOrgunitsListResponse.prototype, "statusCode", void 0);
    return DirectoryOrgunitsListResponse;
}(SpeakeasyBase));
export { DirectoryOrgunitsListResponse };
