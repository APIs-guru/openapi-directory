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
import { LogicalNetworkInterface } from "./logicalnetworkinterface";
// GoogleCloudBaremetalsolutionV2LogicalInterface
/**
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
**/
var GoogleCloudBaremetalsolutionV2LogicalInterface = /** @class */ (function (_super) {
    __extends(GoogleCloudBaremetalsolutionV2LogicalInterface, _super);
    function GoogleCloudBaremetalsolutionV2LogicalInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaceIndex" }),
        __metadata("design:type", Number)
    ], GoogleCloudBaremetalsolutionV2LogicalInterface.prototype, "interfaceIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalNetworkInterfaces", elemType: LogicalNetworkInterface }),
        __metadata("design:type", Array)
    ], GoogleCloudBaremetalsolutionV2LogicalInterface.prototype, "logicalNetworkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudBaremetalsolutionV2LogicalInterface.prototype, "name", void 0);
    return GoogleCloudBaremetalsolutionV2LogicalInterface;
}(SpeakeasyBase));
export { GoogleCloudBaremetalsolutionV2LogicalInterface };
