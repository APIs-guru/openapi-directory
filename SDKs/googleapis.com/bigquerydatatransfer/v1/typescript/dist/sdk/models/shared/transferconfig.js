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
import { EmailPreferences } from "./emailpreferences";
import { UserInfo } from "./userinfo";
import { ScheduleOptions } from "./scheduleoptions";
export var TransferConfigStateEnum;
(function (TransferConfigStateEnum) {
    TransferConfigStateEnum["TransferStateUnspecified"] = "TRANSFER_STATE_UNSPECIFIED";
    TransferConfigStateEnum["Pending"] = "PENDING";
    TransferConfigStateEnum["Running"] = "RUNNING";
    TransferConfigStateEnum["Succeeded"] = "SUCCEEDED";
    TransferConfigStateEnum["Failed"] = "FAILED";
    TransferConfigStateEnum["Cancelled"] = "CANCELLED";
})(TransferConfigStateEnum || (TransferConfigStateEnum = {}));
// TransferConfigInput
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
var TransferConfigInput = /** @class */ (function (_super) {
    __extends(TransferConfigInput, _super);
    function TransferConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRefreshWindowDays" }),
        __metadata("design:type", Number)
    ], TransferConfigInput.prototype, "dataRefreshWindowDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationDatasetId" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "destinationDatasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], TransferConfigInput.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailPreferences" }),
        __metadata("design:type", EmailPreferences)
    ], TransferConfigInput.prototype, "emailPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "notificationPubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerInfo" }),
        __metadata("design:type", UserInfo)
    ], TransferConfigInput.prototype, "ownerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], TransferConfigInput.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleOptions" }),
        __metadata("design:type", ScheduleOptions)
    ], TransferConfigInput.prototype, "scheduleOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], TransferConfigInput.prototype, "userId", void 0);
    return TransferConfigInput;
}(SpeakeasyBase));
export { TransferConfigInput };
// TransferConfig
/**
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
var TransferConfig = /** @class */ (function (_super) {
    __extends(TransferConfig, _super);
    function TransferConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRefreshWindowDays" }),
        __metadata("design:type", Number)
    ], TransferConfig.prototype, "dataRefreshWindowDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasetRegion" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "datasetRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationDatasetId" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "destinationDatasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], TransferConfig.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailPreferences" }),
        __metadata("design:type", EmailPreferences)
    ], TransferConfig.prototype, "emailPreferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextRunTime" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "nextRunTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "notificationPubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerInfo" }),
        __metadata("design:type", UserInfo)
    ], TransferConfig.prototype, "ownerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], TransferConfig.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleOptions" }),
        __metadata("design:type", ScheduleOptions)
    ], TransferConfig.prototype, "scheduleOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], TransferConfig.prototype, "userId", void 0);
    return TransferConfig;
}(SpeakeasyBase));
export { TransferConfig };
