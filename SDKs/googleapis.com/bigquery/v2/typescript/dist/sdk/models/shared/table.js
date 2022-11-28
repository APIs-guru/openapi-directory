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
import { CloneDefinition } from "./clonedefinition";
import { Clustering } from "./clustering";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ExternalDataConfiguration } from "./externaldataconfiguration";
import { MaterializedViewDefinition } from "./materializedviewdefinition";
import { ModelDefinition } from "./modeldefinition";
import { RangePartitioning } from "./rangepartitioning";
import { TableSchema } from "./tableschema";
import { SnapshotDefinition } from "./snapshotdefinition";
import { Streamingbuffer } from "./streamingbuffer";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";
import { ViewDefinition } from "./viewdefinition";
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloneDefinition" }),
        __metadata("design:type", CloneDefinition)
    ], Table.prototype, "cloneDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clustering" }),
        __metadata("design:type", Clustering)
    ], Table.prototype, "clustering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Table.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCollation" }),
        __metadata("design:type", String)
    ], Table.prototype, "defaultCollation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Table.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], Table.prototype, "encryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Table.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], Table.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalDataConfiguration" }),
        __metadata("design:type", ExternalDataConfiguration)
    ], Table.prototype, "externalDataConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], Table.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Table.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Table.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Table.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], Table.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Table.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materializedView" }),
        __metadata("design:type", MaterializedViewDefinition)
    ], Table.prototype, "materializedView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxStaleness" }),
        __metadata("design:type", String)
    ], Table.prototype, "maxStaleness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", ModelDefinition)
    ], Table.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numBytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numLongTermBytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numLongTermBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numPhysicalBytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numPhysicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numRows" }),
        __metadata("design:type", String)
    ], Table.prototype, "numRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_active_logical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numActiveLogicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_active_physical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numActivePhysicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_long_term_logical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numLongTermLogicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_long_term_physical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numLongTermPhysicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_partitions" }),
        __metadata("design:type", String)
    ], Table.prototype, "numPartitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_time_travel_physical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numTimeTravelPhysicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_total_logical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numTotalLogicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_total_physical_bytes" }),
        __metadata("design:type", String)
    ], Table.prototype, "numTotalPhysicalBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangePartitioning" }),
        __metadata("design:type", RangePartitioning)
    ], Table.prototype, "rangePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirePartitionFilter" }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "requirePartitionFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", TableSchema)
    ], Table.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Table.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotDefinition" }),
        __metadata("design:type", SnapshotDefinition)
    ], Table.prototype, "snapshotDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingBuffer" }),
        __metadata("design:type", Streamingbuffer)
    ], Table.prototype, "streamingBuffer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableReference" }),
        __metadata("design:type", TableReference)
    ], Table.prototype, "tableReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timePartitioning" }),
        __metadata("design:type", TimePartitioning)
    ], Table.prototype, "timePartitioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Table.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", ViewDefinition)
    ], Table.prototype, "view", void 0);
    return Table;
}(SpeakeasyBase));
export { Table };
