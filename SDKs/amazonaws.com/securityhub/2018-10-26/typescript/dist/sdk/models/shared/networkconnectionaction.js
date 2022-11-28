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
import { ActionLocalPortDetails } from "./actionlocalportdetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
import { ActionRemotePortDetails } from "./actionremoteportdetails";
// NetworkConnectionAction
/**
 * Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
**/
var NetworkConnectionAction = /** @class */ (function (_super) {
    __extends(NetworkConnectionAction, _super);
    function NetworkConnectionAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Blocked" }),
        __metadata("design:type", Boolean)
    ], NetworkConnectionAction.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectionDirection" }),
        __metadata("design:type", String)
    ], NetworkConnectionAction.prototype, "connectionDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalPortDetails" }),
        __metadata("design:type", ActionLocalPortDetails)
    ], NetworkConnectionAction.prototype, "localPortDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], NetworkConnectionAction.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteIpDetails" }),
        __metadata("design:type", ActionRemoteIpDetails)
    ], NetworkConnectionAction.prototype, "remoteIpDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemotePortDetails" }),
        __metadata("design:type", ActionRemotePortDetails)
    ], NetworkConnectionAction.prototype, "remotePortDetails", void 0);
    return NetworkConnectionAction;
}(SpeakeasyBase));
export { NetworkConnectionAction };
