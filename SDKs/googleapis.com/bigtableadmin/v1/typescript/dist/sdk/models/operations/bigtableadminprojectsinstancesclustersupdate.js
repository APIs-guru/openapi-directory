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
var BigtableadminProjectsInstancesClustersUpdatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdatePathParams, _super);
    function BigtableadminProjectsInstancesClustersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdatePathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesClustersUpdatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdatePathParams };
var BigtableadminProjectsInstancesClustersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateQueryParams, _super);
    function BigtableadminProjectsInstancesClustersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersUpdateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateQueryParams };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption1 };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption2 };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption3 };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption4 };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption5 };
var BigtableadminProjectsInstancesClustersUpdateSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurityOption6, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersUpdateSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurityOption6 };
var BigtableadminProjectsInstancesClustersUpdateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateSecurity, _super);
    function BigtableadminProjectsInstancesClustersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption1)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption2)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption3)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption4)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption5)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurityOption6)
    ], BigtableadminProjectsInstancesClustersUpdateSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesClustersUpdateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateSecurity };
var BigtableadminProjectsInstancesClustersUpdateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateRequest, _super);
    function BigtableadminProjectsInstancesClustersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdatePathParams)
    ], BigtableadminProjectsInstancesClustersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateQueryParams)
    ], BigtableadminProjectsInstancesClustersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClusterInput)
    ], BigtableadminProjectsInstancesClustersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersUpdateSecurity)
    ], BigtableadminProjectsInstancesClustersUpdateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersUpdateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateRequest };
var BigtableadminProjectsInstancesClustersUpdateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersUpdateResponse, _super);
    function BigtableadminProjectsInstancesClustersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesClustersUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersUpdateResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersUpdateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersUpdateResponse };
