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
export var ApiKeyEntityPermissionSetEnum;
(function (ApiKeyEntityPermissionSetEnum) {
    ApiKeyEntityPermissionSetEnum["None"] = "none";
    ApiKeyEntityPermissionSetEnum["Full"] = "full";
    ApiKeyEntityPermissionSetEnum["DesktopApp"] = "desktop_app";
    ApiKeyEntityPermissionSetEnum["SyncApp"] = "sync_app";
    ApiKeyEntityPermissionSetEnum["OfficeIntegration"] = "office_integration";
    ApiKeyEntityPermissionSetEnum["MobileApp"] = "mobile_app";
})(ApiKeyEntityPermissionSetEnum || (ApiKeyEntityPermissionSetEnum = {}));
// ApiKeyEntity
/**
 * List Api Keys
**/
var ApiKeyEntity = /** @class */ (function (_super) {
    __extends(ApiKeyEntity, _super);
    function ApiKeyEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ApiKeyEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptive_label" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "descriptiveLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], ApiKeyEntity.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ApiKeyEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_use_at" }),
        __metadata("design:type", Date)
    ], ApiKeyEntity.prototype, "lastUseAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission_set" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "permissionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], ApiKeyEntity.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], ApiKeyEntity.prototype, "userId", void 0);
    return ApiKeyEntity;
}(SpeakeasyBase));
export { ApiKeyEntity };
