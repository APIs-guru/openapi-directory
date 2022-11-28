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
import { AwsApiCallAction } from "./awsapicallaction";
import { DnsRequestAction } from "./dnsrequestaction";
import { NetworkConnectionAction } from "./networkconnectionaction";
import { PortProbeAction } from "./portprobeaction";
// Action
/**
 * <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionType" }),
        __metadata("design:type", String)
    ], Action.prototype, "actionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsApiCallAction" }),
        __metadata("design:type", AwsApiCallAction)
    ], Action.prototype, "awsApiCallAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsRequestAction" }),
        __metadata("design:type", DnsRequestAction)
    ], Action.prototype, "dnsRequestAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkConnectionAction" }),
        __metadata("design:type", NetworkConnectionAction)
    ], Action.prototype, "networkConnectionAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PortProbeAction" }),
        __metadata("design:type", PortProbeAction)
    ], Action.prototype, "portProbeAction", void 0);
    return Action;
}(SpeakeasyBase));
export { Action };
