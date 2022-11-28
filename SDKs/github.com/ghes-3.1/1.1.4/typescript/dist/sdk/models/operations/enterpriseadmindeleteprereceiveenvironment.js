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
var EnterpriseAdminDeletePreReceiveEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeletePreReceiveEnvironmentPathParams, _super);
    function EnterpriseAdminDeletePreReceiveEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminDeletePreReceiveEnvironmentPathParams.prototype, "preReceiveEnvironmentId", void 0);
    return EnterpriseAdminDeletePreReceiveEnvironmentPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminDeletePreReceiveEnvironmentPathParams };
var EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors, _super);
    function EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors.prototype, "resource", void 0);
    return EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors;
}(SpeakeasyBase));
export { EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors };
var EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson, _super);
    function EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson.prototype, "message", void 0);
    return EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson };
var EnterpriseAdminDeletePreReceiveEnvironmentRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeletePreReceiveEnvironmentRequest, _super);
    function EnterpriseAdminDeletePreReceiveEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminDeletePreReceiveEnvironmentPathParams)
    ], EnterpriseAdminDeletePreReceiveEnvironmentRequest.prototype, "pathParams", void 0);
    return EnterpriseAdminDeletePreReceiveEnvironmentRequest;
}(SpeakeasyBase));
export { EnterpriseAdminDeletePreReceiveEnvironmentRequest };
var EnterpriseAdminDeletePreReceiveEnvironmentResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeletePreReceiveEnvironmentResponse, _super);
    function EnterpriseAdminDeletePreReceiveEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminDeletePreReceiveEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminDeletePreReceiveEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJson)
    ], EnterpriseAdminDeletePreReceiveEnvironmentResponse.prototype, "enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject", void 0);
    return EnterpriseAdminDeletePreReceiveEnvironmentResponse;
}(SpeakeasyBase));
export { EnterpriseAdminDeletePreReceiveEnvironmentResponse };
