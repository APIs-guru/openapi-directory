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
// Patch
/**
 * Represents metadata about a patch.
**/
var Patch = /** @class */ (function (_super) {
    __extends(Patch, _super);
    function Patch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdvisoryIds" }),
        __metadata("design:type", Array)
    ], Patch.prototype, "advisoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arch" }),
        __metadata("design:type", String)
    ], Patch.prototype, "arch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BugzillaIds" }),
        __metadata("design:type", Array)
    ], Patch.prototype, "bugzillaIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CVEIds" }),
        __metadata("design:type", Array)
    ], Patch.prototype, "cveIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Classification" }),
        __metadata("design:type", String)
    ], Patch.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentUrl" }),
        __metadata("design:type", String)
    ], Patch.prototype, "contentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Patch.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Epoch" }),
        __metadata("design:type", Number)
    ], Patch.prototype, "epoch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Patch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KbNumber" }),
        __metadata("design:type", String)
    ], Patch.prototype, "kbNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Language" }),
        __metadata("design:type", String)
    ], Patch.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MsrcNumber" }),
        __metadata("design:type", String)
    ], Patch.prototype, "msrcNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MsrcSeverity" }),
        __metadata("design:type", String)
    ], Patch.prototype, "msrcSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Patch.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Product" }),
        __metadata("design:type", String)
    ], Patch.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductFamily" }),
        __metadata("design:type", String)
    ], Patch.prototype, "productFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Release" }),
        __metadata("design:type", String)
    ], Patch.prototype, "release", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseDate" }),
        __metadata("design:type", Date)
    ], Patch.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Repository" }),
        __metadata("design:type", String)
    ], Patch.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], Patch.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Patch.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Vendor" }),
        __metadata("design:type", String)
    ], Patch.prototype, "vendor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], Patch.prototype, "version", void 0);
    return Patch;
}(SpeakeasyBase));
export { Patch };
