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
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortStateEnum } from "./portstateenum";
// InstancePortState
/**
 * Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
**/
var InstancePortState = /** @class */ (function (_super) {
    __extends(InstancePortState, _super);
    function InstancePortState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidrListAliases" }),
        __metadata("design:type", Array)
    ], InstancePortState.prototype, "cidrListAliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidrs" }),
        __metadata("design:type", Array)
    ], InstancePortState.prototype, "cidrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromPort" }),
        __metadata("design:type", Number)
    ], InstancePortState.prototype, "fromPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Cidrs" }),
        __metadata("design:type", Array)
    ], InstancePortState.prototype, "ipv6Cidrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], InstancePortState.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], InstancePortState.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toPort" }),
        __metadata("design:type", Number)
    ], InstancePortState.prototype, "toPort", void 0);
    return InstancePortState;
}(SpeakeasyBase));
export { InstancePortState };
