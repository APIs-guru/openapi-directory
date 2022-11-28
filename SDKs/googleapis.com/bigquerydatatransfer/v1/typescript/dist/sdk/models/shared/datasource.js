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
import { DataSourceParameter } from "./datasourceparameter";
export var DataSourceAuthorizationTypeEnum;
(function (DataSourceAuthorizationTypeEnum) {
    DataSourceAuthorizationTypeEnum["AuthorizationTypeUnspecified"] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    DataSourceAuthorizationTypeEnum["AuthorizationCode"] = "AUTHORIZATION_CODE";
    DataSourceAuthorizationTypeEnum["GooglePlusAuthorizationCode"] = "GOOGLE_PLUS_AUTHORIZATION_CODE";
    DataSourceAuthorizationTypeEnum["FirstPartyOauth"] = "FIRST_PARTY_OAUTH";
})(DataSourceAuthorizationTypeEnum || (DataSourceAuthorizationTypeEnum = {}));
export var DataSourceDataRefreshTypeEnum;
(function (DataSourceDataRefreshTypeEnum) {
    DataSourceDataRefreshTypeEnum["DataRefreshTypeUnspecified"] = "DATA_REFRESH_TYPE_UNSPECIFIED";
    DataSourceDataRefreshTypeEnum["SlidingWindow"] = "SLIDING_WINDOW";
    DataSourceDataRefreshTypeEnum["CustomSlidingWindow"] = "CUSTOM_SLIDING_WINDOW";
})(DataSourceDataRefreshTypeEnum || (DataSourceDataRefreshTypeEnum = {}));
export var DataSourceTransferTypeEnum;
(function (DataSourceTransferTypeEnum) {
    DataSourceTransferTypeEnum["TransferTypeUnspecified"] = "TRANSFER_TYPE_UNSPECIFIED";
    DataSourceTransferTypeEnum["Batch"] = "BATCH";
    DataSourceTransferTypeEnum["Streaming"] = "STREAMING";
})(DataSourceTransferTypeEnum || (DataSourceTransferTypeEnum = {}));
// DataSource
/**
 * Defines the properties and custom parameters for a data source.
**/
var DataSource = /** @class */ (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationType" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "authorizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRefreshType" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataRefreshType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceId" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultDataRefreshWindowDays" }),
        __metadata("design:type", Number)
    ], DataSource.prototype, "defaultDataRefreshWindowDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSchedule" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "defaultSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helpUrl" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "helpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualRunsDisabled" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "manualRunsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumScheduleInterval" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "minimumScheduleInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: DataSourceParameter }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsCustomSchedule" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "supportsCustomSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportsMultipleTransfers" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "supportsMultipleTransfers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferType" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "transferType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDeadlineSeconds" }),
        __metadata("design:type", Number)
    ], DataSource.prototype, "updateDeadlineSeconds", void 0);
    return DataSource;
}(SpeakeasyBase));
export { DataSource };
