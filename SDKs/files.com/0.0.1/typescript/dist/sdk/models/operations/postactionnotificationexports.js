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
var PostActionNotificationExportsRequestBody = /** @class */ (function (_super) {
    __extends(PostActionNotificationExportsRequestBody, _super);
    function PostActionNotificationExportsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=end_at" }),
        __metadata("design:type", Date)
    ], PostActionNotificationExportsRequestBody.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_folder" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_message" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_path" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_request_method" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryRequestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_request_url" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_status" }),
        __metadata("design:type", String)
    ], PostActionNotificationExportsRequestBody.prototype, "queryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_success" }),
        __metadata("design:type", Boolean)
    ], PostActionNotificationExportsRequestBody.prototype, "querySuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=start_at" }),
        __metadata("design:type", Date)
    ], PostActionNotificationExportsRequestBody.prototype, "startAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostActionNotificationExportsRequestBody.prototype, "userId", void 0);
    return PostActionNotificationExportsRequestBody;
}(SpeakeasyBase));
export { PostActionNotificationExportsRequestBody };
var PostActionNotificationExportsRequest = /** @class */ (function (_super) {
    __extends(PostActionNotificationExportsRequest, _super);
    function PostActionNotificationExportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostActionNotificationExportsRequestBody)
    ], PostActionNotificationExportsRequest.prototype, "request", void 0);
    return PostActionNotificationExportsRequest;
}(SpeakeasyBase));
export { PostActionNotificationExportsRequest };
var PostActionNotificationExportsResponse = /** @class */ (function (_super) {
    __extends(PostActionNotificationExportsResponse, _super);
    function PostActionNotificationExportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActionNotificationExportEntity)
    ], PostActionNotificationExportsResponse.prototype, "actionNotificationExportEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostActionNotificationExportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostActionNotificationExportsResponse.prototype, "statusCode", void 0);
    return PostActionNotificationExportsResponse;
}(SpeakeasyBase));
export { PostActionNotificationExportsResponse };
