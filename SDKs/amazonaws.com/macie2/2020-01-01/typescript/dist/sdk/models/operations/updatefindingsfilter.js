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
var UpdateFindingsFilterPathParams = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterPathParams, _super);
    function UpdateFindingsFilterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterPathParams.prototype, "id", void 0);
    return UpdateFindingsFilterPathParams;
}(SpeakeasyBase));
export { UpdateFindingsFilterPathParams };
var UpdateFindingsFilterHeaders = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterHeaders, _super);
    function UpdateFindingsFilterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFindingsFilterHeaders;
}(SpeakeasyBase));
export { UpdateFindingsFilterHeaders };
export var UpdateFindingsFilterRequestBodyActionEnum;
(function (UpdateFindingsFilterRequestBodyActionEnum) {
    UpdateFindingsFilterRequestBodyActionEnum["Archive"] = "ARCHIVE";
    UpdateFindingsFilterRequestBodyActionEnum["Noop"] = "NOOP";
})(UpdateFindingsFilterRequestBodyActionEnum || (UpdateFindingsFilterRequestBodyActionEnum = {}));
// UpdateFindingsFilterRequestBodyFindingCriteria
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
var UpdateFindingsFilterRequestBodyFindingCriteria = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterRequestBodyFindingCriteria, _super);
    function UpdateFindingsFilterRequestBodyFindingCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties }),
        __metadata("design:type", Map)
    ], UpdateFindingsFilterRequestBodyFindingCriteria.prototype, "criterion", void 0);
    return UpdateFindingsFilterRequestBodyFindingCriteria;
}(SpeakeasyBase));
export { UpdateFindingsFilterRequestBodyFindingCriteria };
var UpdateFindingsFilterRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterRequestBody, _super);
    function UpdateFindingsFilterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterRequestBody.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findingCriteria" }),
        __metadata("design:type", UpdateFindingsFilterRequestBodyFindingCriteria)
    ], UpdateFindingsFilterRequestBody.prototype, "findingCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateFindingsFilterRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], UpdateFindingsFilterRequestBody.prototype, "position", void 0);
    return UpdateFindingsFilterRequestBody;
}(SpeakeasyBase));
export { UpdateFindingsFilterRequestBody };
var UpdateFindingsFilterRequest = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterRequest, _super);
    function UpdateFindingsFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFindingsFilterPathParams)
    ], UpdateFindingsFilterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFindingsFilterHeaders)
    ], UpdateFindingsFilterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFindingsFilterRequestBody)
    ], UpdateFindingsFilterRequest.prototype, "request", void 0);
    return UpdateFindingsFilterRequest;
}(SpeakeasyBase));
export { UpdateFindingsFilterRequest };
var UpdateFindingsFilterResponse = /** @class */ (function (_super) {
    __extends(UpdateFindingsFilterResponse, _super);
    function UpdateFindingsFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFindingsFilterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFindingsFilterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateFindingsFilterResponse)
    ], UpdateFindingsFilterResponse.prototype, "updateFindingsFilterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFindingsFilterResponse.prototype, "validationException", void 0);
    return UpdateFindingsFilterResponse;
}(SpeakeasyBase));
export { UpdateFindingsFilterResponse };
