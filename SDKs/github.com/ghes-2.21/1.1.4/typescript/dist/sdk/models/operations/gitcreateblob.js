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
var GitCreateBlobPathParams = /** @class */ (function (_super) {
    __extends(GitCreateBlobPathParams, _super);
    function GitCreateBlobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateBlobPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateBlobPathParams.prototype, "repo", void 0);
    return GitCreateBlobPathParams;
}(SpeakeasyBase));
export { GitCreateBlobPathParams };
var GitCreateBlobRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateBlobRequestBody, _super);
    function GitCreateBlobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GitCreateBlobRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], GitCreateBlobRequestBody.prototype, "encoding", void 0);
    return GitCreateBlobRequestBody;
}(SpeakeasyBase));
export { GitCreateBlobRequestBody };
var GitCreateBlobRequest = /** @class */ (function (_super) {
    __extends(GitCreateBlobRequest, _super);
    function GitCreateBlobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GitCreateBlobPathParams)
    ], GitCreateBlobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateBlobRequestBody)
    ], GitCreateBlobRequest.prototype, "request", void 0);
    return GitCreateBlobRequest;
}(SpeakeasyBase));
export { GitCreateBlobRequest };
var GitCreateBlobResponse = /** @class */ (function (_super) {
    __extends(GitCreateBlobResponse, _super);
    function GitCreateBlobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GitCreateBlobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GitCreateBlobResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GitCreateBlobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GitCreateBlobResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ShortBlob)
    ], GitCreateBlobResponse.prototype, "shortBlob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateBlobResponse.prototype, "validationError", void 0);
    return GitCreateBlobResponse;
}(SpeakeasyBase));
export { GitCreateBlobResponse };
