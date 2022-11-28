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
var ExecuteStatementHeaders = /** @class */ (function (_super) {
    __extends(ExecuteStatementHeaders, _super);
    function ExecuteStatementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ExecuteStatementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ExecuteStatementHeaders;
}(SpeakeasyBase));
export { ExecuteStatementHeaders };
// ExecuteStatementRequestBodyResultSetOptions
/**
 * Options that control how the result set is returned.
**/
var ExecuteStatementRequestBodyResultSetOptions = /** @class */ (function (_super) {
    __extends(ExecuteStatementRequestBodyResultSetOptions, _super);
    function ExecuteStatementRequestBodyResultSetOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decimalReturnType" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBodyResultSetOptions.prototype, "decimalReturnType", void 0);
    return ExecuteStatementRequestBodyResultSetOptions;
}(SpeakeasyBase));
export { ExecuteStatementRequestBodyResultSetOptions };
var ExecuteStatementRequestBody = /** @class */ (function (_super) {
    __extends(ExecuteStatementRequestBody, _super);
    function ExecuteStatementRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueAfterTimeout" }),
        __metadata("design:type", Boolean)
    ], ExecuteStatementRequestBody.prototype, "continueAfterTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeResultMetadata" }),
        __metadata("design:type", Boolean)
    ], ExecuteStatementRequestBody.prototype, "includeResultMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.SqlParameter }),
        __metadata("design:type", Array)
    ], ExecuteStatementRequestBody.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceArn" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultSetOptions" }),
        __metadata("design:type", ExecuteStatementRequestBodyResultSetOptions)
    ], ExecuteStatementRequestBody.prototype, "resultSetOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretArn" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "secretArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "sql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], ExecuteStatementRequestBody.prototype, "transactionId", void 0);
    return ExecuteStatementRequestBody;
}(SpeakeasyBase));
export { ExecuteStatementRequestBody };
var ExecuteStatementRequest = /** @class */ (function (_super) {
    __extends(ExecuteStatementRequest, _super);
    function ExecuteStatementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExecuteStatementHeaders)
    ], ExecuteStatementRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ExecuteStatementRequestBody)
    ], ExecuteStatementRequest.prototype, "request", void 0);
    return ExecuteStatementRequest;
}(SpeakeasyBase));
export { ExecuteStatementRequest };
var ExecuteStatementResponse = /** @class */ (function (_super) {
    __extends(ExecuteStatementResponse, _super);
    function ExecuteStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteStatementResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExecuteStatementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExecuteStatementResponse)
    ], ExecuteStatementResponse.prototype, "executeStatementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteStatementResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteStatementResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteStatementResponse.prototype, "serviceUnavailableError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ExecuteStatementResponse.prototype, "statementTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExecuteStatementResponse.prototype, "statusCode", void 0);
    return ExecuteStatementResponse;
}(SpeakeasyBase));
export { ExecuteStatementResponse };
