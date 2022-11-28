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
// BundleRegistrationEntity
/**
 * List Bundle Registrations
**/
var BundleRegistrationEntity = /** @class */ (function (_super) {
    __extends(BundleRegistrationEntity, _super);
    function BundleRegistrationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickwrap_body" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "clickwrapBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_field_data" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "formFieldData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_field_set_id" }),
        __metadata("design:type", Number)
    ], BundleRegistrationEntity.prototype, "formFieldSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbox_code" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "inboxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BundleRegistrationEntity.prototype, "name", void 0);
    return BundleRegistrationEntity;
}(SpeakeasyBase));
export { BundleRegistrationEntity };
