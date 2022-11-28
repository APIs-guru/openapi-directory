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
// EventStream
/**
 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
**/
var EventStream = /** @class */ (function (_super) {
    __extends(EventStream, _super);
    function EventStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationStreamArn" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "destinationStreamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalId" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedBy" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "lastUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], EventStream.prototype, "roleArn", void 0);
    return EventStream;
}(SpeakeasyBase));
export { EventStream };
