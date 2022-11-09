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
import { FleetStatusEnum } from "./fleetstatusenum";
// FleetSummary
/**
 * The summary of the fleet.
**/
var FleetSummary = /** @class */ (function (_super) {
    __extends(FleetSummary, _super);
    function FleetSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CompanyCode" }),
        __metadata("design:type", String)
    ], FleetSummary.prototype, "companyCode", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], FleetSummary.prototype, "createdTime", void 0);
    __decorate([
        Metadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], FleetSummary.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], FleetSummary.prototype, "fleetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=FleetName" }),
        __metadata("design:type", String)
    ], FleetSummary.prototype, "fleetName", void 0);
    __decorate([
        Metadata({ data: "json, name=FleetStatus" }),
        __metadata("design:type", String)
    ], FleetSummary.prototype, "fleetStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], FleetSummary.prototype, "lastUpdatedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], FleetSummary.prototype, "tags", void 0);
    return FleetSummary;
}(SpeakeasyBase));
export { FleetSummary };
