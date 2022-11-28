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
var ReposRenameBranchPathParams = /** @class */ (function (_super) {
    __extends(ReposRenameBranchPathParams, _super);
    function ReposRenameBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposRenameBranchPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposRenameBranchPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposRenameBranchPathParams.prototype, "repo", void 0);
    return ReposRenameBranchPathParams;
}(SpeakeasyBase));
export { ReposRenameBranchPathParams };
var ReposRenameBranchRequestBody = /** @class */ (function (_super) {
    __extends(ReposRenameBranchRequestBody, _super);
    function ReposRenameBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_name" }),
        __metadata("design:type", String)
    ], ReposRenameBranchRequestBody.prototype, "newName", void 0);
    return ReposRenameBranchRequestBody;
}(SpeakeasyBase));
export { ReposRenameBranchRequestBody };
var ReposRenameBranchRequest = /** @class */ (function (_super) {
    __extends(ReposRenameBranchRequest, _super);
    function ReposRenameBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposRenameBranchPathParams)
    ], ReposRenameBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposRenameBranchRequestBody)
    ], ReposRenameBranchRequest.prototype, "request", void 0);
    return ReposRenameBranchRequest;
}(SpeakeasyBase));
export { ReposRenameBranchRequest };
var ReposRenameBranchResponse = /** @class */ (function (_super) {
    __extends(ReposRenameBranchResponse, _super);
    function ReposRenameBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposRenameBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposRenameBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposRenameBranchResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BranchWithProtection)
    ], ReposRenameBranchResponse.prototype, "branchWithProtection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposRenameBranchResponse.prototype, "validationError", void 0);
    return ReposRenameBranchResponse;
}(SpeakeasyBase));
export { ReposRenameBranchResponse };
