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
import { AwsApiCallActionDomainDetails } from "./awsapicallactiondomaindetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";
// AwsApiCallAction
/**
 * Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
**/
var AwsApiCallAction = /** @class */ (function (_super) {
    __extends(AwsApiCallAction, _super);
    function AwsApiCallAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AffectedResources" }),
        __metadata("design:type", Map)
    ], AwsApiCallAction.prototype, "affectedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Api" }),
        __metadata("design:type", String)
    ], AwsApiCallAction.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CallerType" }),
        __metadata("design:type", String)
    ], AwsApiCallAction.prototype, "callerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainDetails" }),
        __metadata("design:type", AwsApiCallActionDomainDetails)
    ], AwsApiCallAction.prototype, "domainDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstSeen" }),
        __metadata("design:type", String)
    ], AwsApiCallAction.prototype, "firstSeen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSeen" }),
        __metadata("design:type", String)
    ], AwsApiCallAction.prototype, "lastSeen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteIpDetails" }),
        __metadata("design:type", ActionRemoteIpDetails)
    ], AwsApiCallAction.prototype, "remoteIpDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], AwsApiCallAction.prototype, "serviceName", void 0);
    return AwsApiCallAction;
}(SpeakeasyBase));
export { AwsApiCallAction };
