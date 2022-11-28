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
import { ConsumerConnection } from "./consumerconnection";
import { ConsumerMetadata } from "./consumermetadata";
import { RequestCountAllocation } from "./requestcountallocation";
var Consumer = /** @class */ (function (_super) {
    __extends(Consumer, _super);
    function Consumer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregated_request_count" }),
        __metadata("design:type", Number)
    ], Consumer.prototype, "aggregatedRequestCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_id" }),
        __metadata("design:type", String)
    ], Consumer.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections", elemType: ConsumerConnection }),
        __metadata("design:type", Array)
    ], Consumer.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumer_id" }),
        __metadata("design:type", String)
    ], Consumer.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], Consumer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ConsumerMetadata)
    ], Consumer.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified" }),
        __metadata("design:type", String)
    ], Consumer.prototype, "modified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_count_updated" }),
        __metadata("design:type", String)
    ], Consumer.prototype, "requestCountUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_counts" }),
        __metadata("design:type", RequestCountAllocation)
    ], Consumer.prototype, "requestCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], Consumer.prototype, "services", void 0);
    return Consumer;
}(SpeakeasyBase));
export { Consumer };
