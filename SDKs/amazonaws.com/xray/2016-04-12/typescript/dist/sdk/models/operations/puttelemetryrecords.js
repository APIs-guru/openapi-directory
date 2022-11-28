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
import * as shared from "../shared";
var PutTelemetryRecordsHeaders = /** @class */ (function (_super) {
    __extends(PutTelemetryRecordsHeaders, _super);
    function PutTelemetryRecordsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutTelemetryRecordsHeaders;
}(SpeakeasyBase));
export { PutTelemetryRecordsHeaders };
var PutTelemetryRecordsRequestBody = /** @class */ (function (_super) {
    __extends(PutTelemetryRecordsRequestBody, _super);
    function PutTelemetryRecordsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EC2InstanceId" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsRequestBody.prototype, "ec2InstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hostname" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsRequestBody.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARN" }),
        __metadata("design:type", String)
    ], PutTelemetryRecordsRequestBody.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TelemetryRecords", elemType: shared.TelemetryRecord }),
        __metadata("design:type", Array)
    ], PutTelemetryRecordsRequestBody.prototype, "telemetryRecords", void 0);
    return PutTelemetryRecordsRequestBody;
}(SpeakeasyBase));
export { PutTelemetryRecordsRequestBody };
var PutTelemetryRecordsRequest = /** @class */ (function (_super) {
    __extends(PutTelemetryRecordsRequest, _super);
    function PutTelemetryRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTelemetryRecordsHeaders)
    ], PutTelemetryRecordsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTelemetryRecordsRequestBody)
    ], PutTelemetryRecordsRequest.prototype, "request", void 0);
    return PutTelemetryRecordsRequest;
}(SpeakeasyBase));
export { PutTelemetryRecordsRequest };
var PutTelemetryRecordsResponse = /** @class */ (function (_super) {
    __extends(PutTelemetryRecordsResponse, _super);
    function PutTelemetryRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTelemetryRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutTelemetryRecordsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutTelemetryRecordsResponse.prototype, "putTelemetryRecordsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTelemetryRecordsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutTelemetryRecordsResponse.prototype, "throttledException", void 0);
    return PutTelemetryRecordsResponse;
}(SpeakeasyBase));
export { PutTelemetryRecordsResponse };
