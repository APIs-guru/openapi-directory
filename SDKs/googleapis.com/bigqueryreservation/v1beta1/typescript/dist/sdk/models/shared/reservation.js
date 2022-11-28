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
// Reservation
/**
 * A reservation is a mechanism used to guarantee slots to users.
**/
var Reservation = /** @class */ (function (_super) {
    __extends(Reservation, _super);
    function Reservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrency" }),
        __metadata("design:type", String)
    ], Reservation.prototype, "concurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Reservation.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreIdleSlots" }),
        __metadata("design:type", Boolean)
    ], Reservation.prototype, "ignoreIdleSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" }),
        __metadata("design:type", Boolean)
    ], Reservation.prototype, "multiRegionAuxiliary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Reservation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotCapacity" }),
        __metadata("design:type", String)
    ], Reservation.prototype, "slotCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Reservation.prototype, "updateTime", void 0);
    return Reservation;
}(SpeakeasyBase));
export { Reservation };
// ReservationInput
/**
 * A reservation is a mechanism used to guarantee slots to users.
**/
var ReservationInput = /** @class */ (function (_super) {
    __extends(ReservationInput, _super);
    function ReservationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrency" }),
        __metadata("design:type", String)
    ], ReservationInput.prototype, "concurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreIdleSlots" }),
        __metadata("design:type", Boolean)
    ], ReservationInput.prototype, "ignoreIdleSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiRegionAuxiliary" }),
        __metadata("design:type", Boolean)
    ], ReservationInput.prototype, "multiRegionAuxiliary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReservationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotCapacity" }),
        __metadata("design:type", String)
    ], ReservationInput.prototype, "slotCapacity", void 0);
    return ReservationInput;
}(SpeakeasyBase));
export { ReservationInput };
