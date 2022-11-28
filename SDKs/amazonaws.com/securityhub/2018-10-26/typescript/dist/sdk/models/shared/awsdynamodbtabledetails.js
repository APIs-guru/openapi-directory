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
import { AwsDynamoDbTableAttributeDefinition } from "./awsdynamodbtableattributedefinition";
import { AwsDynamoDbTableBillingModeSummary } from "./awsdynamodbtablebillingmodesummary";
import { AwsDynamoDbTableGlobalSecondaryIndex } from "./awsdynamodbtableglobalsecondaryindex";
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableLocalSecondaryIndex } from "./awsdynamodbtablelocalsecondaryindex";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";
import { AwsDynamoDbTableReplica } from "./awsdynamodbtablereplica";
import { AwsDynamoDbTableRestoreSummary } from "./awsdynamodbtablerestoresummary";
import { AwsDynamoDbTableSseDescription } from "./awsdynamodbtablessedescription";
import { AwsDynamoDbTableStreamSpecification } from "./awsdynamodbtablestreamspecification";
// AwsDynamoDbTableDetails
/**
 * Provides details about a DynamoDB table.
**/
var AwsDynamoDbTableDetails = /** @class */ (function (_super) {
    __extends(AwsDynamoDbTableDetails, _super);
    function AwsDynamoDbTableDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttributeDefinitions", elemType: AwsDynamoDbTableAttributeDefinition }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableDetails.prototype, "attributeDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillingModeSummary" }),
        __metadata("design:type", AwsDynamoDbTableBillingModeSummary)
    ], AwsDynamoDbTableDetails.prototype, "billingModeSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: AwsDynamoDbTableGlobalSecondaryIndex }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableDetails.prototype, "globalSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalTableVersion" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "globalTableVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], AwsDynamoDbTableDetails.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: AwsDynamoDbTableKeySchema }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableDetails.prototype, "keySchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestStreamArn" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "latestStreamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestStreamLabel" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "latestStreamLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: AwsDynamoDbTableLocalSecondaryIndex }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableDetails.prototype, "localSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" }),
        __metadata("design:type", AwsDynamoDbTableProvisionedThroughput)
    ], AwsDynamoDbTableDetails.prototype, "provisionedThroughput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Replicas", elemType: AwsDynamoDbTableReplica }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableDetails.prototype, "replicas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RestoreSummary" }),
        __metadata("design:type", AwsDynamoDbTableRestoreSummary)
    ], AwsDynamoDbTableDetails.prototype, "restoreSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SseDescription" }),
        __metadata("design:type", AwsDynamoDbTableSseDescription)
    ], AwsDynamoDbTableDetails.prototype, "sseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamSpecification" }),
        __metadata("design:type", AwsDynamoDbTableStreamSpecification)
    ], AwsDynamoDbTableDetails.prototype, "streamSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableId" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "tableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableSizeBytes" }),
        __metadata("design:type", Number)
    ], AwsDynamoDbTableDetails.prototype, "tableSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableStatus" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableDetails.prototype, "tableStatus", void 0);
    return AwsDynamoDbTableDetails;
}(SpeakeasyBase));
export { AwsDynamoDbTableDetails };
