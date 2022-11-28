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
var PostBehaviorsRequestBodyAttachmentFile = /** @class */ (function (_super) {
    __extends(PostBehaviorsRequestBodyAttachmentFile, _super);
    function PostBehaviorsRequestBodyAttachmentFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachment_file" }),
        __metadata("design:type", String)
    ], PostBehaviorsRequestBodyAttachmentFile.prototype, "attachmentFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostBehaviorsRequestBodyAttachmentFile.prototype, "content", void 0);
    return PostBehaviorsRequestBodyAttachmentFile;
}(SpeakeasyBase));
export { PostBehaviorsRequestBodyAttachmentFile };
var PostBehaviorsRequestBody = /** @class */ (function (_super) {
    __extends(PostBehaviorsRequestBody, _super);
    function PostBehaviorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostBehaviorsRequestBodyAttachmentFile)
    ], PostBehaviorsRequestBody.prototype, "attachmentFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=behavior" }),
        __metadata("design:type", String)
    ], PostBehaviorsRequestBody.prototype, "behavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostBehaviorsRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=value" }),
        __metadata("design:type", String)
    ], PostBehaviorsRequestBody.prototype, "value", void 0);
    return PostBehaviorsRequestBody;
}(SpeakeasyBase));
export { PostBehaviorsRequestBody };
var PostBehaviorsRequest = /** @class */ (function (_super) {
    __extends(PostBehaviorsRequest, _super);
    function PostBehaviorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostBehaviorsRequestBody)
    ], PostBehaviorsRequest.prototype, "request", void 0);
    return PostBehaviorsRequest;
}(SpeakeasyBase));
export { PostBehaviorsRequest };
var PostBehaviorsResponse = /** @class */ (function (_super) {
    __extends(PostBehaviorsResponse, _super);
    function PostBehaviorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BehaviorEntity)
    ], PostBehaviorsResponse.prototype, "behaviorEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBehaviorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBehaviorsResponse.prototype, "statusCode", void 0);
    return PostBehaviorsResponse;
}(SpeakeasyBase));
export { PostBehaviorsResponse };
