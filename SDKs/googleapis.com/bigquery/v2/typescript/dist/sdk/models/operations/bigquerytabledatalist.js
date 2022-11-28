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
var BigqueryTabledataListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListPathParams, _super);
    function BigqueryTabledataListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListPathParams.prototype, "tableId", void 0);
    return BigqueryTabledataListPathParams;
}(SpeakeasyBase));
export { BigqueryTabledataListPathParams };
var BigqueryTabledataListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListQueryParams, _super);
    function BigqueryTabledataListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryTabledataListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTabledataListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selectedFields" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "selectedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTabledataListQueryParams.prototype, "userIp", void 0);
    return BigqueryTabledataListQueryParams;
}(SpeakeasyBase));
export { BigqueryTabledataListQueryParams };
var BigqueryTabledataListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListSecurityOption1, _super);
    function BigqueryTabledataListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTabledataListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTabledataListSecurityOption1 };
var BigqueryTabledataListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListSecurityOption2, _super);
    function BigqueryTabledataListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTabledataListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTabledataListSecurityOption2 };
var BigqueryTabledataListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListSecurityOption3, _super);
    function BigqueryTabledataListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryTabledataListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryTabledataListSecurityOption3 };
var BigqueryTabledataListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListSecurity, _super);
    function BigqueryTabledataListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataListSecurityOption1)
    ], BigqueryTabledataListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataListSecurityOption2)
    ], BigqueryTabledataListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataListSecurityOption3)
    ], BigqueryTabledataListSecurity.prototype, "option3", void 0);
    return BigqueryTabledataListSecurity;
}(SpeakeasyBase));
export { BigqueryTabledataListSecurity };
var BigqueryTabledataListRequest = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListRequest, _super);
    function BigqueryTabledataListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataListPathParams)
    ], BigqueryTabledataListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataListQueryParams)
    ], BigqueryTabledataListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataListSecurity)
    ], BigqueryTabledataListRequest.prototype, "security", void 0);
    return BigqueryTabledataListRequest;
}(SpeakeasyBase));
export { BigqueryTabledataListRequest };
var BigqueryTabledataListResponse = /** @class */ (function (_super) {
    __extends(BigqueryTabledataListResponse, _super);
    function BigqueryTabledataListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTabledataListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTabledataListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TableDataList)
    ], BigqueryTabledataListResponse.prototype, "tableDataList", void 0);
    return BigqueryTabledataListResponse;
}(SpeakeasyBase));
export { BigqueryTabledataListResponse };
