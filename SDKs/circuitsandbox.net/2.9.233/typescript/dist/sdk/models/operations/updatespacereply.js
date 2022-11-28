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
var UpdateSpaceReplyPathParams = /** @class */ (function (_super) {
    __extends(UpdateSpaceReplyPathParams, _super);
    function UpdateSpaceReplyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" }),
        __metadata("design:type", String)
    ], UpdateSpaceReplyPathParams.prototype, "replyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], UpdateSpaceReplyPathParams.prototype, "spaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" }),
        __metadata("design:type", String)
    ], UpdateSpaceReplyPathParams.prototype, "topicId", void 0);
    return UpdateSpaceReplyPathParams;
}(SpeakeasyBase));
export { UpdateSpaceReplyPathParams };
var UpdateSpaceReplyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSpaceReplyRequestBody, _super);
    function UpdateSpaceReplyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=attachments;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceReplyRequestBody.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=complex;" }),
        __metadata("design:type", Boolean)
    ], UpdateSpaceReplyRequestBody.prototype, "complex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], UpdateSpaceReplyRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=formMetaData;" }),
        __metadata("design:type", String)
    ], UpdateSpaceReplyRequestBody.prototype, "formMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=mentionedUsers;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceReplyRequestBody.prototype, "mentionedUsers", void 0);
    return UpdateSpaceReplyRequestBody;
}(SpeakeasyBase));
export { UpdateSpaceReplyRequestBody };
var UpdateSpaceReplySecurity = /** @class */ (function (_super) {
    __extends(UpdateSpaceReplySecurity, _super);
    function UpdateSpaceReplySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateSpaceReplySecurity.prototype, "oauth", void 0);
    return UpdateSpaceReplySecurity;
}(SpeakeasyBase));
export { UpdateSpaceReplySecurity };
var UpdateSpaceReplyRequest = /** @class */ (function (_super) {
    __extends(UpdateSpaceReplyRequest, _super);
    function UpdateSpaceReplyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpaceReplyPathParams)
    ], UpdateSpaceReplyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSpaceReplyRequestBody)
    ], UpdateSpaceReplyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpaceReplySecurity)
    ], UpdateSpaceReplyRequest.prototype, "security", void 0);
    return UpdateSpaceReplyRequest;
}(SpeakeasyBase));
export { UpdateSpaceReplyRequest };
var UpdateSpaceReplyResponse = /** @class */ (function (_super) {
    __extends(UpdateSpaceReplyResponse, _super);
    function UpdateSpaceReplyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateSpaceReplyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSpaceReplyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSpaceReplyResponse.prototype, "spaceReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSpaceReplyResponse.prototype, "statusCode", void 0);
    return UpdateSpaceReplyResponse;
}(SpeakeasyBase));
export { UpdateSpaceReplyResponse };
