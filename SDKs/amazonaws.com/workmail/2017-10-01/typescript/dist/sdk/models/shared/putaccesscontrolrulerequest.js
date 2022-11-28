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
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
var PutAccessControlRuleRequest = /** @class */ (function (_super) {
    __extends(PutAccessControlRuleRequest, _super);
    function PutAccessControlRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Actions" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], PutAccessControlRuleRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Effect" }),
        __metadata("design:type", String)
    ], PutAccessControlRuleRequest.prototype, "effect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpRanges" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "ipRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PutAccessControlRuleRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotActions" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "notActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotIpRanges" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "notIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotUserIds" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "notUserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationId" }),
        __metadata("design:type", String)
    ], PutAccessControlRuleRequest.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserIds" }),
        __metadata("design:type", Array)
    ], PutAccessControlRuleRequest.prototype, "userIds", void 0);
    return PutAccessControlRuleRequest;
}(SpeakeasyBase));
export { PutAccessControlRuleRequest };
