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
var BatchExecuteStatementHeaders = /** @class */ (function (_super) {
    __extends(BatchExecuteStatementHeaders, _super);
    function BatchExecuteStatementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BatchExecuteStatementHeaders;
}(SpeakeasyBase));
export { BatchExecuteStatementHeaders };
var BatchExecuteStatementRequestBody = /** @class */ (function (_super) {
    __extends(BatchExecuteStatementRequestBody, _super);
    function BatchExecuteStatementRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterSets", elemType: shared.SqlParameter, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], BatchExecuteStatementRequestBody.prototype, "parameterSets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceArn" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretArn" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "secretArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], BatchExecuteStatementRequestBody.prototype, "transactionId", void 0);
    return BatchExecuteStatementRequestBody;
}(SpeakeasyBase));
export { BatchExecuteStatementRequestBody };
var BatchExecuteStatementRequest = /** @class */ (function (_super) {
    __extends(BatchExecuteStatementRequest, _super);
    function BatchExecuteStatementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchExecuteStatementHeaders)
    ], BatchExecuteStatementRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchExecuteStatementRequestBody)
    ], BatchExecuteStatementRequest.prototype, "request", void 0);
    return BatchExecuteStatementRequest;
}(SpeakeasyBase));
export { BatchExecuteStatementRequest };
var BatchExecuteStatementResponse = /** @class */ (function (_super) {
    __extends(BatchExecuteStatementResponse, _super);
    function BatchExecuteStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchExecuteStatementResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchExecuteStatementResponse)
    ], BatchExecuteStatementResponse.prototype, "batchExecuteStatementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchExecuteStatementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchExecuteStatementResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchExecuteStatementResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchExecuteStatementResponse.prototype, "serviceUnavailableError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], BatchExecuteStatementResponse.prototype, "statementTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchExecuteStatementResponse.prototype, "statusCode", void 0);
    return BatchExecuteStatementResponse;
}(SpeakeasyBase));
export { BatchExecuteStatementResponse };
