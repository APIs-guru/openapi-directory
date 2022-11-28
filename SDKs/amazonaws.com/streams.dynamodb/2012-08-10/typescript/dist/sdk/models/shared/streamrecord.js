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
import { AttributeValue } from "./attributevalue";
import { StreamViewTypeEnum } from "./streamviewtypeenum";
// StreamRecord
/**
 * A description of a single data modification that was performed on an item in a DynamoDB table.
**/
var StreamRecord = /** @class */ (function (_super) {
    __extends(StreamRecord, _super);
    function StreamRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApproximateCreationDateTime" }),
        __metadata("design:type", Date)
    ], StreamRecord.prototype, "approximateCreationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keys", elemType: AttributeValue }),
        __metadata("design:type", Map)
    ], StreamRecord.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewImage", elemType: AttributeValue }),
        __metadata("design:type", Map)
    ], StreamRecord.prototype, "newImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OldImage", elemType: AttributeValue }),
        __metadata("design:type", Map)
    ], StreamRecord.prototype, "oldImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SequenceNumber" }),
        __metadata("design:type", String)
    ], StreamRecord.prototype, "sequenceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeBytes" }),
        __metadata("design:type", Number)
    ], StreamRecord.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamViewType" }),
        __metadata("design:type", String)
    ], StreamRecord.prototype, "streamViewType", void 0);
    return StreamRecord;
}(SpeakeasyBase));
export { StreamRecord };
