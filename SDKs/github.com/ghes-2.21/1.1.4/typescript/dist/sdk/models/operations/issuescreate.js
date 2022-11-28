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
var IssuesCreatePathParams = /** @class */ (function (_super) {
    __extends(IssuesCreatePathParams, _super);
    function IssuesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesCreatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesCreatePathParams.prototype, "repo", void 0);
    return IssuesCreatePathParams;
}(SpeakeasyBase));
export { IssuesCreatePathParams };
var IssuesCreateRequestBodyLabels2 = /** @class */ (function (_super) {
    __extends(IssuesCreateRequestBodyLabels2, _super);
    function IssuesCreateRequestBodyLabels2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], IssuesCreateRequestBodyLabels2.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssuesCreateRequestBodyLabels2.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IssuesCreateRequestBodyLabels2.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesCreateRequestBodyLabels2.prototype, "name", void 0);
    return IssuesCreateRequestBodyLabels2;
}(SpeakeasyBase));
export { IssuesCreateRequestBodyLabels2 };
var IssuesCreateRequestBody = /** @class */ (function (_super) {
    __extends(IssuesCreateRequestBody, _super);
    function IssuesCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", String)
    ], IssuesCreateRequestBody.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignees" }),
        __metadata("design:type", Array)
    ], IssuesCreateRequestBody.prototype, "assignees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], IssuesCreateRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], IssuesCreateRequestBody.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=milestone" }),
        __metadata("design:type", Object)
    ], IssuesCreateRequestBody.prototype, "milestone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Object)
    ], IssuesCreateRequestBody.prototype, "title", void 0);
    return IssuesCreateRequestBody;
}(SpeakeasyBase));
export { IssuesCreateRequestBody };
var IssuesCreate503ApplicationJson = /** @class */ (function (_super) {
    __extends(IssuesCreate503ApplicationJson, _super);
    function IssuesCreate503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], IssuesCreate503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], IssuesCreate503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], IssuesCreate503ApplicationJson.prototype, "message", void 0);
    return IssuesCreate503ApplicationJson;
}(SpeakeasyBase));
export { IssuesCreate503ApplicationJson };
var IssuesCreateRequest = /** @class */ (function (_super) {
    __extends(IssuesCreateRequest, _super);
    function IssuesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesCreatePathParams)
    ], IssuesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesCreateRequestBody)
    ], IssuesCreateRequest.prototype, "request", void 0);
    return IssuesCreateRequest;
}(SpeakeasyBase));
export { IssuesCreateRequest };
var IssuesCreateResponse = /** @class */ (function (_super) {
    __extends(IssuesCreateResponse, _super);
    function IssuesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesCreateResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesCreateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Issue)
    ], IssuesCreateResponse.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesCreate503ApplicationJson)
    ], IssuesCreateResponse.prototype, "issuesCreate503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesCreateResponse.prototype, "validationError", void 0);
    return IssuesCreateResponse;
}(SpeakeasyBase));
export { IssuesCreateResponse };
