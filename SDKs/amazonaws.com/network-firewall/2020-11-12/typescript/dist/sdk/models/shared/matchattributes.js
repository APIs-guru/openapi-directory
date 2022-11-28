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
import { PortRange } from "./portrange";
import { Address } from "./address";
import { TcpFlagField } from "./tcpflagfield";
// MatchAttributes
/**
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
**/
var MatchAttributes = /** @class */ (function (_super) {
    __extends(MatchAttributes, _super);
    function MatchAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationPorts", elemType: PortRange }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "destinationPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destinations", elemType: Address }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocols" }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourcePorts", elemType: PortRange }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "sourcePorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sources", elemType: Address }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TCPFlags", elemType: TcpFlagField }),
        __metadata("design:type", Array)
    ], MatchAttributes.prototype, "tcpFlags", void 0);
    return MatchAttributes;
}(SpeakeasyBase));
export { MatchAttributes };
