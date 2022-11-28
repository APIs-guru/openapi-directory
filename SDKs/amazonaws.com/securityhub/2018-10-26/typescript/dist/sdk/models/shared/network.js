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
import { NetworkDirectionEnum } from "./networkdirectionenum";
import { PortRange } from "./portrange";
// Network
/**
 * The details of network-related information about a finding.
**/
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationDomain" }),
        __metadata("design:type", String)
    ], Network.prototype, "destinationDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationIpV4" }),
        __metadata("design:type", String)
    ], Network.prototype, "destinationIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationIpV6" }),
        __metadata("design:type", String)
    ], Network.prototype, "destinationIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationPort" }),
        __metadata("design:type", Number)
    ], Network.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Direction" }),
        __metadata("design:type", String)
    ], Network.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpenPortRange" }),
        __metadata("design:type", PortRange)
    ], Network.prototype, "openPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], Network.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDomain" }),
        __metadata("design:type", String)
    ], Network.prototype, "sourceDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceIpV4" }),
        __metadata("design:type", String)
    ], Network.prototype, "sourceIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceIpV6" }),
        __metadata("design:type", String)
    ], Network.prototype, "sourceIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceMac" }),
        __metadata("design:type", String)
    ], Network.prototype, "sourceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourcePort" }),
        __metadata("design:type", Number)
    ], Network.prototype, "sourcePort", void 0);
    return Network;
}(SpeakeasyBase));
export { Network };
