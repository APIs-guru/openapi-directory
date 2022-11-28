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
import { Activity } from "./activity";
// UserActivitySession
/**
 * This represents a user session performed on a specific device at a certain time over a period of time.
**/
var UserActivitySession = /** @class */ (function (_super) {
    __extends(UserActivitySession, _super);
    function UserActivitySession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activities", elemType: Activity }),
        __metadata("design:type", Array)
    ], UserActivitySession.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", String)
    ], UserActivitySession.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceCategory" }),
        __metadata("design:type", String)
    ], UserActivitySession.prototype, "deviceCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], UserActivitySession.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionDate" }),
        __metadata("design:type", String)
    ], UserActivitySession.prototype, "sessionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], UserActivitySession.prototype, "sessionId", void 0);
    return UserActivitySession;
}(SpeakeasyBase));
export { UserActivitySession };
