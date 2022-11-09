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
import { ApplicationCodeConfigurationDescription } from "./applicationcodeconfigurationdescription";
import { ApplicationSnapshotConfigurationDescription } from "./applicationsnapshotconfigurationdescription";
import { EnvironmentPropertyDescriptions } from "./environmentpropertydescriptions";
import { FlinkApplicationConfigurationDescription } from "./flinkapplicationconfigurationdescription";
import { RunConfigurationDescription } from "./runconfigurationdescription";
import { SqlApplicationConfigurationDescription } from "./sqlapplicationconfigurationdescription";
import { ZeppelinApplicationConfigurationDescription } from "./zeppelinapplicationconfigurationdescription";
// ApplicationConfigurationDescription
/**
 * Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
**/
var ApplicationConfigurationDescription = /** @class */ (function (_super) {
    __extends(ApplicationConfigurationDescription, _super);
    function ApplicationConfigurationDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ApplicationCodeConfigurationDescription" }),
        __metadata("design:type", ApplicationCodeConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "applicationCodeConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=ApplicationSnapshotConfigurationDescription" }),
        __metadata("design:type", ApplicationSnapshotConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "applicationSnapshotConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=EnvironmentPropertyDescriptions" }),
        __metadata("design:type", EnvironmentPropertyDescriptions)
    ], ApplicationConfigurationDescription.prototype, "environmentPropertyDescriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=FlinkApplicationConfigurationDescription" }),
        __metadata("design:type", FlinkApplicationConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "flinkApplicationConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=RunConfigurationDescription" }),
        __metadata("design:type", RunConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "runConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=SqlApplicationConfigurationDescription" }),
        __metadata("design:type", SqlApplicationConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "sqlApplicationConfigurationDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfigurationDescriptions", elemType: shared.VpcConfigurationDescription }),
        __metadata("design:type", Array)
    ], ApplicationConfigurationDescription.prototype, "vpcConfigurationDescriptions", void 0);
    __decorate([
        Metadata({ data: "json, name=ZeppelinApplicationConfigurationDescription" }),
        __metadata("design:type", ZeppelinApplicationConfigurationDescription)
    ], ApplicationConfigurationDescription.prototype, "zeppelinApplicationConfigurationDescription", void 0);
    return ApplicationConfigurationDescription;
}(SpeakeasyBase));
export { ApplicationConfigurationDescription };
