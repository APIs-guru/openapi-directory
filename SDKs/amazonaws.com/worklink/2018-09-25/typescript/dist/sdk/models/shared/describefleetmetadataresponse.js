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
import { FleetStatusEnum } from "./fleetstatusenum";
var DescribeFleetMetadataResponse = /** @class */ (function (_super) {
    __extends(DescribeFleetMetadataResponse, _super);
    function DescribeFleetMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyCode" }),
        __metadata("design:type", String)
    ], DescribeFleetMetadataResponse.prototype, "companyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], DescribeFleetMetadataResponse.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], DescribeFleetMetadataResponse.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetName" }),
        __metadata("design:type", String)
    ], DescribeFleetMetadataResponse.prototype, "fleetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetStatus" }),
        __metadata("design:type", String)
    ], DescribeFleetMetadataResponse.prototype, "fleetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" }),
        __metadata("design:type", Date)
    ], DescribeFleetMetadataResponse.prototype, "lastUpdatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OptimizeForEndUserLocation" }),
        __metadata("design:type", Boolean)
    ], DescribeFleetMetadataResponse.prototype, "optimizeForEndUserLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], DescribeFleetMetadataResponse.prototype, "tags", void 0);
    return DescribeFleetMetadataResponse;
}(SpeakeasyBase));
export { DescribeFleetMetadataResponse };
