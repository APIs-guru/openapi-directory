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
var BatchGeneratePdfV1PathParams = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfV1PathParams, _super);
    function BatchGeneratePdfV1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfV1PathParams.prototype, "templateId", void 0);
    return BatchGeneratePdfV1PathParams;
}(SpeakeasyBase));
export { BatchGeneratePdfV1PathParams };
var BatchGeneratePdfV1Security = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfV1Security, _super);
    function BatchGeneratePdfV1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], BatchGeneratePdfV1Security.prototype, "apiTokenBasic", void 0);
    return BatchGeneratePdfV1Security;
}(SpeakeasyBase));
export { BatchGeneratePdfV1Security };
export var BatchGeneratePdfV1CreateSubmissionResponseStatusEnum;
(function (BatchGeneratePdfV1CreateSubmissionResponseStatusEnum) {
    BatchGeneratePdfV1CreateSubmissionResponseStatusEnum["Success"] = "success";
    BatchGeneratePdfV1CreateSubmissionResponseStatusEnum["Error"] = "error";
})(BatchGeneratePdfV1CreateSubmissionResponseStatusEnum || (BatchGeneratePdfV1CreateSubmissionResponseStatusEnum = {}));
var BatchGeneratePdfV1CreateSubmissionResponse = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfV1CreateSubmissionResponse, _super);
    function BatchGeneratePdfV1CreateSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfV1CreateSubmissionResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfV1CreateSubmissionResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission" }),
        __metadata("design:type", shared.Submission)
    ], BatchGeneratePdfV1CreateSubmissionResponse.prototype, "submission", void 0);
    return BatchGeneratePdfV1CreateSubmissionResponse;
}(SpeakeasyBase));
export { BatchGeneratePdfV1CreateSubmissionResponse };
var BatchGeneratePdfV1Request = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfV1Request, _super);
    function BatchGeneratePdfV1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGeneratePdfV1PathParams)
    ], BatchGeneratePdfV1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfV1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGeneratePdfV1Security)
    ], BatchGeneratePdfV1Request.prototype, "security", void 0);
    return BatchGeneratePdfV1Request;
}(SpeakeasyBase));
export { BatchGeneratePdfV1Request };
var BatchGeneratePdfV1Response = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfV1Response, _super);
    function BatchGeneratePdfV1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchGeneratePdfV1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchGeneratePdfV1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], BatchGeneratePdfV1Response.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: BatchGeneratePdfV1CreateSubmissionResponse }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfV1Response.prototype, "createSubmissionResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], BatchGeneratePdfV1Response.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.InvalidRequest }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfV1Response.prototype, "invalidRequests", void 0);
    return BatchGeneratePdfV1Response;
}(SpeakeasyBase));
export { BatchGeneratePdfV1Response };
