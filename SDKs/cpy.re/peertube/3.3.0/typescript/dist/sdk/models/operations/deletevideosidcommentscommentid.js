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
var DeleteVideosIdCommentsCommentIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteVideosIdCommentsCommentIdPathParams, _super);
    function DeleteVideosIdCommentsCommentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", Number)
    ], DeleteVideosIdCommentsCommentIdPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], DeleteVideosIdCommentsCommentIdPathParams.prototype, "id", void 0);
    return DeleteVideosIdCommentsCommentIdPathParams;
}(SpeakeasyBase));
export { DeleteVideosIdCommentsCommentIdPathParams };
var DeleteVideosIdCommentsCommentIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteVideosIdCommentsCommentIdSecurity, _super);
    function DeleteVideosIdCommentsCommentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteVideosIdCommentsCommentIdSecurity.prototype, "oAuth2", void 0);
    return DeleteVideosIdCommentsCommentIdSecurity;
}(SpeakeasyBase));
export { DeleteVideosIdCommentsCommentIdSecurity };
var DeleteVideosIdCommentsCommentIdRequest = /** @class */ (function (_super) {
    __extends(DeleteVideosIdCommentsCommentIdRequest, _super);
    function DeleteVideosIdCommentsCommentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideosIdCommentsCommentIdPathParams)
    ], DeleteVideosIdCommentsCommentIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteVideosIdCommentsCommentIdSecurity)
    ], DeleteVideosIdCommentsCommentIdRequest.prototype, "security", void 0);
    return DeleteVideosIdCommentsCommentIdRequest;
}(SpeakeasyBase));
export { DeleteVideosIdCommentsCommentIdRequest };
var DeleteVideosIdCommentsCommentIdResponse = /** @class */ (function (_super) {
    __extends(DeleteVideosIdCommentsCommentIdResponse, _super);
    function DeleteVideosIdCommentsCommentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteVideosIdCommentsCommentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteVideosIdCommentsCommentIdResponse.prototype, "statusCode", void 0);
    return DeleteVideosIdCommentsCommentIdResponse;
}(SpeakeasyBase));
export { DeleteVideosIdCommentsCommentIdResponse };
