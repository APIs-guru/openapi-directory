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
var BigqueryRoutinesUpdatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdatePathParams, _super);
    function BigqueryRoutinesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdatePathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdatePathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routineId" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdatePathParams.prototype, "routineId", void 0);
    return BigqueryRoutinesUpdatePathParams;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdatePathParams };
var BigqueryRoutinesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateQueryParams, _super);
    function BigqueryRoutinesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateQueryParams.prototype, "userIp", void 0);
    return BigqueryRoutinesUpdateQueryParams;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateQueryParams };
var BigqueryRoutinesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateSecurityOption1, _super);
    function BigqueryRoutinesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryRoutinesUpdateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateSecurityOption1 };
var BigqueryRoutinesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateSecurityOption2, _super);
    function BigqueryRoutinesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryRoutinesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryRoutinesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryRoutinesUpdateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateSecurityOption2 };
var BigqueryRoutinesUpdateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateSecurity, _super);
    function BigqueryRoutinesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesUpdateSecurityOption1)
    ], BigqueryRoutinesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryRoutinesUpdateSecurityOption2)
    ], BigqueryRoutinesUpdateSecurity.prototype, "option2", void 0);
    return BigqueryRoutinesUpdateSecurity;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateSecurity };
var BigqueryRoutinesUpdateRequest = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateRequest, _super);
    function BigqueryRoutinesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesUpdatePathParams)
    ], BigqueryRoutinesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesUpdateQueryParams)
    ], BigqueryRoutinesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RoutineInput)
    ], BigqueryRoutinesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryRoutinesUpdateSecurity)
    ], BigqueryRoutinesUpdateRequest.prototype, "security", void 0);
    return BigqueryRoutinesUpdateRequest;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateRequest };
var BigqueryRoutinesUpdateResponse = /** @class */ (function (_super) {
    __extends(BigqueryRoutinesUpdateResponse, _super);
    function BigqueryRoutinesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryRoutinesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Routine)
    ], BigqueryRoutinesUpdateResponse.prototype, "routine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryRoutinesUpdateResponse.prototype, "statusCode", void 0);
    return BigqueryRoutinesUpdateResponse;
}(SpeakeasyBase));
export { BigqueryRoutinesUpdateResponse };
