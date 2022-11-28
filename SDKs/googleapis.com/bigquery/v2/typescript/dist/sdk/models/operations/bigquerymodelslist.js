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
var BigqueryModelsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsListPathParams, _super);
    function BigqueryModelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryModelsListPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryModelsListPathParams.prototype, "projectId", void 0);
    return BigqueryModelsListPathParams;
}(SpeakeasyBase));
export { BigqueryModelsListPathParams };
var BigqueryModelsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryModelsListQueryParams, _super);
    function BigqueryModelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryModelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryModelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryModelsListQueryParams.prototype, "userIp", void 0);
    return BigqueryModelsListQueryParams;
}(SpeakeasyBase));
export { BigqueryModelsListQueryParams };
var BigqueryModelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryModelsListSecurityOption1, _super);
    function BigqueryModelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryModelsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryModelsListSecurityOption1 };
var BigqueryModelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryModelsListSecurityOption2, _super);
    function BigqueryModelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryModelsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryModelsListSecurityOption2 };
var BigqueryModelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryModelsListSecurityOption3, _super);
    function BigqueryModelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryModelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryModelsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryModelsListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryModelsListSecurityOption3 };
var BigqueryModelsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryModelsListSecurity, _super);
    function BigqueryModelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsListSecurityOption1)
    ], BigqueryModelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsListSecurityOption2)
    ], BigqueryModelsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryModelsListSecurityOption3)
    ], BigqueryModelsListSecurity.prototype, "option3", void 0);
    return BigqueryModelsListSecurity;
}(SpeakeasyBase));
export { BigqueryModelsListSecurity };
var BigqueryModelsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryModelsListRequest, _super);
    function BigqueryModelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsListPathParams)
    ], BigqueryModelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsListQueryParams)
    ], BigqueryModelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryModelsListSecurity)
    ], BigqueryModelsListRequest.prototype, "security", void 0);
    return BigqueryModelsListRequest;
}(SpeakeasyBase));
export { BigqueryModelsListRequest };
var BigqueryModelsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryModelsListResponse, _super);
    function BigqueryModelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryModelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListModelsResponse)
    ], BigqueryModelsListResponse.prototype, "listModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryModelsListResponse.prototype, "statusCode", void 0);
    return BigqueryModelsListResponse;
}(SpeakeasyBase));
export { BigqueryModelsListResponse };
