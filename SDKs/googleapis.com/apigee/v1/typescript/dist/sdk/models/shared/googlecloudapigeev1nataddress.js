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
export var GoogleCloudApigeeV1NatAddressStateEnum;
(function (GoogleCloudApigeeV1NatAddressStateEnum) {
    GoogleCloudApigeeV1NatAddressStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudApigeeV1NatAddressStateEnum["Creating"] = "CREATING";
    GoogleCloudApigeeV1NatAddressStateEnum["Reserved"] = "RESERVED";
    GoogleCloudApigeeV1NatAddressStateEnum["Active"] = "ACTIVE";
    GoogleCloudApigeeV1NatAddressStateEnum["Deleting"] = "DELETING";
})(GoogleCloudApigeeV1NatAddressStateEnum || (GoogleCloudApigeeV1NatAddressStateEnum = {}));
// GoogleCloudApigeeV1NatAddressInput
/**
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
var GoogleCloudApigeeV1NatAddressInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1NatAddressInput, _super);
    function GoogleCloudApigeeV1NatAddressInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1NatAddressInput.prototype, "name", void 0);
    return GoogleCloudApigeeV1NatAddressInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1NatAddressInput };
// GoogleCloudApigeeV1NatAddress
/**
 * Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
**/
var GoogleCloudApigeeV1NatAddress = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1NatAddress, _super);
    function GoogleCloudApigeeV1NatAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1NatAddress.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1NatAddress.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1NatAddress.prototype, "state", void 0);
    return GoogleCloudApigeeV1NatAddress;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1NatAddress };
