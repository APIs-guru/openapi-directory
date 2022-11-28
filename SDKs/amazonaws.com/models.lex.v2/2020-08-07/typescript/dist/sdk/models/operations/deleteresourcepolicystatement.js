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
var DeleteResourcePolicyStatementPathParams = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementPathParams, _super);
    function DeleteResourcePolicyStatementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementPathParams.prototype, "resourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=statementId" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementPathParams.prototype, "statementId", void 0);
    return DeleteResourcePolicyStatementPathParams;
}(SpeakeasyBase));
export { DeleteResourcePolicyStatementPathParams };
var DeleteResourcePolicyStatementQueryParams = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementQueryParams, _super);
    function DeleteResourcePolicyStatementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expectedRevisionId" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementQueryParams.prototype, "expectedRevisionId", void 0);
    return DeleteResourcePolicyStatementQueryParams;
}(SpeakeasyBase));
export { DeleteResourcePolicyStatementQueryParams };
var DeleteResourcePolicyStatementHeaders = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementHeaders, _super);
    function DeleteResourcePolicyStatementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteResourcePolicyStatementHeaders;
}(SpeakeasyBase));
export { DeleteResourcePolicyStatementHeaders };
var DeleteResourcePolicyStatementRequest = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementRequest, _super);
    function DeleteResourcePolicyStatementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteResourcePolicyStatementPathParams)
    ], DeleteResourcePolicyStatementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteResourcePolicyStatementQueryParams)
    ], DeleteResourcePolicyStatementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteResourcePolicyStatementHeaders)
    ], DeleteResourcePolicyStatementRequest.prototype, "headers", void 0);
    return DeleteResourcePolicyStatementRequest;
}(SpeakeasyBase));
export { DeleteResourcePolicyStatementRequest };
var DeleteResourcePolicyStatementResponse = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyStatementResponse, _super);
    function DeleteResourcePolicyStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteResourcePolicyStatementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteResourcePolicyStatementResponse)
    ], DeleteResourcePolicyStatementResponse.prototype, "deleteResourcePolicyStatementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteResourcePolicyStatementResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteResourcePolicyStatementResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteResourcePolicyStatementResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteResourcePolicyStatementResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteResourcePolicyStatementResponse.prototype, "throttlingException", void 0);
    return DeleteResourcePolicyStatementResponse;
}(SpeakeasyBase));
export { DeleteResourcePolicyStatementResponse };
