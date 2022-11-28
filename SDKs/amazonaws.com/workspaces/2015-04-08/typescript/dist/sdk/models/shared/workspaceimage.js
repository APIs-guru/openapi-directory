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
import { OperatingSystem } from "./operatingsystem";
import { WorkspaceImageRequiredTenancyEnum } from "./workspaceimagerequiredtenancyenum";
import { WorkspaceImageStateEnum } from "./workspaceimagestateenum";
// WorkspaceImage
/**
 * Describes a WorkSpace image.
**/
var WorkspaceImage = /** @class */ (function (_super) {
    __extends(WorkspaceImage, _super);
    function WorkspaceImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Created" }),
        __metadata("design:type", Date)
    ], WorkspaceImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorCode" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorMessage" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageId" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperatingSystem" }),
        __metadata("design:type", OperatingSystem)
    ], WorkspaceImage.prototype, "operatingSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerAccountId" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "ownerAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiredTenancy" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "requiredTenancy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], WorkspaceImage.prototype, "state", void 0);
    return WorkspaceImage;
}(SpeakeasyBase));
export { WorkspaceImage };
