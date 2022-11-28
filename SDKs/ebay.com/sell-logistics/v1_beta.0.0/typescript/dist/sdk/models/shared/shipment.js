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
import { ShipmentCancellation } from "./shipmentcancellation";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { PurchasedRate } from "./purchasedrate";
import { Contact } from "./contact";
// Shipment
/**
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
**/
var Shipment = /** @class */ (function (_super) {
    __extends(Shipment, _super);
    function Shipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellation" }),
        __metadata("design:type", ShipmentCancellation)
    ], Shipment.prototype, "cancellation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelCustomMessage" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "labelCustomMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelDownloadUrl" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "labelDownloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelSize" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "labelSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orders", elemType: Order }),
        __metadata("design:type", Array)
    ], Shipment.prototype, "orders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageSpecification" }),
        __metadata("design:type", PackageSpecification)
    ], Shipment.prototype, "packageSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", PurchasedRate)
    ], Shipment.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnTo" }),
        __metadata("design:type", Contact)
    ], Shipment.prototype, "returnTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipFrom" }),
        __metadata("design:type", Contact)
    ], Shipment.prototype, "shipFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipTo" }),
        __metadata("design:type", Contact)
    ], Shipment.prototype, "shipTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentId" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "shipmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentTrackingNumber" }),
        __metadata("design:type", String)
    ], Shipment.prototype, "shipmentTrackingNumber", void 0);
    return Shipment;
}(SpeakeasyBase));
export { Shipment };
