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
// DefaultWorkspaceCreationProperties
/**
 * Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
**/
var DefaultWorkspaceCreationProperties = /** @class */ (function (_super) {
    __extends(DefaultWorkspaceCreationProperties, _super);
    function DefaultWorkspaceCreationProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomSecurityGroupId" }),
        __metadata("design:type", String)
    ], DefaultWorkspaceCreationProperties.prototype, "customSecurityGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultOu" }),
        __metadata("design:type", String)
    ], DefaultWorkspaceCreationProperties.prototype, "defaultOu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInternetAccess" }),
        __metadata("design:type", Boolean)
    ], DefaultWorkspaceCreationProperties.prototype, "enableInternetAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMaintenanceMode" }),
        __metadata("design:type", Boolean)
    ], DefaultWorkspaceCreationProperties.prototype, "enableMaintenanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableWorkDocs" }),
        __metadata("design:type", Boolean)
    ], DefaultWorkspaceCreationProperties.prototype, "enableWorkDocs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserEnabledAsLocalAdministrator" }),
        __metadata("design:type", Boolean)
    ], DefaultWorkspaceCreationProperties.prototype, "userEnabledAsLocalAdministrator", void 0);
    return DefaultWorkspaceCreationProperties;
}(SpeakeasyBase));
export { DefaultWorkspaceCreationProperties };
