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
var ReposGetBranchPathParams = /** @class */ (function (_super) {
    __extends(ReposGetBranchPathParams, _super);
    function ReposGetBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposGetBranchPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposGetBranchPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposGetBranchPathParams.prototype, "repo", void 0);
    return ReposGetBranchPathParams;
}(SpeakeasyBase));
export { ReposGetBranchPathParams };
var ReposGetBranch415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposGetBranch415ApplicationJson, _super);
    function ReposGetBranch415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposGetBranch415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposGetBranch415ApplicationJson.prototype, "message", void 0);
    return ReposGetBranch415ApplicationJson;
}(SpeakeasyBase));
export { ReposGetBranch415ApplicationJson };
var ReposGetBranchRequest = /** @class */ (function (_super) {
    __extends(ReposGetBranchRequest, _super);
    function ReposGetBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetBranchPathParams)
    ], ReposGetBranchRequest.prototype, "pathParams", void 0);
    return ReposGetBranchRequest;
}(SpeakeasyBase));
export { ReposGetBranchRequest };
var ReposGetBranchResponse = /** @class */ (function (_super) {
    __extends(ReposGetBranchResponse, _super);
    function ReposGetBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposGetBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposGetBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposGetBranchResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BranchWithProtection)
    ], ReposGetBranchResponse.prototype, "branchWithProtection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetBranch415ApplicationJson)
    ], ReposGetBranchResponse.prototype, "reposGetBranch415ApplicationJsonObject", void 0);
    return ReposGetBranchResponse;
}(SpeakeasyBase));
export { ReposGetBranchResponse };
