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
import { CharacterSet } from "./characterset";
import { Timezone } from "./timezone";
import { UpgradeTarget } from "./upgradetarget";
// DbEngineVersion
/**
 *  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
**/
var DbEngineVersion = /** @class */ (function (_super) {
    __extends(DbEngineVersion, _super);
    function DbEngineVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbEngineVersion.prototype, "dbEngineDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbEngineVersion.prototype, "dbEngineVersionDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbEngineVersion.prototype, "dbParameterGroupFamily", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CharacterSet)
    ], DbEngineVersion.prototype, "defaultCharacterSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbEngineVersion.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbEngineVersion.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DbEngineVersion.prototype, "exportableLogTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CharacterSet }),
        __metadata("design:type", Array)
    ], DbEngineVersion.prototype, "supportedCharacterSets", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Timezone }),
        __metadata("design:type", Array)
    ], DbEngineVersion.prototype, "supportedTimezones", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DbEngineVersion.prototype, "supportsLogExportsToCloudwatchLogs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DbEngineVersion.prototype, "supportsReadReplica", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: UpgradeTarget }),
        __metadata("design:type", Array)
    ], DbEngineVersion.prototype, "validUpgradeTarget", void 0);
    return DbEngineVersion;
}(SpeakeasyBase));
export { DbEngineVersion };
