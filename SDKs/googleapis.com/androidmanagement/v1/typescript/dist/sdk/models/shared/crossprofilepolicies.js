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
export var CrossProfilePoliciesCrossProfileCopyPasteEnum;
(function (CrossProfilePoliciesCrossProfileCopyPasteEnum) {
    CrossProfilePoliciesCrossProfileCopyPasteEnum["CrossProfileCopyPasteUnspecified"] = "CROSS_PROFILE_COPY_PASTE_UNSPECIFIED";
    CrossProfilePoliciesCrossProfileCopyPasteEnum["CopyFromWorkToPersonalDisallowed"] = "COPY_FROM_WORK_TO_PERSONAL_DISALLOWED";
    CrossProfilePoliciesCrossProfileCopyPasteEnum["CrossProfileCopyPasteAllowed"] = "CROSS_PROFILE_COPY_PASTE_ALLOWED";
})(CrossProfilePoliciesCrossProfileCopyPasteEnum || (CrossProfilePoliciesCrossProfileCopyPasteEnum = {}));
export var CrossProfilePoliciesCrossProfileDataSharingEnum;
(function (CrossProfilePoliciesCrossProfileDataSharingEnum) {
    CrossProfilePoliciesCrossProfileDataSharingEnum["CrossProfileDataSharingUnspecified"] = "CROSS_PROFILE_DATA_SHARING_UNSPECIFIED";
    CrossProfilePoliciesCrossProfileDataSharingEnum["CrossProfileDataSharingDisallowed"] = "CROSS_PROFILE_DATA_SHARING_DISALLOWED";
    CrossProfilePoliciesCrossProfileDataSharingEnum["DataSharingFromWorkToPersonalDisallowed"] = "DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED";
    CrossProfilePoliciesCrossProfileDataSharingEnum["CrossProfileDataSharingAllowed"] = "CROSS_PROFILE_DATA_SHARING_ALLOWED";
})(CrossProfilePoliciesCrossProfileDataSharingEnum || (CrossProfilePoliciesCrossProfileDataSharingEnum = {}));
export var CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum;
(function (CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum) {
    CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum["ShowWorkContactsInPersonalProfileUnspecified"] = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED";
    CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum["ShowWorkContactsInPersonalProfileDisallowed"] = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED";
    CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum["ShowWorkContactsInPersonalProfileAllowed"] = "SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED";
})(CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum || (CrossProfilePoliciesShowWorkContactsInPersonalProfileEnum = {}));
// CrossProfilePolicies
/**
 * Cross-profile policies applied on the device.
**/
var CrossProfilePolicies = /** @class */ (function (_super) {
    __extends(CrossProfilePolicies, _super);
    function CrossProfilePolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossProfileCopyPaste" }),
        __metadata("design:type", String)
    ], CrossProfilePolicies.prototype, "crossProfileCopyPaste", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossProfileDataSharing" }),
        __metadata("design:type", String)
    ], CrossProfilePolicies.prototype, "crossProfileDataSharing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showWorkContactsInPersonalProfile" }),
        __metadata("design:type", String)
    ], CrossProfilePolicies.prototype, "showWorkContactsInPersonalProfile", void 0);
    return CrossProfilePolicies;
}(SpeakeasyBase));
export { CrossProfilePolicies };
