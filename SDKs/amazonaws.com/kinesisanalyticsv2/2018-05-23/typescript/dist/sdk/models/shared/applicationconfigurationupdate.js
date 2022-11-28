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
import { ApplicationCodeConfigurationUpdate } from "./applicationcodeconfigurationupdate";
import { ApplicationSnapshotConfigurationUpdate } from "./applicationsnapshotconfigurationupdate";
import { EnvironmentPropertyUpdates } from "./environmentpropertyupdates";
import { FlinkApplicationConfigurationUpdate } from "./flinkapplicationconfigurationupdate";
import { SqlApplicationConfigurationUpdate } from "./sqlapplicationconfigurationupdate";
import { VpcConfigurationUpdate } from "./vpcconfigurationupdate";
import { ZeppelinApplicationConfigurationUpdate } from "./zeppelinapplicationconfigurationupdate";
// ApplicationConfigurationUpdate
/**
 * Describes updates to an application's configuration.
**/
var ApplicationConfigurationUpdate = /** @class */ (function (_super) {
    __extends(ApplicationConfigurationUpdate, _super);
    function ApplicationConfigurationUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationCodeConfigurationUpdate" }),
        __metadata("design:type", ApplicationCodeConfigurationUpdate)
    ], ApplicationConfigurationUpdate.prototype, "applicationCodeConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationSnapshotConfigurationUpdate" }),
        __metadata("design:type", ApplicationSnapshotConfigurationUpdate)
    ], ApplicationConfigurationUpdate.prototype, "applicationSnapshotConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnvironmentPropertyUpdates" }),
        __metadata("design:type", EnvironmentPropertyUpdates)
    ], ApplicationConfigurationUpdate.prototype, "environmentPropertyUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FlinkApplicationConfigurationUpdate" }),
        __metadata("design:type", FlinkApplicationConfigurationUpdate)
    ], ApplicationConfigurationUpdate.prototype, "flinkApplicationConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SqlApplicationConfigurationUpdate" }),
        __metadata("design:type", SqlApplicationConfigurationUpdate)
    ], ApplicationConfigurationUpdate.prototype, "sqlApplicationConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfigurationUpdates", elemType: VpcConfigurationUpdate }),
        __metadata("design:type", Array)
    ], ApplicationConfigurationUpdate.prototype, "vpcConfigurationUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZeppelinApplicationConfigurationUpdate" }),
        __metadata("design:type", ZeppelinApplicationConfigurationUpdate)
    ], ApplicationConfigurationUpdate.prototype, "zeppelinApplicationConfigurationUpdate", void 0);
    return ApplicationConfigurationUpdate;
}(SpeakeasyBase));
export { ApplicationConfigurationUpdate };
