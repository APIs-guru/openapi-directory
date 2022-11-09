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
export var NetworkInstanceIpModeEnum;
(function (NetworkInstanceIpModeEnum) {
    NetworkInstanceIpModeEnum["InstanceIpModeUnspecified"] = "INSTANCE_IP_MODE_UNSPECIFIED";
    NetworkInstanceIpModeEnum["External"] = "EXTERNAL";
    NetworkInstanceIpModeEnum["Internal"] = "INTERNAL";
})(NetworkInstanceIpModeEnum || (NetworkInstanceIpModeEnum = {}));
// Network
/**
 * Extra network settings. Only applicable in the App Engine flexible environment.
**/
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=forwardedPorts" }),
        __metadata("design:type", Array)
    ], Network.prototype, "forwardedPorts", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceIpMode" }),
        __metadata("design:type", String)
    ], Network.prototype, "instanceIpMode", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceTag" }),
        __metadata("design:type", String)
    ], Network.prototype, "instanceTag", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Network.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=sessionAffinity" }),
        __metadata("design:type", Boolean)
    ], Network.prototype, "sessionAffinity", void 0);
    __decorate([
        Metadata({ data: "json, name=subnetworkName" }),
        __metadata("design:type", String)
    ], Network.prototype, "subnetworkName", void 0);
    return Network;
}(SpeakeasyBase));
export { Network };
