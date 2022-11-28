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
var AndroidmanagementEnterprisesDevicesOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesDevicesOperationsCancelPathParams, _super);
    function AndroidmanagementEnterprisesDevicesOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelPathParams.prototype, "name", void 0);
    return AndroidmanagementEnterprisesDevicesOperationsCancelPathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesDevicesOperationsCancelPathParams };
var AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams, _super);
    function AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams };
var AndroidmanagementEnterprisesDevicesOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesDevicesOperationsCancelSecurity, _super);
    function AndroidmanagementEnterprisesDevicesOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesDevicesOperationsCancelSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesDevicesOperationsCancelSecurity };
var AndroidmanagementEnterprisesDevicesOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesDevicesOperationsCancelRequest, _super);
    function AndroidmanagementEnterprisesDevicesOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesDevicesOperationsCancelPathParams)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesDevicesOperationsCancelQueryParams)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesDevicesOperationsCancelSecurity)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesDevicesOperationsCancelRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesDevicesOperationsCancelRequest };
var AndroidmanagementEnterprisesDevicesOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesDevicesOperationsCancelResponse, _super);
    function AndroidmanagementEnterprisesDevicesOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesDevicesOperationsCancelResponse.prototype, "statusCode", void 0);
    return AndroidmanagementEnterprisesDevicesOperationsCancelResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesDevicesOperationsCancelResponse };
