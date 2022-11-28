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
var BigqueryDatasetsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListPathParams, _super);
    function BigqueryDatasetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListPathParams.prototype, "projectId", void 0);
    return BigqueryDatasetsListPathParams;
}(SpeakeasyBase));
export { BigqueryDatasetsListPathParams };
var BigqueryDatasetsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListQueryParams, _super);
    function BigqueryDatasetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsListQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryDatasetsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryDatasetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryDatasetsListQueryParams.prototype, "userIp", void 0);
    return BigqueryDatasetsListQueryParams;
}(SpeakeasyBase));
export { BigqueryDatasetsListQueryParams };
var BigqueryDatasetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListSecurityOption1, _super);
    function BigqueryDatasetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryDatasetsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryDatasetsListSecurityOption1 };
var BigqueryDatasetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListSecurityOption2, _super);
    function BigqueryDatasetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryDatasetsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryDatasetsListSecurityOption2 };
var BigqueryDatasetsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListSecurityOption3, _super);
    function BigqueryDatasetsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryDatasetsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryDatasetsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryDatasetsListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryDatasetsListSecurityOption3 };
var BigqueryDatasetsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListSecurity, _super);
    function BigqueryDatasetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsListSecurityOption1)
    ], BigqueryDatasetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsListSecurityOption2)
    ], BigqueryDatasetsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryDatasetsListSecurityOption3)
    ], BigqueryDatasetsListSecurity.prototype, "option3", void 0);
    return BigqueryDatasetsListSecurity;
}(SpeakeasyBase));
export { BigqueryDatasetsListSecurity };
var BigqueryDatasetsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListRequest, _super);
    function BigqueryDatasetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsListPathParams)
    ], BigqueryDatasetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsListQueryParams)
    ], BigqueryDatasetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryDatasetsListSecurity)
    ], BigqueryDatasetsListRequest.prototype, "security", void 0);
    return BigqueryDatasetsListRequest;
}(SpeakeasyBase));
export { BigqueryDatasetsListRequest };
var BigqueryDatasetsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryDatasetsListResponse, _super);
    function BigqueryDatasetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryDatasetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatasetList)
    ], BigqueryDatasetsListResponse.prototype, "datasetList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryDatasetsListResponse.prototype, "statusCode", void 0);
    return BigqueryDatasetsListResponse;
}(SpeakeasyBase));
export { BigqueryDatasetsListResponse };
