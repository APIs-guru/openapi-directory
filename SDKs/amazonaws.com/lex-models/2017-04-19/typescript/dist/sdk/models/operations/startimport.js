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
var StartImportHeaders = /** @class */ (function (_super) {
    __extends(StartImportHeaders, _super);
    function StartImportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartImportHeaders;
}(SpeakeasyBase));
export { StartImportHeaders };
export var StartImportRequestBodyMergeStrategyEnum;
(function (StartImportRequestBodyMergeStrategyEnum) {
    StartImportRequestBodyMergeStrategyEnum["OverwriteLatest"] = "OVERWRITE_LATEST";
    StartImportRequestBodyMergeStrategyEnum["FailOnConflict"] = "FAIL_ON_CONFLICT";
})(StartImportRequestBodyMergeStrategyEnum || (StartImportRequestBodyMergeStrategyEnum = {}));
export var StartImportRequestBodyResourceTypeEnum;
(function (StartImportRequestBodyResourceTypeEnum) {
    StartImportRequestBodyResourceTypeEnum["Bot"] = "BOT";
    StartImportRequestBodyResourceTypeEnum["Intent"] = "INTENT";
    StartImportRequestBodyResourceTypeEnum["SlotType"] = "SLOT_TYPE";
})(StartImportRequestBodyResourceTypeEnum || (StartImportRequestBodyResourceTypeEnum = {}));
var StartImportRequestBody = /** @class */ (function (_super) {
    __extends(StartImportRequestBody, _super);
    function StartImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeStrategy" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "mergeStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], StartImportRequestBody.prototype, "tags", void 0);
    return StartImportRequestBody;
}(SpeakeasyBase));
export { StartImportRequestBody };
var StartImportRequest = /** @class */ (function (_super) {
    __extends(StartImportRequest, _super);
    function StartImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartImportHeaders)
    ], StartImportRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartImportRequestBody)
    ], StartImportRequest.prototype, "request", void 0);
    return StartImportRequest;
}(SpeakeasyBase));
export { StartImportRequest };
var StartImportResponse = /** @class */ (function (_super) {
    __extends(StartImportResponse, _super);
    function StartImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartImportResponse)
    ], StartImportResponse.prototype, "startImportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartImportResponse.prototype, "statusCode", void 0);
    return StartImportResponse;
}(SpeakeasyBase));
export { StartImportResponse };
