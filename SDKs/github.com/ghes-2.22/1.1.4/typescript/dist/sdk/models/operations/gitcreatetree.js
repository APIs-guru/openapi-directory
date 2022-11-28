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
var GitCreateTreePathParams = /** @class */ (function (_super) {
    __extends(GitCreateTreePathParams, _super);
    function GitCreateTreePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateTreePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateTreePathParams.prototype, "repo", void 0);
    return GitCreateTreePathParams;
}(SpeakeasyBase));
export { GitCreateTreePathParams };
export var GitCreateTreeRequestBodyTreeModeEnum;
(function (GitCreateTreeRequestBodyTreeModeEnum) {
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredThousandSixHundredAndFortyFour"] = "100644";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredThousandSevenHundredAndFiftyFive"] = "100755";
    GitCreateTreeRequestBodyTreeModeEnum["FortyThousand"] = "040000";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredAndSixtyThousand"] = "160000";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredAndTwentyThousand"] = "120000";
})(GitCreateTreeRequestBodyTreeModeEnum || (GitCreateTreeRequestBodyTreeModeEnum = {}));
export var GitCreateTreeRequestBodyTreeTypeEnum;
(function (GitCreateTreeRequestBodyTreeTypeEnum) {
    GitCreateTreeRequestBodyTreeTypeEnum["Blob"] = "blob";
    GitCreateTreeRequestBodyTreeTypeEnum["Tree"] = "tree";
    GitCreateTreeRequestBodyTreeTypeEnum["Commit"] = "commit";
})(GitCreateTreeRequestBodyTreeTypeEnum || (GitCreateTreeRequestBodyTreeTypeEnum = {}));
var GitCreateTreeRequestBodyTree = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequestBodyTree, _super);
    function GitCreateTreeRequestBodyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "type", void 0);
    return GitCreateTreeRequestBodyTree;
}(SpeakeasyBase));
export { GitCreateTreeRequestBodyTree };
var GitCreateTreeRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequestBody, _super);
    function GitCreateTreeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_tree" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBody.prototype, "baseTree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree", elemType: GitCreateTreeRequestBodyTree }),
        __metadata("design:type", Array)
    ], GitCreateTreeRequestBody.prototype, "tree", void 0);
    return GitCreateTreeRequestBody;
}(SpeakeasyBase));
export { GitCreateTreeRequestBody };
var GitCreateTreeRequest = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequest, _super);
    function GitCreateTreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitCreateTreePathParams)
    ], GitCreateTreeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateTreeRequestBody)
    ], GitCreateTreeRequest.prototype, "request", void 0);
    return GitCreateTreeRequest;
}(SpeakeasyBase));
export { GitCreateTreeRequest };
var GitCreateTreeResponse = /** @class */ (function (_super) {
    __extends(GitCreateTreeResponse, _super);
    function GitCreateTreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitCreateTreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GitCreateTreeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitCreateTreeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GitCreateTreeResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GitTree)
    ], GitCreateTreeResponse.prototype, "gitTree", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateTreeResponse.prototype, "validationError", void 0);
    return GitCreateTreeResponse;
}(SpeakeasyBase));
export { GitCreateTreeResponse };
