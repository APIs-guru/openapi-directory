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
var IssuesUpdatePathParams = /** @class */ (function (_super) {
    __extends(IssuesUpdatePathParams, _super);
    function IssuesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], IssuesUpdatePathParams.prototype, "issueNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesUpdatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesUpdatePathParams.prototype, "repo", void 0);
    return IssuesUpdatePathParams;
}(SpeakeasyBase));
export { IssuesUpdatePathParams };
var IssuesUpdateRequestBodyLabels2 = /** @class */ (function (_super) {
    __extends(IssuesUpdateRequestBodyLabels2, _super);
    function IssuesUpdateRequestBodyLabels2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBodyLabels2.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBodyLabels2.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssuesUpdateRequestBodyLabels2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBodyLabels2.prototype, "name", void 0);
    return IssuesUpdateRequestBodyLabels2;
}(SpeakeasyBase));
export { IssuesUpdateRequestBodyLabels2 };
export var IssuesUpdateRequestBodyStateEnum;
(function (IssuesUpdateRequestBodyStateEnum) {
    IssuesUpdateRequestBodyStateEnum["Open"] = "open";
    IssuesUpdateRequestBodyStateEnum["Closed"] = "closed";
})(IssuesUpdateRequestBodyStateEnum || (IssuesUpdateRequestBodyStateEnum = {}));
var IssuesUpdateRequestBody = /** @class */ (function (_super) {
    __extends(IssuesUpdateRequestBody, _super);
    function IssuesUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBody.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees" }),
        __metadata("design:type", Array)
    ], IssuesUpdateRequestBody.prototype, "assignees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], IssuesUpdateRequestBody.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestone" }),
        __metadata("design:type", Object)
    ], IssuesUpdateRequestBody.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssuesUpdateRequestBody.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Object)
    ], IssuesUpdateRequestBody.prototype, "title", void 0);
    return IssuesUpdateRequestBody;
}(SpeakeasyBase));
export { IssuesUpdateRequestBody };
var IssuesUpdate503ApplicationJson = /** @class */ (function (_super) {
    __extends(IssuesUpdate503ApplicationJson, _super);
    function IssuesUpdate503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], IssuesUpdate503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], IssuesUpdate503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], IssuesUpdate503ApplicationJson.prototype, "message", void 0);
    return IssuesUpdate503ApplicationJson;
}(SpeakeasyBase));
export { IssuesUpdate503ApplicationJson };
var IssuesUpdateRequest = /** @class */ (function (_super) {
    __extends(IssuesUpdateRequest, _super);
    function IssuesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesUpdatePathParams)
    ], IssuesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesUpdateRequestBody)
    ], IssuesUpdateRequest.prototype, "request", void 0);
    return IssuesUpdateRequest;
}(SpeakeasyBase));
export { IssuesUpdateRequest };
var IssuesUpdateResponse = /** @class */ (function (_super) {
    __extends(IssuesUpdateResponse, _super);
    function IssuesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Issue)
    ], IssuesUpdateResponse.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesUpdate503ApplicationJson)
    ], IssuesUpdateResponse.prototype, "issuesUpdate503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesUpdateResponse.prototype, "validationError", void 0);
    return IssuesUpdateResponse;
}(SpeakeasyBase));
export { IssuesUpdateResponse };
