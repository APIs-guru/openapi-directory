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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// EventSourceConfiguration
/**
 * Describes mapping between an Amazon Kinesis stream and a Lambda function.
**/
var EventSourceConfiguration = /** @class */ (function (_super) {
    __extends(EventSourceConfiguration, _super);
    function EventSourceConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=BatchSize" }),
        __metadata("design:type", Number)
    ], EventSourceConfiguration.prototype, "batchSize", void 0);
    __decorate([
        Metadata({ data: "json, name=EventSource" }),
        __metadata("design:type", String)
    ], EventSourceConfiguration.prototype, "eventSource", void 0);
    __decorate([
        Metadata({ data: "json, name=FunctionName" }),
        __metadata("design:type", String)
    ], EventSourceConfiguration.prototype, "functionName", void 0);
    __decorate([
        Metadata({ data: "json, name=IsActive" }),
        __metadata("design:type", Boolean)
    ], EventSourceConfiguration.prototype, "isActive", void 0);
    __decorate([
        Metadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], EventSourceConfiguration.prototype, "lastModified", void 0);
    __decorate([
        Metadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], EventSourceConfiguration.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], EventSourceConfiguration.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EventSourceConfiguration.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=UUID" }),
        __metadata("design:type", String)
    ], EventSourceConfiguration.prototype, "uuid", void 0);
    return EventSourceConfiguration;
}(SpeakeasyBase));
export { EventSourceConfiguration };
