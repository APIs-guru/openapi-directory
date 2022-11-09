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
// HealthCheck
/**
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
**/
var HealthCheck = /** @class */ (function (_super) {
    __extends(HealthCheck, _super);
    function HealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=checkInterval" }),
        __metadata("design:type", String)
    ], HealthCheck.prototype, "checkInterval", void 0);
    __decorate([
        Metadata({ data: "json, name=disableHealthCheck" }),
        __metadata("design:type", Boolean)
    ], HealthCheck.prototype, "disableHealthCheck", void 0);
    __decorate([
        Metadata({ data: "json, name=healthyThreshold" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "healthyThreshold", void 0);
    __decorate([
        Metadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], HealthCheck.prototype, "host", void 0);
    __decorate([
        Metadata({ data: "json, name=restartThreshold" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "restartThreshold", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], HealthCheck.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=unhealthyThreshold" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "unhealthyThreshold", void 0);
    return HealthCheck;
}(SpeakeasyBase));
export { HealthCheck };
