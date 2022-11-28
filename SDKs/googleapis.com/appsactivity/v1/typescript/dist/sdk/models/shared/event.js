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
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Target } from "./target";
import { User } from "./user";
export var EventAdditionalEventTypesEnum;
(function (EventAdditionalEventTypesEnum) {
    EventAdditionalEventTypesEnum["Comment"] = "comment";
    EventAdditionalEventTypesEnum["Create"] = "create";
    EventAdditionalEventTypesEnum["Edit"] = "edit";
    EventAdditionalEventTypesEnum["EmptyTrash"] = "emptyTrash";
    EventAdditionalEventTypesEnum["Move"] = "move";
    EventAdditionalEventTypesEnum["PermissionChange"] = "permissionChange";
    EventAdditionalEventTypesEnum["Rename"] = "rename";
    EventAdditionalEventTypesEnum["Trash"] = "trash";
    EventAdditionalEventTypesEnum["Unknown"] = "unknown";
    EventAdditionalEventTypesEnum["Untrash"] = "untrash";
    EventAdditionalEventTypesEnum["Upload"] = "upload";
})(EventAdditionalEventTypesEnum || (EventAdditionalEventTypesEnum = {}));
export var EventPrimaryEventTypeEnum;
(function (EventPrimaryEventTypeEnum) {
    EventPrimaryEventTypeEnum["Comment"] = "comment";
    EventPrimaryEventTypeEnum["Create"] = "create";
    EventPrimaryEventTypeEnum["Edit"] = "edit";
    EventPrimaryEventTypeEnum["EmptyTrash"] = "emptyTrash";
    EventPrimaryEventTypeEnum["Move"] = "move";
    EventPrimaryEventTypeEnum["PermissionChange"] = "permissionChange";
    EventPrimaryEventTypeEnum["Rename"] = "rename";
    EventPrimaryEventTypeEnum["Trash"] = "trash";
    EventPrimaryEventTypeEnum["Unknown"] = "unknown";
    EventPrimaryEventTypeEnum["Untrash"] = "untrash";
    EventPrimaryEventTypeEnum["Upload"] = "upload";
})(EventPrimaryEventTypeEnum || (EventPrimaryEventTypeEnum = {}));
// Event
/**
 * Represents the changes associated with an action taken by a user.
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalEventTypes" }),
        __metadata("design:type", Array)
    ], Event.prototype, "additionalEventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTimeMillis" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromUserDeletion" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "fromUserDeletion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=move" }),
        __metadata("design:type", Move)
    ], Event.prototype, "move", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionChanges", elemType: PermissionChange }),
        __metadata("design:type", Array)
    ], Event.prototype, "permissionChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryEventType" }),
        __metadata("design:type", String)
    ], Event.prototype, "primaryEventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rename" }),
        __metadata("design:type", Rename)
    ], Event.prototype, "rename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", Target)
    ], Event.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Event.prototype, "user", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
