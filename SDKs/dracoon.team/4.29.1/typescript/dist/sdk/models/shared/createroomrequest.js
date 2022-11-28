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
export var CreateRoomRequestNewGroupMemberAcceptanceEnum;
(function (CreateRoomRequestNewGroupMemberAcceptanceEnum) {
    CreateRoomRequestNewGroupMemberAcceptanceEnum["Autoallow"] = "autoallow";
    CreateRoomRequestNewGroupMemberAcceptanceEnum["Pending"] = "pending";
})(CreateRoomRequestNewGroupMemberAcceptanceEnum || (CreateRoomRequestNewGroupMemberAcceptanceEnum = {}));
// CreateRoomRequest
/**
 * Request model for creating a room
**/
var CreateRoomRequest = /** @class */ (function (_super) {
    __extends(CreateRoomRequest, _super);
    function CreateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminGroupIds" }),
        __metadata("design:type", Array)
    ], CreateRoomRequest.prototype, "adminGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminIds" }),
        __metadata("design:type", Array)
    ], CreateRoomRequest.prototype, "adminIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", Number)
    ], CreateRoomRequest.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasActivitiesLog" }),
        __metadata("design:type", Boolean)
    ], CreateRoomRequest.prototype, "hasActivitiesLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasRecycleBin" }),
        __metadata("design:type", Boolean)
    ], CreateRoomRequest.prototype, "hasRecycleBin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritPermissions" }),
        __metadata("design:type", Boolean)
    ], CreateRoomRequest.prototype, "inheritPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRoomRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newGroupMemberAcceptance" }),
        __metadata("design:type", String)
    ], CreateRoomRequest.prototype, "newGroupMemberAcceptance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateRoomRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentId" }),
        __metadata("design:type", Number)
    ], CreateRoomRequest.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", Number)
    ], CreateRoomRequest.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" }),
        __metadata("design:type", Number)
    ], CreateRoomRequest.prototype, "recycleBinRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampCreation" }),
        __metadata("design:type", Date)
    ], CreateRoomRequest.prototype, "timestampCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampModification" }),
        __metadata("design:type", Date)
    ], CreateRoomRequest.prototype, "timestampModification", void 0);
    return CreateRoomRequest;
}(SpeakeasyBase));
export { CreateRoomRequest };
