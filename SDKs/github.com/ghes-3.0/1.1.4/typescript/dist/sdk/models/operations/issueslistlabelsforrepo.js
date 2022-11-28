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
var IssuesListLabelsForRepoPathParams = /** @class */ (function (_super) {
    __extends(IssuesListLabelsForRepoPathParams, _super);
    function IssuesListLabelsForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesListLabelsForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesListLabelsForRepoPathParams.prototype, "repo", void 0);
    return IssuesListLabelsForRepoPathParams;
}(SpeakeasyBase));
export { IssuesListLabelsForRepoPathParams };
var IssuesListLabelsForRepoQueryParams = /** @class */ (function (_super) {
    __extends(IssuesListLabelsForRepoQueryParams, _super);
    function IssuesListLabelsForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], IssuesListLabelsForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], IssuesListLabelsForRepoQueryParams.prototype, "perPage", void 0);
    return IssuesListLabelsForRepoQueryParams;
}(SpeakeasyBase));
export { IssuesListLabelsForRepoQueryParams };
var IssuesListLabelsForRepoRequest = /** @class */ (function (_super) {
    __extends(IssuesListLabelsForRepoRequest, _super);
    function IssuesListLabelsForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListLabelsForRepoPathParams)
    ], IssuesListLabelsForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IssuesListLabelsForRepoQueryParams)
    ], IssuesListLabelsForRepoRequest.prototype, "queryParams", void 0);
    return IssuesListLabelsForRepoRequest;
}(SpeakeasyBase));
export { IssuesListLabelsForRepoRequest };
var IssuesListLabelsForRepoResponse = /** @class */ (function (_super) {
    __extends(IssuesListLabelsForRepoResponse, _super);
    function IssuesListLabelsForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IssuesListLabelsForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], IssuesListLabelsForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IssuesListLabelsForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], IssuesListLabelsForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Label }),
        __metadata("design:type", Array)
    ], IssuesListLabelsForRepoResponse.prototype, "labels", void 0);
    return IssuesListLabelsForRepoResponse;
}(SpeakeasyBase));
export { IssuesListLabelsForRepoResponse };
