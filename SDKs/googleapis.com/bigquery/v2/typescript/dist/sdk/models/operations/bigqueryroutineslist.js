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
var BigqueryRoutinesListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListPathParams, _super);
    function BigqueryRoutinesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListPathParams.prototype, "projectId", void 0);
    return BigqueryRoutinesListPathParams;
}(SpeakeasyBase));
export { BigqueryRoutinesListPathParams };
var BigqueryRoutinesListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListQueryParams, _super);
    function BigqueryRoutinesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryRoutinesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRoutinesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesListQueryParams.prototype, "userIp", void 0);
    return BigqueryRoutinesListQueryParams;
}(SpeakeasyBase));
export { BigqueryRoutinesListQueryParams };
var BigqueryRoutinesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListSecurityOption1, _super);
    function BigqueryRoutinesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRoutinesListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRoutinesListSecurityOption1 };
var BigqueryRoutinesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListSecurityOption2, _super);
    function BigqueryRoutinesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRoutinesListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRoutinesListSecurityOption2 };
var BigqueryRoutinesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListSecurityOption3, _super);
    function BigqueryRoutinesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryRoutinesListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryRoutinesListSecurityOption3 };
var BigqueryRoutinesListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListSecurity, _super);
    function BigqueryRoutinesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesListSecurityOption1)
    ], BigqueryRoutinesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesListSecurityOption2)
    ], BigqueryRoutinesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesListSecurityOption3)
    ], BigqueryRoutinesListSecurity.prototype, "option3", void 0);
    return BigqueryRoutinesListSecurity;
}(SpeakeasyBase));
export { BigqueryRoutinesListSecurity };
var BigqueryRoutinesListRequest = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListRequest, _super);
    function BigqueryRoutinesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesListPathParams)
    ], BigqueryRoutinesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesListQueryParams)
    ], BigqueryRoutinesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesListSecurity)
    ], BigqueryRoutinesListRequest.prototype, "security", void 0);
    return BigqueryRoutinesListRequest;
}(SpeakeasyBase));
export { BigqueryRoutinesListRequest };
var BigqueryRoutinesListResponse = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesListResponse, _super);
    function BigqueryRoutinesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRoutinesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRoutinesResponse)
    ], BigqueryRoutinesListResponse.prototype, "listRoutinesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRoutinesListResponse.prototype, "statusCode", void 0);
    return BigqueryRoutinesListResponse;
}(SpeakeasyBase));
export { BigqueryRoutinesListResponse };
