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
import { MapConfiguration } from "./mapconfiguration";
import { PricingPlanEnum } from "./pricingplanenum";
var DescribeMapResponse = /** @class */ (function (_super) {
    __extends(DescribeMapResponse, _super);
    function DescribeMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Configuration" }),
        __metadata("design:type", MapConfiguration)
    ], DescribeMapResponse.prototype, "configuration", void 0);
    __decorate([
        Metadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", Date)
    ], DescribeMapResponse.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=DataSource" }),
        __metadata("design:type", String)
    ], DescribeMapResponse.prototype, "dataSource", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeMapResponse.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=MapArn" }),
        __metadata("design:type", String)
    ], DescribeMapResponse.prototype, "mapArn", void 0);
    __decorate([
        Metadata({ data: "json, name=MapName" }),
        __metadata("design:type", String)
    ], DescribeMapResponse.prototype, "mapName", void 0);
    __decorate([
        Metadata({ data: "json, name=PricingPlan" }),
        __metadata("design:type", String)
    ], DescribeMapResponse.prototype, "pricingPlan", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], DescribeMapResponse.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdateTime" }),
        __metadata("design:type", Date)
    ], DescribeMapResponse.prototype, "updateTime", void 0);
    return DescribeMapResponse;
}(SpeakeasyBase));
export { DescribeMapResponse };
