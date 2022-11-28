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
var BigqueryRoutinesDeletePathParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeletePathParams, _super);
    function BigqueryRoutinesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeletePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeletePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routineId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeletePathParams.prototype, "routineId", void 0);
    return BigqueryRoutinesDeletePathParams;
}(SpeakeasyBase));
export { BigqueryRoutinesDeletePathParams };
var BigqueryRoutinesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteQueryParams, _super);
    function BigqueryRoutinesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteQueryParams.prototype, "userIp", void 0);
    return BigqueryRoutinesDeleteQueryParams;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteQueryParams };
var BigqueryRoutinesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteSecurityOption1, _super);
    function BigqueryRoutinesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRoutinesDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteSecurityOption1 };
var BigqueryRoutinesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteSecurityOption2, _super);
    function BigqueryRoutinesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRoutinesDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteSecurityOption2 };
var BigqueryRoutinesDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteSecurity, _super);
    function BigqueryRoutinesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesDeleteSecurityOption1)
    ], BigqueryRoutinesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesDeleteSecurityOption2)
    ], BigqueryRoutinesDeleteSecurity.prototype, "option2", void 0);
    return BigqueryRoutinesDeleteSecurity;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteSecurity };
var BigqueryRoutinesDeleteRequest = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteRequest, _super);
    function BigqueryRoutinesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesDeletePathParams)
    ], BigqueryRoutinesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesDeleteQueryParams)
    ], BigqueryRoutinesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesDeleteSecurity)
    ], BigqueryRoutinesDeleteRequest.prototype, "security", void 0);
    return BigqueryRoutinesDeleteRequest;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteRequest };
var BigqueryRoutinesDeleteResponse = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesDeleteResponse, _super);
    function BigqueryRoutinesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRoutinesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRoutinesDeleteResponse.prototype, "statusCode", void 0);
    return BigqueryRoutinesDeleteResponse;
}(SpeakeasyBase));
export { BigqueryRoutinesDeleteResponse };
