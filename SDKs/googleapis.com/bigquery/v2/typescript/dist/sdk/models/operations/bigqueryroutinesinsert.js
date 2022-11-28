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
var BigqueryRoutinesInsertPathParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertPathParams, _super);
    function BigqueryRoutinesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertPathParams.prototype, "projectId", void 0);
    return BigqueryRoutinesInsertPathParams;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertPathParams };
var BigqueryRoutinesInsertQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertQueryParams, _super);
    function BigqueryRoutinesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRoutinesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertQueryParams.prototype, "userIp", void 0);
    return BigqueryRoutinesInsertQueryParams;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertQueryParams };
var BigqueryRoutinesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertSecurityOption1, _super);
    function BigqueryRoutinesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRoutinesInsertSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertSecurityOption1 };
var BigqueryRoutinesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertSecurityOption2, _super);
    function BigqueryRoutinesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRoutinesInsertSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertSecurityOption2 };
var BigqueryRoutinesInsertSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertSecurity, _super);
    function BigqueryRoutinesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesInsertSecurityOption1)
    ], BigqueryRoutinesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesInsertSecurityOption2)
    ], BigqueryRoutinesInsertSecurity.prototype, "option2", void 0);
    return BigqueryRoutinesInsertSecurity;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertSecurity };
var BigqueryRoutinesInsertRequest = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertRequest, _super);
    function BigqueryRoutinesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesInsertPathParams)
    ], BigqueryRoutinesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesInsertQueryParams)
    ], BigqueryRoutinesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RoutineInput)
    ], BigqueryRoutinesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesInsertSecurity)
    ], BigqueryRoutinesInsertRequest.prototype, "security", void 0);
    return BigqueryRoutinesInsertRequest;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertRequest };
var BigqueryRoutinesInsertResponse = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesInsertResponse, _super);
    function BigqueryRoutinesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRoutinesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Routine)
    ], BigqueryRoutinesInsertResponse.prototype, "routine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRoutinesInsertResponse.prototype, "statusCode", void 0);
    return BigqueryRoutinesInsertResponse;
}(SpeakeasyBase));
export { BigqueryRoutinesInsertResponse };
