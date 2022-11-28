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
import { DatasetAccessEntry } from "./datasetaccessentry";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";
var DatasetAccess = /** @class */ (function (_super) {
    __extends(DatasetAccess, _super);
    function DatasetAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataset" }),
        __metadata("design:type", DatasetAccessEntry)
    ], DatasetAccess.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupByEmail" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "groupByEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamMember" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "iamMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routine" }),
        __metadata("design:type", RoutineReference)
    ], DatasetAccess.prototype, "routine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialGroup" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "specialGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userByEmail" }),
        __metadata("design:type", String)
    ], DatasetAccess.prototype, "userByEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", TableReference)
    ], DatasetAccess.prototype, "view", void 0);
    return DatasetAccess;
}(SpeakeasyBase));
export { DatasetAccess };
var DatasetTags = /** @class */ (function (_super) {
    __extends(DatasetTags, _super);
    function DatasetTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagKey" }),
        __metadata("design:type", String)
    ], DatasetTags.prototype, "tagKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagValue" }),
        __metadata("design:type", String)
    ], DatasetTags.prototype, "tagValue", void 0);
    return DatasetTags;
}(SpeakeasyBase));
export { DatasetTags };
var Dataset = /** @class */ (function (_super) {
    __extends(Dataset, _super);
    function Dataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access", elemType: DatasetAccess }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasetReference" }),
        __metadata("design:type", DatasetReference)
    ], Dataset.prototype, "datasetReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCollation" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "defaultCollation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultEncryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], Dataset.prototype, "defaultEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPartitionExpirationMs" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "defaultPartitionExpirationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTableExpirationMs" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "defaultTableExpirationMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isCaseInsensitive" }),
        __metadata("design:type", Boolean)
    ], Dataset.prototype, "isCaseInsensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Dataset.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTimeTravelHours" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "maxTimeTravelHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], Dataset.prototype, "satisfiesPzs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageBillingModel" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "storageBillingModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: DatasetTags }),
        __metadata("design:type", Array)
    ], Dataset.prototype, "tags", void 0);
    return Dataset;
}(SpeakeasyBase));
export { Dataset };
