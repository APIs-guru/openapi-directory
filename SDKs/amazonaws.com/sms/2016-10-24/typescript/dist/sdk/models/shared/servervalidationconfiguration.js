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
import { Server } from "./server";
import { ServerValidationStrategyEnum } from "./servervalidationstrategyenum";
import { UserDataValidationParameters } from "./userdatavalidationparameters";
// ServerValidationConfiguration
/**
 * Configuration for validating an instance.
**/
var ServerValidationConfiguration = /** @class */ (function (_super) {
    __extends(ServerValidationConfiguration, _super);
    function ServerValidationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServerValidationConfiguration.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=server" }),
        __metadata("design:type", Server)
    ], ServerValidationConfiguration.prototype, "server", void 0);
    __decorate([
        Metadata({ data: "json, name=serverValidationStrategy" }),
        __metadata("design:type", String)
    ], ServerValidationConfiguration.prototype, "serverValidationStrategy", void 0);
    __decorate([
        Metadata({ data: "json, name=userDataValidationParameters" }),
        __metadata("design:type", UserDataValidationParameters)
    ], ServerValidationConfiguration.prototype, "userDataValidationParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=validationId" }),
        __metadata("design:type", String)
    ], ServerValidationConfiguration.prototype, "validationId", void 0);
    return ServerValidationConfiguration;
}(SpeakeasyBase));
export { ServerValidationConfiguration };
