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
var BigtableadminOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelPathParams, _super);
    function BigtableadminOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelPathParams.prototype, "name", void 0);
    return BigtableadminOperationsCancelPathParams;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelPathParams };
var BigtableadminOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelQueryParams, _super);
    function BigtableadminOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminOperationsCancelQueryParams;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelQueryParams };
var BigtableadminOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption1, _super);
    function BigtableadminOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption1 };
var BigtableadminOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption2, _super);
    function BigtableadminOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption2 };
var BigtableadminOperationsCancelSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption3, _super);
    function BigtableadminOperationsCancelSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption3 };
var BigtableadminOperationsCancelSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption4, _super);
    function BigtableadminOperationsCancelSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption4 };
var BigtableadminOperationsCancelSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption5, _super);
    function BigtableadminOperationsCancelSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption5 };
var BigtableadminOperationsCancelSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurityOption6, _super);
    function BigtableadminOperationsCancelSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminOperationsCancelSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminOperationsCancelSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminOperationsCancelSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurityOption6 };
var BigtableadminOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelSecurity, _super);
    function BigtableadminOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption1)
    ], BigtableadminOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption2)
    ], BigtableadminOperationsCancelSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption3)
    ], BigtableadminOperationsCancelSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption4)
    ], BigtableadminOperationsCancelSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption5)
    ], BigtableadminOperationsCancelSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminOperationsCancelSecurityOption6)
    ], BigtableadminOperationsCancelSecurity.prototype, "option6", void 0);
    return BigtableadminOperationsCancelSecurity;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelSecurity };
var BigtableadminOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelRequest, _super);
    function BigtableadminOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsCancelPathParams)
    ], BigtableadminOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsCancelQueryParams)
    ], BigtableadminOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminOperationsCancelSecurity)
    ], BigtableadminOperationsCancelRequest.prototype, "security", void 0);
    return BigtableadminOperationsCancelRequest;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelRequest };
var BigtableadminOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(BigtableadminOperationsCancelResponse, _super);
    function BigtableadminOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BigtableadminOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminOperationsCancelResponse.prototype, "statusCode", void 0);
    return BigtableadminOperationsCancelResponse;
}(SpeakeasyBase));
export { BigtableadminOperationsCancelResponse };
