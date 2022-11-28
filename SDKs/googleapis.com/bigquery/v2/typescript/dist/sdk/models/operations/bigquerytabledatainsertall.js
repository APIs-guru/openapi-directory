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
var BigqueryTabledataInsertAllPathParams = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllPathParams, _super);
    function BigqueryTabledataInsertAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllPathParams.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllPathParams.prototype, "tableId", void 0);
    return BigqueryTabledataInsertAllPathParams;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllPathParams };
var BigqueryTabledataInsertAllQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllQueryParams, _super);
    function BigqueryTabledataInsertAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllQueryParams.prototype, "userIp", void 0);
    return BigqueryTabledataInsertAllQueryParams;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllQueryParams };
var BigqueryTabledataInsertAllSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllSecurityOption1, _super);
    function BigqueryTabledataInsertAllSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataInsertAllSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataInsertAllSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryTabledataInsertAllSecurityOption1;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllSecurityOption1 };
var BigqueryTabledataInsertAllSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllSecurityOption2, _super);
    function BigqueryTabledataInsertAllSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataInsertAllSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataInsertAllSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryTabledataInsertAllSecurityOption2;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllSecurityOption2 };
var BigqueryTabledataInsertAllSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllSecurityOption3, _super);
    function BigqueryTabledataInsertAllSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryTabledataInsertAllSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryTabledataInsertAllSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryTabledataInsertAllSecurityOption3;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllSecurityOption3 };
var BigqueryTabledataInsertAllSecurity = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllSecurity, _super);
    function BigqueryTabledataInsertAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataInsertAllSecurityOption1)
    ], BigqueryTabledataInsertAllSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataInsertAllSecurityOption2)
    ], BigqueryTabledataInsertAllSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryTabledataInsertAllSecurityOption3)
    ], BigqueryTabledataInsertAllSecurity.prototype, "option3", void 0);
    return BigqueryTabledataInsertAllSecurity;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllSecurity };
var BigqueryTabledataInsertAllRequest = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllRequest, _super);
    function BigqueryTabledataInsertAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataInsertAllPathParams)
    ], BigqueryTabledataInsertAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataInsertAllQueryParams)
    ], BigqueryTabledataInsertAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TableDataInsertAllRequest)
    ], BigqueryTabledataInsertAllRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryTabledataInsertAllSecurity)
    ], BigqueryTabledataInsertAllRequest.prototype, "security", void 0);
    return BigqueryTabledataInsertAllRequest;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllRequest };
var BigqueryTabledataInsertAllResponse = /** @class */ (function (_super) {
    __extends(BigqueryTabledataInsertAllResponse, _super);
    function BigqueryTabledataInsertAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryTabledataInsertAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryTabledataInsertAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TableDataInsertAllResponse)
    ], BigqueryTabledataInsertAllResponse.prototype, "tableDataInsertAllResponse", void 0);
    return BigqueryTabledataInsertAllResponse;
}(SpeakeasyBase));
export { BigqueryTabledataInsertAllResponse };
