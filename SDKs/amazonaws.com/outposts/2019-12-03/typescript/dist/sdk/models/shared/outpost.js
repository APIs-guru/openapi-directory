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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// Outpost
/**
 * Information about an Outpost.
**/
var Outpost = /** @class */ (function (_super) {
    __extends(Outpost, _super);
    function Outpost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "json, name=AvailabilityZoneId" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "availabilityZoneId", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=LifeCycleStatus" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "lifeCycleStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=OutpostArn" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "outpostArn", void 0);
    __decorate([
        Metadata({ data: "json, name=OutpostId" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "outpostId", void 0);
    __decorate([
        Metadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "ownerId", void 0);
    __decorate([
        Metadata({ data: "json, name=SiteArn" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "siteArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SiteId" }),
        __metadata("design:type", String)
    ], Outpost.prototype, "siteId", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], Outpost.prototype, "tags", void 0);
    return Outpost;
}(SpeakeasyBase));
export { Outpost };
