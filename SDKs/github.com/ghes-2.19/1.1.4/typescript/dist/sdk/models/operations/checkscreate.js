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
var ChecksCreatePathParams = /** @class */ (function (_super) {
    __extends(ChecksCreatePathParams, _super);
    function ChecksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksCreatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksCreatePathParams.prototype, "repo", void 0);
    return ChecksCreatePathParams;
}(SpeakeasyBase));
export { ChecksCreatePathParams };
var ChecksCreateRequestBodyActions = /** @class */ (function (_super) {
    __extends(ChecksCreateRequestBodyActions, _super);
    function ChecksCreateRequestBodyActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyActions.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyActions.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyActions.prototype, "label", void 0);
    return ChecksCreateRequestBodyActions;
}(SpeakeasyBase));
export { ChecksCreateRequestBodyActions };
export var ChecksCreateRequestBodyConclusionEnum;
(function (ChecksCreateRequestBodyConclusionEnum) {
    ChecksCreateRequestBodyConclusionEnum["ActionRequired"] = "action_required";
    ChecksCreateRequestBodyConclusionEnum["Cancelled"] = "cancelled";
    ChecksCreateRequestBodyConclusionEnum["Failure"] = "failure";
    ChecksCreateRequestBodyConclusionEnum["Neutral"] = "neutral";
    ChecksCreateRequestBodyConclusionEnum["Success"] = "success";
    ChecksCreateRequestBodyConclusionEnum["Skipped"] = "skipped";
    ChecksCreateRequestBodyConclusionEnum["Stale"] = "stale";
    ChecksCreateRequestBodyConclusionEnum["TimedOut"] = "timed_out";
})(ChecksCreateRequestBodyConclusionEnum || (ChecksCreateRequestBodyConclusionEnum = {}));
export var ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum;
(function (ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum) {
    ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum["Notice"] = "notice";
    ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum["Warning"] = "warning";
    ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum["Failure"] = "failure";
})(ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum || (ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = {}));
var ChecksCreateRequestBodyOutputAnnotations = /** @class */ (function (_super) {
    __extends(ChecksCreateRequestBodyOutputAnnotations, _super);
    function ChecksCreateRequestBodyOutputAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation_level" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "annotationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_column" }),
        __metadata("design:type", Number)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "endColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_line" }),
        __metadata("design:type", Number)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "endLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_details" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "rawDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_column" }),
        __metadata("design:type", Number)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "startColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_line" }),
        __metadata("design:type", Number)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "startLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputAnnotations.prototype, "title", void 0);
    return ChecksCreateRequestBodyOutputAnnotations;
}(SpeakeasyBase));
export { ChecksCreateRequestBodyOutputAnnotations };
var ChecksCreateRequestBodyOutputImages = /** @class */ (function (_super) {
    __extends(ChecksCreateRequestBodyOutputImages, _super);
    function ChecksCreateRequestBodyOutputImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alt" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputImages.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputImages.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutputImages.prototype, "imageUrl", void 0);
    return ChecksCreateRequestBodyOutputImages;
}(SpeakeasyBase));
export { ChecksCreateRequestBodyOutputImages };
// ChecksCreateRequestBodyOutput
/**
 * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.19/rest/reference/checks#output-object) description.
**/
var ChecksCreateRequestBodyOutput = /** @class */ (function (_super) {
    __extends(ChecksCreateRequestBodyOutput, _super);
    function ChecksCreateRequestBodyOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: ChecksCreateRequestBodyOutputAnnotations }),
        __metadata("design:type", Array)
    ], ChecksCreateRequestBodyOutput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ChecksCreateRequestBodyOutputImages }),
        __metadata("design:type", Array)
    ], ChecksCreateRequestBodyOutput.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutput.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutput.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBodyOutput.prototype, "title", void 0);
    return ChecksCreateRequestBodyOutput;
}(SpeakeasyBase));
export { ChecksCreateRequestBodyOutput };
export var ChecksCreateRequestBodyStatusEnum;
(function (ChecksCreateRequestBodyStatusEnum) {
    ChecksCreateRequestBodyStatusEnum["Queued"] = "queued";
    ChecksCreateRequestBodyStatusEnum["InProgress"] = "in_progress";
    ChecksCreateRequestBodyStatusEnum["Completed"] = "completed";
})(ChecksCreateRequestBodyStatusEnum || (ChecksCreateRequestBodyStatusEnum = {}));
var ChecksCreateRequestBody = /** @class */ (function (_super) {
    __extends(ChecksCreateRequestBody, _super);
    function ChecksCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: ChecksCreateRequestBodyActions }),
        __metadata("design:type", Array)
    ], ChecksCreateRequestBody.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], ChecksCreateRequestBody.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusion" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "conclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details_url" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "detailsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head_sha" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "headSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=output" }),
        __metadata("design:type", ChecksCreateRequestBodyOutput)
    ], ChecksCreateRequestBody.prototype, "output", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], ChecksCreateRequestBody.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChecksCreateRequestBody.prototype, "status", void 0);
    return ChecksCreateRequestBody;
}(SpeakeasyBase));
export { ChecksCreateRequestBody };
var ChecksCreateRequest = /** @class */ (function (_super) {
    __extends(ChecksCreateRequest, _super);
    function ChecksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksCreatePathParams)
    ], ChecksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChecksCreateRequestBody)
    ], ChecksCreateRequest.prototype, "request", void 0);
    return ChecksCreateRequest;
}(SpeakeasyBase));
export { ChecksCreateRequest };
var ChecksCreateResponse = /** @class */ (function (_super) {
    __extends(ChecksCreateResponse, _super);
    function ChecksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckRun)
    ], ChecksCreateResponse.prototype, "checkRun", void 0);
    return ChecksCreateResponse;
}(SpeakeasyBase));
export { ChecksCreateResponse };
