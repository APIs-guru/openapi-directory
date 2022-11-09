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
var HealthCheckSecurity = /** @class */ (function (_super) {
    __extends(HealthCheckSecurity, _super);
    function HealthCheckSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], HealthCheckSecurity.prototype, "userKey", void 0);
    return HealthCheckSecurity;
}(SpeakeasyBase));
export { HealthCheckSecurity };
var HealthCheckRequest = /** @class */ (function (_super) {
    __extends(HealthCheckRequest, _super);
    function HealthCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", HealthCheckSecurity)
    ], HealthCheckRequest.prototype, "security", void 0);
    return HealthCheckRequest;
}(SpeakeasyBase));
export { HealthCheckRequest };
var HealthCheckResponse = /** @class */ (function (_super) {
    __extends(HealthCheckResponse, _super);
    function HealthCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], HealthCheckResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], HealthCheckResponse.prototype, "healthCheck200ApplicationJsonAnies", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], HealthCheckResponse.prototype, "healthCheckDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], HealthCheckResponse.prototype, "statusCode", void 0);
    return HealthCheckResponse;
}(SpeakeasyBase));
export { HealthCheckResponse };
