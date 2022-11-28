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
var GitUpdateRefPathParams = /** @class */ (function (_super) {
    __extends(GitUpdateRefPathParams, _super);
    function GitUpdateRefPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitUpdateRefPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ref" }),
        __metadata("design:type", String)
    ], GitUpdateRefPathParams.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitUpdateRefPathParams.prototype, "repo", void 0);
    return GitUpdateRefPathParams;
}(SpeakeasyBase));
export { GitUpdateRefPathParams };
var GitUpdateRefRequestBody = /** @class */ (function (_super) {
    __extends(GitUpdateRefRequestBody, _super);
    function GitUpdateRefRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=force" }),
        __metadata("design:type", Boolean)
    ], GitUpdateRefRequestBody.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitUpdateRefRequestBody.prototype, "sha", void 0);
    return GitUpdateRefRequestBody;
}(SpeakeasyBase));
export { GitUpdateRefRequestBody };
var GitUpdateRefRequest = /** @class */ (function (_super) {
    __extends(GitUpdateRefRequest, _super);
    function GitUpdateRefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitUpdateRefPathParams)
    ], GitUpdateRefRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitUpdateRefRequestBody)
    ], GitUpdateRefRequest.prototype, "request", void 0);
    return GitUpdateRefRequest;
}(SpeakeasyBase));
export { GitUpdateRefRequest };
var GitUpdateRefResponse = /** @class */ (function (_super) {
    __extends(GitUpdateRefResponse, _super);
    function GitUpdateRefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitUpdateRefResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitUpdateRefResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GitRef)
    ], GitUpdateRefResponse.prototype, "gitRef", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GitUpdateRefResponse.prototype, "validationError", void 0);
    return GitUpdateRefResponse;
}(SpeakeasyBase));
export { GitUpdateRefResponse };
