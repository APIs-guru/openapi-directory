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
var CreateSpaceTopicPathParams = /** @class */ (function (_super) {
    __extends(CreateSpaceTopicPathParams, _super);
    function CreateSpaceTopicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], CreateSpaceTopicPathParams.prototype, "spaceId", void 0);
    return CreateSpaceTopicPathParams;
}(SpeakeasyBase));
export { CreateSpaceTopicPathParams };
var CreateSpaceTopicRequestBody = /** @class */ (function (_super) {
    __extends(CreateSpaceTopicRequestBody, _super);
    function CreateSpaceTopicRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=attachments;" }),
        __metadata("design:type", Array)
    ], CreateSpaceTopicRequestBody.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=complex;" }),
        __metadata("design:type", Boolean)
    ], CreateSpaceTopicRequestBody.prototype, "complex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], CreateSpaceTopicRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=contentTags;" }),
        __metadata("design:type", Array)
    ], CreateSpaceTopicRequestBody.prototype, "contentTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=formMetaData;" }),
        __metadata("design:type", String)
    ], CreateSpaceTopicRequestBody.prototype, "formMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=mentionedUser;" }),
        __metadata("design:type", String)
    ], CreateSpaceTopicRequestBody.prototype, "mentionedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subject;" }),
        __metadata("design:type", String)
    ], CreateSpaceTopicRequestBody.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tags;" }),
        __metadata("design:type", Array)
    ], CreateSpaceTopicRequestBody.prototype, "tags", void 0);
    return CreateSpaceTopicRequestBody;
}(SpeakeasyBase));
export { CreateSpaceTopicRequestBody };
var CreateSpaceTopicSecurity = /** @class */ (function (_super) {
    __extends(CreateSpaceTopicSecurity, _super);
    function CreateSpaceTopicSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateSpaceTopicSecurity.prototype, "oauth", void 0);
    return CreateSpaceTopicSecurity;
}(SpeakeasyBase));
export { CreateSpaceTopicSecurity };
var CreateSpaceTopicRequest = /** @class */ (function (_super) {
    __extends(CreateSpaceTopicRequest, _super);
    function CreateSpaceTopicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSpaceTopicPathParams)
    ], CreateSpaceTopicRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSpaceTopicRequestBody)
    ], CreateSpaceTopicRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSpaceTopicSecurity)
    ], CreateSpaceTopicRequest.prototype, "security", void 0);
    return CreateSpaceTopicRequest;
}(SpeakeasyBase));
export { CreateSpaceTopicRequest };
var CreateSpaceTopicResponse = /** @class */ (function (_super) {
    __extends(CreateSpaceTopicResponse, _super);
    function CreateSpaceTopicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateSpaceTopicResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSpaceTopicResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSpaceTopicResponse.prototype, "spaceTopic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSpaceTopicResponse.prototype, "statusCode", void 0);
    return CreateSpaceTopicResponse;
}(SpeakeasyBase));
export { CreateSpaceTopicResponse };
