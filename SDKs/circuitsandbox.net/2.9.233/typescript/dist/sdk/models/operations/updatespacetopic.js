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
var UpdateSpaceTopicPathParams = /** @class */ (function (_super) {
    __extends(UpdateSpaceTopicPathParams, _super);
    function UpdateSpaceTopicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], UpdateSpaceTopicPathParams.prototype, "spaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" }),
        __metadata("design:type", String)
    ], UpdateSpaceTopicPathParams.prototype, "topicId", void 0);
    return UpdateSpaceTopicPathParams;
}(SpeakeasyBase));
export { UpdateSpaceTopicPathParams };
var UpdateSpaceTopicRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSpaceTopicRequestBody, _super);
    function UpdateSpaceTopicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=attachments;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceTopicRequestBody.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=complex;" }),
        __metadata("design:type", Boolean)
    ], UpdateSpaceTopicRequestBody.prototype, "complex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], UpdateSpaceTopicRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contentTags;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceTopicRequestBody.prototype, "contentTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=formMetaData;" }),
        __metadata("design:type", String)
    ], UpdateSpaceTopicRequestBody.prototype, "formMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=mentionedUsers;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceTopicRequestBody.prototype, "mentionedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subject;" }),
        __metadata("design:type", String)
    ], UpdateSpaceTopicRequestBody.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tags;" }),
        __metadata("design:type", Array)
    ], UpdateSpaceTopicRequestBody.prototype, "tags", void 0);
    return UpdateSpaceTopicRequestBody;
}(SpeakeasyBase));
export { UpdateSpaceTopicRequestBody };
var UpdateSpaceTopicSecurity = /** @class */ (function (_super) {
    __extends(UpdateSpaceTopicSecurity, _super);
    function UpdateSpaceTopicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateSpaceTopicSecurity.prototype, "oauth", void 0);
    return UpdateSpaceTopicSecurity;
}(SpeakeasyBase));
export { UpdateSpaceTopicSecurity };
var UpdateSpaceTopicRequest = /** @class */ (function (_super) {
    __extends(UpdateSpaceTopicRequest, _super);
    function UpdateSpaceTopicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpaceTopicPathParams)
    ], UpdateSpaceTopicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSpaceTopicRequestBody)
    ], UpdateSpaceTopicRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSpaceTopicSecurity)
    ], UpdateSpaceTopicRequest.prototype, "security", void 0);
    return UpdateSpaceTopicRequest;
}(SpeakeasyBase));
export { UpdateSpaceTopicRequest };
var UpdateSpaceTopicResponse = /** @class */ (function (_super) {
    __extends(UpdateSpaceTopicResponse, _super);
    function UpdateSpaceTopicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateSpaceTopicResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSpaceTopicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateSpaceTopicResponse.prototype, "spaceTopic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSpaceTopicResponse.prototype, "statusCode", void 0);
    return UpdateSpaceTopicResponse;
}(SpeakeasyBase));
export { UpdateSpaceTopicResponse };
