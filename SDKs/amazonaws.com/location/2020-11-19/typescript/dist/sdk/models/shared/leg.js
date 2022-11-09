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
import * as shared from "../shared";
import { LegGeometry } from "./leggeometry";
// Leg
/**
 * <p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#snap-to-nearby-road">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>
**/
var Leg = /** @class */ (function (_super) {
    __extends(Leg, _super);
    function Leg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Distance" }),
        __metadata("design:type", Number)
    ], Leg.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "json, name=DurationSeconds" }),
        __metadata("design:type", Number)
    ], Leg.prototype, "durationSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=EndPosition" }),
        __metadata("design:type", Array)
    ], Leg.prototype, "endPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=Geometry" }),
        __metadata("design:type", LegGeometry)
    ], Leg.prototype, "geometry", void 0);
    __decorate([
        Metadata({ data: "json, name=StartPosition" }),
        __metadata("design:type", Array)
    ], Leg.prototype, "startPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=Steps", elemType: shared.Step }),
        __metadata("design:type", Array)
    ], Leg.prototype, "steps", void 0);
    return Leg;
}(SpeakeasyBase));
export { Leg };
