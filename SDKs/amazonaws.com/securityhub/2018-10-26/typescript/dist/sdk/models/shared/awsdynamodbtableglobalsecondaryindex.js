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
import { AwsDynamoDbTableKeySchema } from "./awsdynamodbtablekeyschema";
import { AwsDynamoDbTableProjection } from "./awsdynamodbtableprojection";
import { AwsDynamoDbTableProvisionedThroughput } from "./awsdynamodbtableprovisionedthroughput";
// AwsDynamoDbTableGlobalSecondaryIndex
/**
 * Information abut a global secondary index for the table.
**/
var AwsDynamoDbTableGlobalSecondaryIndex = /** @class */ (function (_super) {
    __extends(AwsDynamoDbTableGlobalSecondaryIndex, _super);
    function AwsDynamoDbTableGlobalSecondaryIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Backfilling" }),
        __metadata("design:type", Boolean)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "backfilling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexArn" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "indexArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexName" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexSizeBytes" }),
        __metadata("design:type", Number)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "indexSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexStatus" }),
        __metadata("design:type", String)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "indexStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: AwsDynamoDbTableKeySchema }),
        __metadata("design:type", Array)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "keySchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Projection" }),
        __metadata("design:type", AwsDynamoDbTableProjection)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" }),
        __metadata("design:type", AwsDynamoDbTableProvisionedThroughput)
    ], AwsDynamoDbTableGlobalSecondaryIndex.prototype, "provisionedThroughput", void 0);
    return AwsDynamoDbTableGlobalSecondaryIndex;
}(SpeakeasyBase));
export { AwsDynamoDbTableGlobalSecondaryIndex };
