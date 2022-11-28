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
import { CloudWatchLogsEncodingEnum } from "./cloudwatchlogsencodingenum";
import { CloudWatchLogsInitialPositionEnum } from "./cloudwatchlogsinitialpositionenum";
import { CloudWatchLogsTimeZoneEnum } from "./cloudwatchlogstimezoneenum";
// CloudWatchLogsLogStream
/**
 * Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>.
**/
var CloudWatchLogsLogStream = /** @class */ (function (_super) {
    __extends(CloudWatchLogsLogStream, _super);
    function CloudWatchLogsLogStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchCount" }),
        __metadata("design:type", Number)
    ], CloudWatchLogsLogStream.prototype, "batchCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchSize" }),
        __metadata("design:type", Number)
    ], CloudWatchLogsLogStream.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferDuration" }),
        __metadata("design:type", Number)
    ], CloudWatchLogsLogStream.prototype, "bufferDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatetimeFormat" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "datetimeFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encoding" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=File" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileFingerprintLines" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "fileFingerprintLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitialPosition" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "initialPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogGroupName" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "logGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiLineStartPattern" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "multiLineStartPattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeZone" }),
        __metadata("design:type", String)
    ], CloudWatchLogsLogStream.prototype, "timeZone", void 0);
    return CloudWatchLogsLogStream;
}(SpeakeasyBase));
export { CloudWatchLogsLogStream };
