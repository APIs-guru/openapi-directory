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
import { GroupInfo } from "./groupinfo";
import { PendingGroupData } from "./pendinggroupdata";
import { PendingUserData } from "./pendinguserdata";
import { UserInfo } from "./userinfo";
export var PendingAssignmentDataStateEnum;
(function (PendingAssignmentDataStateEnum) {
    PendingAssignmentDataStateEnum["Accepted"] = "ACCEPTED";
    PendingAssignmentDataStateEnum["Denied"] = "DENIED";
    PendingAssignmentDataStateEnum["Waiting"] = "WAITING";
})(PendingAssignmentDataStateEnum || (PendingAssignmentDataStateEnum = {}));
// PendingAssignmentData
/**
 * Pending assignment information
**/
var PendingAssignmentData = /** @class */ (function (_super) {
    __extends(PendingAssignmentData, _super);
    function PendingAssignmentData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupId" }),
        __metadata("design:type", Number)
    ], PendingAssignmentData.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupInfo" }),
        __metadata("design:type", GroupInfo)
    ], PendingAssignmentData.prototype, "groupInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingGroupData" }),
        __metadata("design:type", PendingGroupData)
    ], PendingAssignmentData.prototype, "pendingGroupData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingUserData" }),
        __metadata("design:type", PendingUserData)
    ], PendingAssignmentData.prototype, "pendingUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomId" }),
        __metadata("design:type", Number)
    ], PendingAssignmentData.prototype, "roomId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roomName" }),
        __metadata("design:type", String)
    ], PendingAssignmentData.prototype, "roomName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PendingAssignmentData.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], PendingAssignmentData.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", UserInfo)
    ], PendingAssignmentData.prototype, "userInfo", void 0);
    return PendingAssignmentData;
}(SpeakeasyBase));
export { PendingAssignmentData };
