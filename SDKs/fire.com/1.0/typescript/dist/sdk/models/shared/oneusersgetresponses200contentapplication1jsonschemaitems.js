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
export var OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum;
(function (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum) {
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum["Android"] = "Android";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum["Ios"] = "IOS";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum["Other"] = "OTHER";
})(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum || (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum = {}));
export var OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum;
(function (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum) {
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum["IPhone"] = "iPhone";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum["Android"] = "Android";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum["Other"] = "Other";
})(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum || (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum = {}));
export var OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum;
(function (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum) {
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum["Live"] = "LIVE";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum["Closed"] = "CLOSED";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum["Locked"] = "LOCKED";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum["SmsSent"] = "SMS_SENT";
})(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum || (OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum = {}));
var OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication = /** @class */ (function (_super) {
    __extends(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication, _super);
    function OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OS" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessUserId" }),
        __metadata("design:type", Number)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "businessUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientID" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceName" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "deviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceOSVersion" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "deviceOsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApplicationId" }),
        __metadata("design:type", Number)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "mobileApplicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication.prototype, "status", void 0);
    return OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication;
}(SpeakeasyBase));
export { OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication };
export var OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum;
(function (OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum) {
    OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum["Admin"] = "ADMIN";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum["FullUser"] = "FULL_USER";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum["ReadOnly"] = "READ_ONLY";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum["CardOnly"] = "CARD_ONLY";
})(OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum || (OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum = {}));
export var OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum;
(function (OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum) {
    OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum["Live"] = "LIVE";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum["Closed"] = "CLOSED";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum["Frozen"] = "FROZEN";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum["InviteSent"] = "INVITE_SENT";
    OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum["SmsCodeSent"] = "SMS_CODE_SENT";
})(OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum || (OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum = {}));
var OneusersGetResponses200ContentApplication1jsonSchemaItems = /** @class */ (function (_super) {
    __extends(OneusersGetResponses200ContentApplication1jsonSchemaItems, _super);
    function OneusersGetResponses200ContentApplication1jsonSchemaItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastlogin" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "lastlogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileApplicationDetails" }),
        __metadata("design:type", OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "mobileApplicationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileNumber" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "mobileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userCvl" }),
        __metadata("design:type", String)
    ], OneusersGetResponses200ContentApplication1jsonSchemaItems.prototype, "userCvl", void 0);
    return OneusersGetResponses200ContentApplication1jsonSchemaItems;
}(SpeakeasyBase));
export { OneusersGetResponses200ContentApplication1jsonSchemaItems };
