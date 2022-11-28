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
import { City } from "./city";
import { Country } from "./country";
import { GeoLocation } from "./geolocation";
import { IpOrganizationDetails } from "./iporganizationdetails";
// ActionRemoteIpDetails
/**
 * For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
**/
var ActionRemoteIpDetails = /** @class */ (function (_super) {
    __extends(ActionRemoteIpDetails, _super);
    function ActionRemoteIpDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", City)
    ], ActionRemoteIpDetails.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", Country)
    ], ActionRemoteIpDetails.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeoLocation" }),
        __metadata("design:type", GeoLocation)
    ], ActionRemoteIpDetails.prototype, "geoLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddressV4" }),
        __metadata("design:type", String)
    ], ActionRemoteIpDetails.prototype, "ipAddressV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organization" }),
        __metadata("design:type", IpOrganizationDetails)
    ], ActionRemoteIpDetails.prototype, "organization", void 0);
    return ActionRemoteIpDetails;
}(SpeakeasyBase));
export { ActionRemoteIpDetails };
