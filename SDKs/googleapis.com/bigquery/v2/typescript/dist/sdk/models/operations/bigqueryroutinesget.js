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
var BigqueryRoutinesGetPathParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetPathParams, _super);
    function BigqueryRoutinesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routineId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetPathParams.prototype, "routineId", void 0);
    return BigqueryRoutinesGetPathParams;
}(SpeakeasyBase));
export { BigqueryRoutinesGetPathParams };
var BigqueryRoutinesGetQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetQueryParams, _super);
    function BigqueryRoutinesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRoutinesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetQueryParams.prototype, "userIp", void 0);
    return BigqueryRoutinesGetQueryParams;
}(SpeakeasyBase));
export { BigqueryRoutinesGetQueryParams };
var BigqueryRoutinesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetSecurityOption1, _super);
    function BigqueryRoutinesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesGetSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRoutinesGetSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRoutinesGetSecurityOption1 };
var BigqueryRoutinesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetSecurityOption2, _super);
    function BigqueryRoutinesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesGetSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRoutinesGetSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRoutinesGetSecurityOption2 };
var BigqueryRoutinesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetSecurityOption3, _super);
    function BigqueryRoutinesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesGetSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryRoutinesGetSecurityOption3;
}(SpeakeasyBase));
export { BigqueryRoutinesGetSecurityOption3 };
var BigqueryRoutinesGetSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetSecurity, _super);
    function BigqueryRoutinesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesGetSecurityOption1)
    ], BigqueryRoutinesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesGetSecurityOption2)
    ], BigqueryRoutinesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesGetSecurityOption3)
    ], BigqueryRoutinesGetSecurity.prototype, "option3", void 0);
    return BigqueryRoutinesGetSecurity;
}(SpeakeasyBase));
export { BigqueryRoutinesGetSecurity };
var BigqueryRoutinesGetRequest = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetRequest, _super);
    function BigqueryRoutinesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesGetPathParams)
    ], BigqueryRoutinesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesGetQueryParams)
    ], BigqueryRoutinesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesGetSecurity)
    ], BigqueryRoutinesGetRequest.prototype, "security", void 0);
    return BigqueryRoutinesGetRequest;
}(SpeakeasyBase));
export { BigqueryRoutinesGetRequest };
var BigqueryRoutinesGetResponse = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesGetResponse, _super);
    function BigqueryRoutinesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRoutinesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Routine)
    ], BigqueryRoutinesGetResponse.prototype, "routine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRoutinesGetResponse.prototype, "statusCode", void 0);
    return BigqueryRoutinesGetResponse;
}(SpeakeasyBase));
export { BigqueryRoutinesGetResponse };
