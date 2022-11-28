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
import { DnsRuleDescriptor } from "./dnsruledescriptor";
import { AppExternalCpd } from "./appexternalcpd";
import { FeatureDependency } from "./featuredependency";
import { LatencyDescriptor } from "./latencydescriptor";
import { ServiceDependency } from "./servicedependency";
import { ServiceDescriptor } from "./servicedescriptor";
import { TrafficRuleDescriptor } from "./trafficruledescriptor";
import { TransportDependency } from "./transportdependency";
var AppD = /** @class */ (function (_super) {
    __extends(AppD, _super);
    function AppD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DnsRuleDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appDnsRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: AppExternalCpd }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appExtCpd", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FeatureDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appFeatureOptional", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: FeatureDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appFeatureRequired", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appInfoName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LatencyDescriptor)
    ], AppD.prototype, "appLatency", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ServiceDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceOptional", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ServiceDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceProduced", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ServiceDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceRequired", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "appSoftVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: TrafficRuleDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appTrafficRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "changeAppInstanceStateOpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AppD.prototype, "mecVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "swImageDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "terminateAppInstanceOpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: TransportDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "transportDependencies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppD.prototype, "virtualComputeDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AppD.prototype, "virtualStorageDescriptor", void 0);
    return AppD;
}(SpeakeasyBase));
export { AppD };
