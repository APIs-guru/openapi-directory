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
var PullsCreatePathParams = /** @class */ (function (_super) {
    __extends(PullsCreatePathParams, _super);
    function PullsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsCreatePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsCreatePathParams.prototype, "repo", void 0);
    return PullsCreatePathParams;
}(SpeakeasyBase));
export { PullsCreatePathParams };
var PullsCreateRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateRequestBody, _super);
    function PullsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", String)
    ], PullsCreateRequestBody.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], PullsCreateRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=draft" }),
        __metadata("design:type", Boolean)
    ], PullsCreateRequestBody.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head" }),
        __metadata("design:type", String)
    ], PullsCreateRequestBody.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue" }),
        __metadata("design:type", Number)
    ], PullsCreateRequestBody.prototype, "issue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" }),
        __metadata("design:type", Boolean)
    ], PullsCreateRequestBody.prototype, "maintainerCanModify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PullsCreateRequestBody.prototype, "title", void 0);
    return PullsCreateRequestBody;
}(SpeakeasyBase));
export { PullsCreateRequestBody };
var PullsCreateRequest = /** @class */ (function (_super) {
    __extends(PullsCreateRequest, _super);
    function PullsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PullsCreatePathParams)
    ], PullsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateRequestBody)
    ], PullsCreateRequest.prototype, "request", void 0);
    return PullsCreateRequest;
}(SpeakeasyBase));
export { PullsCreateRequest };
var PullsCreateResponse = /** @class */ (function (_super) {
    __extends(PullsCreateResponse, _super);
    function PullsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PullsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PullsCreateResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PullsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], PullsCreateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullRequest)
    ], PullsCreateResponse.prototype, "pullRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], PullsCreateResponse.prototype, "validationError", void 0);
    return PullsCreateResponse;
}(SpeakeasyBase));
export { PullsCreateResponse };
