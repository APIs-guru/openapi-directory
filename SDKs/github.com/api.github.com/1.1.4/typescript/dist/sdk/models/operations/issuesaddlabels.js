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
var IssuesAddLabelsPathParams = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsPathParams, _super);
    function IssuesAddLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], IssuesAddLabelsPathParams.prototype, "issueNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsPathParams.prototype, "repo", void 0);
    return IssuesAddLabelsPathParams;
}(SpeakeasyBase));
export { IssuesAddLabelsPathParams };
var IssuesAddLabelsRequestBody = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequestBody, _super);
    function IssuesAddLabelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], IssuesAddLabelsRequestBody.prototype, "labels", void 0);
    return IssuesAddLabelsRequestBody;
}(SpeakeasyBase));
export { IssuesAddLabelsRequestBody };
var IssuesAddLabelsRequest = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequest, _super);
    function IssuesAddLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesAddLabelsPathParams)
    ], IssuesAddLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesAddLabelsRequestBody)
    ], IssuesAddLabelsRequest.prototype, "request", void 0);
    return IssuesAddLabelsRequest;
}(SpeakeasyBase));
export { IssuesAddLabelsRequest };
var IssuesAddLabelsResponse = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsResponse, _super);
    function IssuesAddLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesAddLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesAddLabelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesAddLabelsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Label }),
        __metadata("design:type", Array)
    ], IssuesAddLabelsResponse.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesAddLabelsResponse.prototype, "validationError", void 0);
    return IssuesAddLabelsResponse;
}(SpeakeasyBase));
export { IssuesAddLabelsResponse };
