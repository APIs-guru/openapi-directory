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
var CreateFindingsFilterHeaders = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterHeaders, _super);
    function CreateFindingsFilterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFindingsFilterHeaders;
}(SpeakeasyBase));
export { CreateFindingsFilterHeaders };
export var CreateFindingsFilterRequestBodyActionEnum;
(function (CreateFindingsFilterRequestBodyActionEnum) {
    CreateFindingsFilterRequestBodyActionEnum["Archive"] = "ARCHIVE";
    CreateFindingsFilterRequestBodyActionEnum["Noop"] = "NOOP";
})(CreateFindingsFilterRequestBodyActionEnum || (CreateFindingsFilterRequestBodyActionEnum = {}));
// CreateFindingsFilterRequestBodyFindingCriteria
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
var CreateFindingsFilterRequestBodyFindingCriteria = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterRequestBodyFindingCriteria, _super);
    function CreateFindingsFilterRequestBodyFindingCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties }),
        __metadata("design:type", Map)
    ], CreateFindingsFilterRequestBodyFindingCriteria.prototype, "criterion", void 0);
    return CreateFindingsFilterRequestBodyFindingCriteria;
}(SpeakeasyBase));
export { CreateFindingsFilterRequestBodyFindingCriteria };
var CreateFindingsFilterRequestBody = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterRequestBody, _super);
    function CreateFindingsFilterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingCriteria" }),
        __metadata("design:type", CreateFindingsFilterRequestBodyFindingCriteria)
    ], CreateFindingsFilterRequestBody.prototype, "findingCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFindingsFilterRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], CreateFindingsFilterRequestBody.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateFindingsFilterRequestBody.prototype, "tags", void 0);
    return CreateFindingsFilterRequestBody;
}(SpeakeasyBase));
export { CreateFindingsFilterRequestBody };
var CreateFindingsFilterRequest = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterRequest, _super);
    function CreateFindingsFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFindingsFilterHeaders)
    ], CreateFindingsFilterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFindingsFilterRequestBody)
    ], CreateFindingsFilterRequest.prototype, "request", void 0);
    return CreateFindingsFilterRequest;
}(SpeakeasyBase));
export { CreateFindingsFilterRequest };
var CreateFindingsFilterResponse = /** @class */ (function (_super) {
    __extends(CreateFindingsFilterResponse, _super);
    function CreateFindingsFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFindingsFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFindingsFilterResponse)
    ], CreateFindingsFilterResponse.prototype, "createFindingsFilterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFindingsFilterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFindingsFilterResponse.prototype, "validationException", void 0);
    return CreateFindingsFilterResponse;
}(SpeakeasyBase));
export { CreateFindingsFilterResponse };
