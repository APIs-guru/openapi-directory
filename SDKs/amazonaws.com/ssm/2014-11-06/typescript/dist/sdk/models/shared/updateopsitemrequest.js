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
import { OpsItemNotification } from "./opsitemnotification";
import { OpsItemDataValue } from "./opsitemdatavalue";
import { RelatedOpsItem } from "./relatedopsitem";
import { OpsItemStatusEnum } from "./opsitemstatusenum";
var UpdateOpsItemRequest = /** @class */ (function (_super) {
    __extends(UpdateOpsItemRequest, _super);
    function UpdateOpsItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualEndTime" }),
        __metadata("design:type", Date)
    ], UpdateOpsItemRequest.prototype, "actualEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualStartTime" }),
        __metadata("design:type", Date)
    ], UpdateOpsItemRequest.prototype, "actualStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications", elemType: OpsItemNotification }),
        __metadata("design:type", Array)
    ], UpdateOpsItemRequest.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue }),
        __metadata("design:type", Map)
    ], UpdateOpsItemRequest.prototype, "operationalData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationalDataToDelete" }),
        __metadata("design:type", Array)
    ], UpdateOpsItemRequest.prototype, "operationalDataToDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemId" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "opsItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedEndTime" }),
        __metadata("design:type", Date)
    ], UpdateOpsItemRequest.prototype, "plannedEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedStartTime" }),
        __metadata("design:type", Date)
    ], UpdateOpsItemRequest.prototype, "plannedStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], UpdateOpsItemRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedOpsItems", elemType: RelatedOpsItem }),
        __metadata("design:type", Array)
    ], UpdateOpsItemRequest.prototype, "relatedOpsItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], UpdateOpsItemRequest.prototype, "title", void 0);
    return UpdateOpsItemRequest;
}(SpeakeasyBase));
export { UpdateOpsItemRequest };
