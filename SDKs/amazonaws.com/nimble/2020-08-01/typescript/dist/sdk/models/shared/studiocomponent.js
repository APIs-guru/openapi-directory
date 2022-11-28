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
import { StudioComponentConfiguration } from "./studiocomponentconfiguration";
import { StudioComponentInitializationScript } from "./studiocomponentinitializationscript";
import { ScriptParameterKeyValue } from "./scriptparameterkeyvalue";
import { StudioComponentStateEnum } from "./studiocomponentstateenum";
import { StudioComponentStatusCodeEnum } from "./studiocomponentstatuscodeenum";
import { StudioComponentSubtypeEnum } from "./studiocomponentsubtypeenum";
import { StudioComponentTypeEnum } from "./studiocomponenttypeenum";
// StudioComponent
/**
 * A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
**/
var StudioComponent = /** @class */ (function (_super) {
    __extends(StudioComponent, _super);
    function StudioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", StudioComponentConfiguration)
    ], StudioComponent.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], StudioComponent.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], StudioComponent.prototype, "ec2SecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationScripts", elemType: StudioComponentInitializationScript }),
        __metadata("design:type", Array)
    ], StudioComponent.prototype, "initializationScripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptParameters", elemType: ScriptParameterKeyValue }),
        __metadata("design:type", Array)
    ], StudioComponent.prototype, "scriptParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioComponentId" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "studioComponentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StudioComponent.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], StudioComponent.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], StudioComponent.prototype, "updatedBy", void 0);
    return StudioComponent;
}(SpeakeasyBase));
export { StudioComponent };
