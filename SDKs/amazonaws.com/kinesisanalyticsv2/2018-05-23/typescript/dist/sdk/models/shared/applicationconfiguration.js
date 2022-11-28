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
import { ApplicationCodeConfiguration } from "./applicationcodeconfiguration";
import { ApplicationSnapshotConfiguration } from "./applicationsnapshotconfiguration";
import { EnvironmentProperties } from "./environmentproperties";
import { FlinkApplicationConfiguration } from "./flinkapplicationconfiguration";
import { SqlApplicationConfiguration } from "./sqlapplicationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
import { ZeppelinApplicationConfiguration } from "./zeppelinapplicationconfiguration";
// ApplicationConfiguration
/**
 * Specifies the creation parameters for a Kinesis Data Analytics application.
**/
var ApplicationConfiguration = /** @class */ (function (_super) {
    __extends(ApplicationConfiguration, _super);
    function ApplicationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationCodeConfiguration" }),
        __metadata("design:type", ApplicationCodeConfiguration)
    ], ApplicationConfiguration.prototype, "applicationCodeConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationSnapshotConfiguration" }),
        __metadata("design:type", ApplicationSnapshotConfiguration)
    ], ApplicationConfiguration.prototype, "applicationSnapshotConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentProperties" }),
        __metadata("design:type", EnvironmentProperties)
    ], ApplicationConfiguration.prototype, "environmentProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlinkApplicationConfiguration" }),
        __metadata("design:type", FlinkApplicationConfiguration)
    ], ApplicationConfiguration.prototype, "flinkApplicationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SqlApplicationConfiguration" }),
        __metadata("design:type", SqlApplicationConfiguration)
    ], ApplicationConfiguration.prototype, "sqlApplicationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfigurations", elemType: VpcConfiguration }),
        __metadata("design:type", Array)
    ], ApplicationConfiguration.prototype, "vpcConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZeppelinApplicationConfiguration" }),
        __metadata("design:type", ZeppelinApplicationConfiguration)
    ], ApplicationConfiguration.prototype, "zeppelinApplicationConfiguration", void 0);
    return ApplicationConfiguration;
}(SpeakeasyBase));
export { ApplicationConfiguration };
