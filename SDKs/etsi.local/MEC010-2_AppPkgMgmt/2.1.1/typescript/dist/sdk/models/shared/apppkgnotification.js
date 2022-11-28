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
import { AppPkgNotificationLinks } from "./apppkgnotificationlinks";
import { AppPkgNotificationTypeEnum } from "./apppkgnotificationtypeenum";
import { TimeStamp } from "./timestamp";
export var AppPkgNotificationOperationalStateEnum;
(function (AppPkgNotificationOperationalStateEnum) {
    AppPkgNotificationOperationalStateEnum["Disabled"] = "DISABLED";
    AppPkgNotificationOperationalStateEnum["Enabled"] = "ENABLED";
})(AppPkgNotificationOperationalStateEnum || (AppPkgNotificationOperationalStateEnum = {}));
// AppPkgNotification
/**
 * 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
**/
var AppPkgNotification = /** @class */ (function (_super) {
    __extends(AppPkgNotification, _super);
    function AppPkgNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", AppPkgNotificationLinks)
    ], AppPkgNotification.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appDId" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "appDId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPkgId" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "appPkgId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationType" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationalState" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "operationalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], AppPkgNotification.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeStamp" }),
        __metadata("design:type", TimeStamp)
    ], AppPkgNotification.prototype, "timeStamp", void 0);
    return AppPkgNotification;
}(SpeakeasyBase));
export { AppPkgNotification };
