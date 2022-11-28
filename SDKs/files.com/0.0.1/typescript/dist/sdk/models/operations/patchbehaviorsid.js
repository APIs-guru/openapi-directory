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
var PatchBehaviorsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchBehaviorsIdPathParams, _super);
    function PatchBehaviorsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchBehaviorsIdPathParams.prototype, "id", void 0);
    return PatchBehaviorsIdPathParams;
}(SpeakeasyBase));
export { PatchBehaviorsIdPathParams };
var PatchBehaviorsIdRequestBodyAttachmentFile = /** @class */ (function (_super) {
    __extends(PatchBehaviorsIdRequestBodyAttachmentFile, _super);
    function PatchBehaviorsIdRequestBodyAttachmentFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachment_file" }),
        __metadata("design:type", String)
    ], PatchBehaviorsIdRequestBodyAttachmentFile.prototype, "attachmentFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchBehaviorsIdRequestBodyAttachmentFile.prototype, "content", void 0);
    return PatchBehaviorsIdRequestBodyAttachmentFile;
}(SpeakeasyBase));
export { PatchBehaviorsIdRequestBodyAttachmentFile };
var PatchBehaviorsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchBehaviorsIdRequestBody, _super);
    function PatchBehaviorsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchBehaviorsIdRequestBodyAttachmentFile)
    ], PatchBehaviorsIdRequestBody.prototype, "attachmentFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=behavior" }),
        __metadata("design:type", String)
    ], PatchBehaviorsIdRequestBody.prototype, "behavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PatchBehaviorsIdRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=value" }),
        __metadata("design:type", String)
    ], PatchBehaviorsIdRequestBody.prototype, "value", void 0);
    return PatchBehaviorsIdRequestBody;
}(SpeakeasyBase));
export { PatchBehaviorsIdRequestBody };
var PatchBehaviorsIdRequest = /** @class */ (function (_super) {
    __extends(PatchBehaviorsIdRequest, _super);
    function PatchBehaviorsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchBehaviorsIdPathParams)
    ], PatchBehaviorsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchBehaviorsIdRequestBody)
    ], PatchBehaviorsIdRequest.prototype, "request", void 0);
    return PatchBehaviorsIdRequest;
}(SpeakeasyBase));
export { PatchBehaviorsIdRequest };
var PatchBehaviorsIdResponse = /** @class */ (function (_super) {
    __extends(PatchBehaviorsIdResponse, _super);
    function PatchBehaviorsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BehaviorEntity)
    ], PatchBehaviorsIdResponse.prototype, "behaviorEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchBehaviorsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchBehaviorsIdResponse.prototype, "statusCode", void 0);
    return PatchBehaviorsIdResponse;
}(SpeakeasyBase));
export { PatchBehaviorsIdResponse };
