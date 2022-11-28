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
var BigtableadminProjectsInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreatePathParams, _super);
    function BigtableadminProjectsInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreatePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesCreatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreatePathParams };
var BigtableadminProjectsInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateQueryParams, _super);
    function BigtableadminProjectsInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesCreateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateQueryParams };
var BigtableadminProjectsInstancesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption1, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption1 };
var BigtableadminProjectsInstancesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption2, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption2 };
var BigtableadminProjectsInstancesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption3, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption3 };
var BigtableadminProjectsInstancesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption4, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption4 };
var BigtableadminProjectsInstancesCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption5, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption5 };
var BigtableadminProjectsInstancesCreateSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurityOption6, _super);
    function BigtableadminProjectsInstancesCreateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesCreateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesCreateSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesCreateSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurityOption6 };
var BigtableadminProjectsInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateSecurity, _super);
    function BigtableadminProjectsInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption1)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption2)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption3)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption4)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption5)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurityOption6)
    ], BigtableadminProjectsInstancesCreateSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesCreateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateSecurity };
var BigtableadminProjectsInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateRequest, _super);
    function BigtableadminProjectsInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesCreatePathParams)
    ], BigtableadminProjectsInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesCreateQueryParams)
    ], BigtableadminProjectsInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateInstanceRequestInput)
    ], BigtableadminProjectsInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesCreateSecurity)
    ], BigtableadminProjectsInstancesCreateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesCreateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateRequest };
var BigtableadminProjectsInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesCreateResponse, _super);
    function BigtableadminProjectsInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesCreateResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesCreateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesCreateResponse };
