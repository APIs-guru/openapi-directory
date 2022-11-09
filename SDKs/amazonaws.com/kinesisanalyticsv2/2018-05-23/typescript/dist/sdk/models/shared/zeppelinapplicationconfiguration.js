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
import { CatalogConfiguration } from "./catalogconfiguration";
import { DeployAsApplicationConfiguration } from "./deployasapplicationconfiguration";
import { ZeppelinMonitoringConfiguration } from "./zeppelinmonitoringconfiguration";
// ZeppelinApplicationConfiguration
/**
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
var ZeppelinApplicationConfiguration = /** @class */ (function (_super) {
    __extends(ZeppelinApplicationConfiguration, _super);
    function ZeppelinApplicationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CatalogConfiguration" }),
        __metadata("design:type", CatalogConfiguration)
    ], ZeppelinApplicationConfiguration.prototype, "catalogConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=CustomArtifactsConfiguration", elemType: shared.CustomArtifactConfiguration }),
        __metadata("design:type", Array)
    ], ZeppelinApplicationConfiguration.prototype, "customArtifactsConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=DeployAsApplicationConfiguration" }),
        __metadata("design:type", DeployAsApplicationConfiguration)
    ], ZeppelinApplicationConfiguration.prototype, "deployAsApplicationConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=MonitoringConfiguration" }),
        __metadata("design:type", ZeppelinMonitoringConfiguration)
    ], ZeppelinApplicationConfiguration.prototype, "monitoringConfiguration", void 0);
    return ZeppelinApplicationConfiguration;
}(SpeakeasyBase));
export { ZeppelinApplicationConfiguration };
