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
// SyslogEvent
/**
 * Syslog event information
**/
var SyslogEvent = /** @class */ (function (_super) {
    __extends(SyslogEvent, _super);
    function SyslogEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute1" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "attribute1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute2" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "attribute2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute3" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "attribute3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authParentSource" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "authParentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authParentTarget" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "authParentTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId1" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "objectId1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId2" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "objectId2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName1" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "objectName1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName2" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "objectName2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType1" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "objectType1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType2" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "objectType2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationId" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "operationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationName" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "operationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], SyslogEvent.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userClient" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "userClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], SyslogEvent.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userIp" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], SyslogEvent.prototype, "userName", void 0);
    return SyslogEvent;
}(SpeakeasyBase));
export { SyslogEvent };
