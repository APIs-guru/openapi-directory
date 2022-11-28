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
var ChecksUpdatePathParams = /** @class */ (function (_super) {
    __extends(ChecksUpdatePathParams, _super);
    function ChecksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_run_id" }),
        __metadata("design:type", Number)
    ], ChecksUpdatePathParams.prototype, "checkRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksUpdatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksUpdatePathParams.prototype, "repo", void 0);
    return ChecksUpdatePathParams;
}(SpeakeasyBase));
export { ChecksUpdatePathParams };
var ChecksUpdateRequestBodyActions = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequestBodyActions, _super);
    function ChecksUpdateRequestBodyActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyActions.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyActions.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyActions.prototype, "label", void 0);
    return ChecksUpdateRequestBodyActions;
}(SpeakeasyBase));
export { ChecksUpdateRequestBodyActions };
export var ChecksUpdateRequestBodyConclusionEnum;
(function (ChecksUpdateRequestBodyConclusionEnum) {
    ChecksUpdateRequestBodyConclusionEnum["ActionRequired"] = "action_required";
    ChecksUpdateRequestBodyConclusionEnum["Cancelled"] = "cancelled";
    ChecksUpdateRequestBodyConclusionEnum["Failure"] = "failure";
    ChecksUpdateRequestBodyConclusionEnum["Neutral"] = "neutral";
    ChecksUpdateRequestBodyConclusionEnum["Success"] = "success";
    ChecksUpdateRequestBodyConclusionEnum["Skipped"] = "skipped";
    ChecksUpdateRequestBodyConclusionEnum["Stale"] = "stale";
    ChecksUpdateRequestBodyConclusionEnum["TimedOut"] = "timed_out";
})(ChecksUpdateRequestBodyConclusionEnum || (ChecksUpdateRequestBodyConclusionEnum = {}));
export var ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum;
(function (ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum) {
    ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum["Notice"] = "notice";
    ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum["Warning"] = "warning";
    ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum["Failure"] = "failure";
})(ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum || (ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = {}));
var ChecksUpdateRequestBodyOutputAnnotations = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequestBodyOutputAnnotations, _super);
    function ChecksUpdateRequestBodyOutputAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation_level" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "annotationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_column" }),
        __metadata("design:type", Number)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "endColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_line" }),
        __metadata("design:type", Number)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "endLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_details" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "rawDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_column" }),
        __metadata("design:type", Number)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "startColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "startLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputAnnotations.prototype, "title", void 0);
    return ChecksUpdateRequestBodyOutputAnnotations;
}(SpeakeasyBase));
export { ChecksUpdateRequestBodyOutputAnnotations };
var ChecksUpdateRequestBodyOutputImages = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequestBodyOutputImages, _super);
    function ChecksUpdateRequestBodyOutputImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputImages.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputImages.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutputImages.prototype, "imageUrl", void 0);
    return ChecksUpdateRequestBodyOutputImages;
}(SpeakeasyBase));
export { ChecksUpdateRequestBodyOutputImages };
// ChecksUpdateRequestBodyOutput
/**
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#output-object-1) description.
**/
var ChecksUpdateRequestBodyOutput = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequestBodyOutput, _super);
    function ChecksUpdateRequestBodyOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: ChecksUpdateRequestBodyOutputAnnotations }),
        __metadata("design:type", Array)
    ], ChecksUpdateRequestBodyOutput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ChecksUpdateRequestBodyOutputImages }),
        __metadata("design:type", Array)
    ], ChecksUpdateRequestBodyOutput.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutput.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutput.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBodyOutput.prototype, "title", void 0);
    return ChecksUpdateRequestBodyOutput;
}(SpeakeasyBase));
export { ChecksUpdateRequestBodyOutput };
export var ChecksUpdateRequestBodyStatusEnum;
(function (ChecksUpdateRequestBodyStatusEnum) {
    ChecksUpdateRequestBodyStatusEnum["Queued"] = "queued";
    ChecksUpdateRequestBodyStatusEnum["InProgress"] = "in_progress";
    ChecksUpdateRequestBodyStatusEnum["Completed"] = "completed";
})(ChecksUpdateRequestBodyStatusEnum || (ChecksUpdateRequestBodyStatusEnum = {}));
var ChecksUpdateRequestBody = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequestBody, _super);
    function ChecksUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: ChecksUpdateRequestBodyActions }),
        __metadata("design:type", Array)
    ], ChecksUpdateRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], ChecksUpdateRequestBody.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBody.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details_url" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBody.prototype, "detailsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBody.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=output" }),
        __metadata("design:type", ChecksUpdateRequestBodyOutput)
    ], ChecksUpdateRequestBody.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], ChecksUpdateRequestBody.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChecksUpdateRequestBody.prototype, "status", void 0);
    return ChecksUpdateRequestBody;
}(SpeakeasyBase));
export { ChecksUpdateRequestBody };
var ChecksUpdateRequest = /** @class */ (function (_super) {
    __extends(ChecksUpdateRequest, _super);
    function ChecksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksUpdatePathParams)
    ], ChecksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChecksUpdateRequestBody)
    ], ChecksUpdateRequest.prototype, "request", void 0);
    return ChecksUpdateRequest;
}(SpeakeasyBase));
export { ChecksUpdateRequest };
var ChecksUpdateResponse = /** @class */ (function (_super) {
    __extends(ChecksUpdateResponse, _super);
    function ChecksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckRun)
    ], ChecksUpdateResponse.prototype, "checkRun", void 0);
    return ChecksUpdateResponse;
}(SpeakeasyBase));
export { ChecksUpdateResponse };
