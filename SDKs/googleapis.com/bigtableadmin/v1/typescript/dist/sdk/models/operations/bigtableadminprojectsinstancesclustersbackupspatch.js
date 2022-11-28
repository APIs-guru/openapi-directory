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
var BigtableadminProjectsInstancesClustersBackupsPatchPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchPathParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchPathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchPathParams };
var BigtableadminProjectsInstancesClustersBackupsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchQueryParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchQueryParams };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 };
var BigtableadminProjectsInstancesClustersBackupsPatchSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchSecurity, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6)
    ], BigtableadminProjectsInstancesClustersBackupsPatchSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchSecurity };
var BigtableadminProjectsInstancesClustersBackupsPatchRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchRequest, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchPathParams)
    ], BigtableadminProjectsInstancesClustersBackupsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchQueryParams)
    ], BigtableadminProjectsInstancesClustersBackupsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupInput)
    ], BigtableadminProjectsInstancesClustersBackupsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsPatchSecurity)
    ], BigtableadminProjectsInstancesClustersBackupsPatchRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchRequest };
var BigtableadminProjectsInstancesClustersBackupsPatchResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsPatchResponse, _super);
    function BigtableadminProjectsInstancesClustersBackupsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Backup)
    ], BigtableadminProjectsInstancesClustersBackupsPatchResponse.prototype, "backup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersBackupsPatchResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersBackupsPatchResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsPatchResponse };
