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
// OpsItem
/**
 * <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational work items (OpsItems) impacting the performance and health of their Amazon Web Services resources. OpsCenter is integrated with Amazon EventBridge and Amazon CloudWatch. This means you can configure these services to automatically create an OpsItem in OpsCenter when a CloudWatch alarm enters the ALARM state or when EventBridge processes an event from any Amazon Web Services service that publishes events. Configuring Amazon CloudWatch alarms and EventBridge events to automatically create OpsItems allows you to quickly diagnose and remediate issues with Amazon Web Services resources from a single console.</p> <p>To help you diagnose issues, each OpsItem includes contextually relevant information such as the name and ID of the Amazon Web Services resource that generated the OpsItem, alarm or event details, alarm history, and an alarm timeline graph. For the Amazon Web Services resource, OpsCenter aggregates information from Config, CloudTrail logs, and EventBridge, so you don't have to navigate across multiple console pages during your investigation. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
**/
var OpsItem = /** @class */ (function (_super) {
    __extends(OpsItem, _super);
    function OpsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualEndTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "actualEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualStartTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "actualStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications", elemType: OpsItemNotification }),
        __metadata("design:type", Array)
    ], OpsItem.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue }),
        __metadata("design:type", Map)
    ], OpsItem.prototype, "operationalData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemId" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "opsItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemType" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "opsItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedEndTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "plannedEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedStartTime" }),
        __metadata("design:type", Date)
    ], OpsItem.prototype, "plannedStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], OpsItem.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedOpsItems", elemType: RelatedOpsItem }),
        __metadata("design:type", Array)
    ], OpsItem.prototype, "relatedOpsItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], OpsItem.prototype, "version", void 0);
    return OpsItem;
}(SpeakeasyBase));
export { OpsItem };
