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
var PostUsersMeHistoryVideosRemoveRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersMeHistoryVideosRemoveRequestBody, _super);
    function PostUsersMeHistoryVideosRemoveRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=beforeDate" }),
        __metadata("design:type", Date)
    ], PostUsersMeHistoryVideosRemoveRequestBody.prototype, "beforeDate", void 0);
    return PostUsersMeHistoryVideosRemoveRequestBody;
}(SpeakeasyBase));
export { PostUsersMeHistoryVideosRemoveRequestBody };
var PostUsersMeHistoryVideosRemoveSecurity = /** @class */ (function (_super) {
    __extends(PostUsersMeHistoryVideosRemoveSecurity, _super);
    function PostUsersMeHistoryVideosRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostUsersMeHistoryVideosRemoveSecurity.prototype, "oAuth2", void 0);
    return PostUsersMeHistoryVideosRemoveSecurity;
}(SpeakeasyBase));
export { PostUsersMeHistoryVideosRemoveSecurity };
var PostUsersMeHistoryVideosRemoveRequest = /** @class */ (function (_super) {
    __extends(PostUsersMeHistoryVideosRemoveRequest, _super);
    function PostUsersMeHistoryVideosRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUsersMeHistoryVideosRemoveRequestBody)
    ], PostUsersMeHistoryVideosRemoveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersMeHistoryVideosRemoveSecurity)
    ], PostUsersMeHistoryVideosRemoveRequest.prototype, "security", void 0);
    return PostUsersMeHistoryVideosRemoveRequest;
}(SpeakeasyBase));
export { PostUsersMeHistoryVideosRemoveRequest };
var PostUsersMeHistoryVideosRemoveResponse = /** @class */ (function (_super) {
    __extends(PostUsersMeHistoryVideosRemoveResponse, _super);
    function PostUsersMeHistoryVideosRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersMeHistoryVideosRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersMeHistoryVideosRemoveResponse.prototype, "statusCode", void 0);
    return PostUsersMeHistoryVideosRemoveResponse;
}(SpeakeasyBase));
export { PostUsersMeHistoryVideosRemoveResponse };
