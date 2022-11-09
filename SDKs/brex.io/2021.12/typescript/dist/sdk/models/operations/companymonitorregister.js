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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CompanyMonitorRegisterPathParams = /** @class */ (function (_super) {
    __extends(CompanyMonitorRegisterPathParams, _super);
    function CompanyMonitorRegisterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompanyMonitorRegisterPathParams.prototype, "id", void 0);
    return CompanyMonitorRegisterPathParams;
}(SpeakeasyBase));
export { CompanyMonitorRegisterPathParams };
var CompanyMonitorRegisterRequestBody = /** @class */ (function (_super) {
    __extends(CompanyMonitorRegisterRequestBody, _super);
    function CompanyMonitorRegisterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=callbackUrl;" }),
        __metadata("design:type", String)
    ], CompanyMonitorRegisterRequestBody.prototype, "callbackUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=changeType;" }),
        __metadata("design:type", String)
    ], CompanyMonitorRegisterRequestBody.prototype, "changeType", void 0);
    return CompanyMonitorRegisterRequestBody;
}(SpeakeasyBase));
export { CompanyMonitorRegisterRequestBody };
var CompanyMonitorRegisterSecurity = /** @class */ (function (_super) {
    __extends(CompanyMonitorRegisterSecurity, _super);
    function CompanyMonitorRegisterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyMonitorRegisterSecurity.prototype, "userKey", void 0);
    return CompanyMonitorRegisterSecurity;
}(SpeakeasyBase));
export { CompanyMonitorRegisterSecurity };
var CompanyMonitorRegisterRequest = /** @class */ (function (_super) {
    __extends(CompanyMonitorRegisterRequest, _super);
    function CompanyMonitorRegisterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CompanyMonitorRegisterPathParams)
    ], CompanyMonitorRegisterRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CompanyMonitorRegisterRequestBody)
    ], CompanyMonitorRegisterRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CompanyMonitorRegisterSecurity)
    ], CompanyMonitorRegisterRequest.prototype, "security", void 0);
    return CompanyMonitorRegisterRequest;
}(SpeakeasyBase));
export { CompanyMonitorRegisterRequest };
var CompanyMonitorRegisterResponse = /** @class */ (function (_super) {
    __extends(CompanyMonitorRegisterResponse, _super);
    function CompanyMonitorRegisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompanyMonitorRegisterResponse.prototype, "companyMonitorRegister200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CompanyMonitorRegisterResponse.prototype, "companyMonitorRegisterDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CompanyMonitorRegisterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CompanyMonitorRegisterResponse.prototype, "statusCode", void 0);
    return CompanyMonitorRegisterResponse;
}(SpeakeasyBase));
export { CompanyMonitorRegisterResponse };
