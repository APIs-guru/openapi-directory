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
import { AdministratorWebTokenSpecManagedConfigurations } from "./administratorwebtokenspecmanagedconfigurations";
import { AdministratorWebTokenSpecPlaySearch } from "./administratorwebtokenspecplaysearch";
import { AdministratorWebTokenSpecPrivateApps } from "./administratorwebtokenspecprivateapps";
import { AdministratorWebTokenSpecStoreBuilder } from "./administratorwebtokenspecstorebuilder";
import { AdministratorWebTokenSpecWebApps } from "./administratorwebtokenspecwebapps";
import { AdministratorWebTokenSpecZeroTouch } from "./administratorwebtokenspeczerotouch";
export var AdministratorWebTokenSpecPermissionEnum;
(function (AdministratorWebTokenSpecPermissionEnum) {
    AdministratorWebTokenSpecPermissionEnum["Unknown"] = "unknown";
    AdministratorWebTokenSpecPermissionEnum["ApproveApps"] = "approveApps";
    AdministratorWebTokenSpecPermissionEnum["ManageMcm"] = "manageMcm";
})(AdministratorWebTokenSpecPermissionEnum || (AdministratorWebTokenSpecPermissionEnum = {}));
// AdministratorWebTokenSpec
/**
 * Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.
**/
var AdministratorWebTokenSpec = /** @class */ (function (_super) {
    __extends(AdministratorWebTokenSpec, _super);
    function AdministratorWebTokenSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedConfigurations" }),
        __metadata("design:type", AdministratorWebTokenSpecManagedConfigurations)
    ], AdministratorWebTokenSpec.prototype, "managedConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], AdministratorWebTokenSpec.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", Array)
    ], AdministratorWebTokenSpec.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playSearch" }),
        __metadata("design:type", AdministratorWebTokenSpecPlaySearch)
    ], AdministratorWebTokenSpec.prototype, "playSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateApps" }),
        __metadata("design:type", AdministratorWebTokenSpecPrivateApps)
    ], AdministratorWebTokenSpec.prototype, "privateApps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeBuilder" }),
        __metadata("design:type", AdministratorWebTokenSpecStoreBuilder)
    ], AdministratorWebTokenSpec.prototype, "storeBuilder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webApps" }),
        __metadata("design:type", AdministratorWebTokenSpecWebApps)
    ], AdministratorWebTokenSpec.prototype, "webApps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zeroTouch" }),
        __metadata("design:type", AdministratorWebTokenSpecZeroTouch)
    ], AdministratorWebTokenSpec.prototype, "zeroTouch", void 0);
    return AdministratorWebTokenSpec;
}(SpeakeasyBase));
export { AdministratorWebTokenSpec };
