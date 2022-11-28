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
import { KeySchemaElement } from "./keyschemaelement";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";
import { StreamViewTypeEnum } from "./streamviewtypeenum";
// StreamDescription
/**
 * Represents all of the data describing a particular stream.
**/
var StreamDescription = /** @class */ (function (_super) {
    __extends(StreamDescription, _super);
    function StreamDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationRequestDateTime" }),
        __metadata("design:type", Date)
    ], StreamDescription.prototype, "creationRequestDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement }),
        __metadata("design:type", Array)
    ], StreamDescription.prototype, "keySchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastEvaluatedShardId" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "lastEvaluatedShardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Shards", elemType: Shard }),
        __metadata("design:type", Array)
    ], StreamDescription.prototype, "shards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamArn" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "streamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamLabel" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "streamLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamStatus" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "streamStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamViewType" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "streamViewType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], StreamDescription.prototype, "tableName", void 0);
    return StreamDescription;
}(SpeakeasyBase));
export { StreamDescription };
