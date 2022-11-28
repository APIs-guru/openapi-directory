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
// CalendarResource
/**
 * Public API: Resources.calendars
**/
var CalendarResource = /** @class */ (function (_super) {
    __extends(CalendarResource, _super);
    function CalendarResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildingId" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "buildingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Number)
    ], CalendarResource.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etags" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "etags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureInstances" }),
        __metadata("design:type", Object)
    ], CalendarResource.prototype, "featureInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorName" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "floorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorSection" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "floorSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generatedResourceName" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "generatedResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceCategory" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceDescription" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceEmail" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userVisibleDescription" }),
        __metadata("design:type", String)
    ], CalendarResource.prototype, "userVisibleDescription", void 0);
    return CalendarResource;
}(SpeakeasyBase));
export { CalendarResource };
