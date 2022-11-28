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
// ServiceSetting
/**
 * <p>The service setting data structure.</p> <p> <code>ServiceSetting</code> is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature.</p> <p>Services map a <code>SettingId</code> object to a setting value. Amazon Web Services services teams define the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>, but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code> permission for the setting. Use the <a>UpdateServiceSetting</a> API operation to change the default setting. Or, use the <a>ResetServiceSetting</a> to change the value back to the original value defined by the Amazon Web Services service team.</p>
**/
var ServiceSetting = /** @class */ (function (_super) {
    __extends(ServiceSetting, _super);
    function ServiceSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ARN" }),
        __metadata("design:type", String)
    ], ServiceSetting.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", Date)
    ], ServiceSetting.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedUser" }),
        __metadata("design:type", String)
    ], ServiceSetting.prototype, "lastModifiedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SettingId" }),
        __metadata("design:type", String)
    ], ServiceSetting.prototype, "settingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SettingValue" }),
        __metadata("design:type", String)
    ], ServiceSetting.prototype, "settingValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ServiceSetting.prototype, "status", void 0);
    return ServiceSetting;
}(SpeakeasyBase));
export { ServiceSetting };
