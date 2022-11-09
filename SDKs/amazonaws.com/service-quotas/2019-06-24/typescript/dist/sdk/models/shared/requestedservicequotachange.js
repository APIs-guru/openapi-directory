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
import { RequestStatusEnum } from "./requeststatusenum";
// RequestedServiceQuotaChange
/**
 * Information about a quota increase request.
**/
var RequestedServiceQuotaChange = /** @class */ (function (_super) {
    __extends(RequestedServiceQuotaChange, _super);
    function RequestedServiceQuotaChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CaseId" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "caseId", void 0);
    __decorate([
        Metadata({ data: "json, name=Created" }),
        __metadata("design:type", Date)
    ], RequestedServiceQuotaChange.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=DesiredValue" }),
        __metadata("design:type", Number)
    ], RequestedServiceQuotaChange.prototype, "desiredValue", void 0);
    __decorate([
        Metadata({ data: "json, name=GlobalQuota" }),
        __metadata("design:type", Boolean)
    ], RequestedServiceQuotaChange.prototype, "globalQuota", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], RequestedServiceQuotaChange.prototype, "lastUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=QuotaArn" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "quotaArn", void 0);
    __decorate([
        Metadata({ data: "json, name=QuotaCode" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "quotaCode", void 0);
    __decorate([
        Metadata({ data: "json, name=QuotaName" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "quotaName", void 0);
    __decorate([
        Metadata({ data: "json, name=Requester" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "requester", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceCode" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "serviceCode", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceName" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "serviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], RequestedServiceQuotaChange.prototype, "unit", void 0);
    return RequestedServiceQuotaChange;
}(SpeakeasyBase));
export { RequestedServiceQuotaChange };
