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
import { Tag } from "./tag";
var CreateOpsItemRequest = /** @class */ (function (_super) {
    __extends(CreateOpsItemRequest, _super);
    function CreateOpsItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualEndTime" }),
        __metadata("design:type", Date)
    ], CreateOpsItemRequest.prototype, "actualEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualStartTime" }),
        __metadata("design:type", Date)
    ], CreateOpsItemRequest.prototype, "actualStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications", elemType: OpsItemNotification }),
        __metadata("design:type", Array)
    ], CreateOpsItemRequest.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationalData", elemType: OpsItemDataValue }),
        __metadata("design:type", Map)
    ], CreateOpsItemRequest.prototype, "operationalData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpsItemType" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "opsItemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedEndTime" }),
        __metadata("design:type", Date)
    ], CreateOpsItemRequest.prototype, "plannedEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlannedStartTime" }),
        __metadata("design:type", Date)
    ], CreateOpsItemRequest.prototype, "plannedStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CreateOpsItemRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedOpsItems", elemType: RelatedOpsItem }),
        __metadata("design:type", Array)
    ], CreateOpsItemRequest.prototype, "relatedOpsItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateOpsItemRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], CreateOpsItemRequest.prototype, "title", void 0);
    return CreateOpsItemRequest;
}(SpeakeasyBase));
export { CreateOpsItemRequest };
