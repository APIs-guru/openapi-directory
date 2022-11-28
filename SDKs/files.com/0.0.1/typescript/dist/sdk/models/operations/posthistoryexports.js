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
var PostHistoryExportsRequestBody = /** @class */ (function (_super) {
    __extends(PostHistoryExportsRequestBody, _super);
    function PostHistoryExportsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=end_at" }),
        __metadata("design:type", Date)
    ], PostHistoryExportsRequestBody.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_action" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_destination" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_failure_type" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryFailureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_file_id" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_folder" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_interface" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_ip" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_parent_id" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryParentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_path" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_src" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "querySrc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_id" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_name" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_permission" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_permission_set" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetPermissionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_platform" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_user_id" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_target_username" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryTargetUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_user_id" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=query_username" }),
        __metadata("design:type", String)
    ], PostHistoryExportsRequestBody.prototype, "queryUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=start_at" }),
        __metadata("design:type", Date)
    ], PostHistoryExportsRequestBody.prototype, "startAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostHistoryExportsRequestBody.prototype, "userId", void 0);
    return PostHistoryExportsRequestBody;
}(SpeakeasyBase));
export { PostHistoryExportsRequestBody };
var PostHistoryExportsRequest = /** @class */ (function (_super) {
    __extends(PostHistoryExportsRequest, _super);
    function PostHistoryExportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostHistoryExportsRequestBody)
    ], PostHistoryExportsRequest.prototype, "request", void 0);
    return PostHistoryExportsRequest;
}(SpeakeasyBase));
export { PostHistoryExportsRequest };
var PostHistoryExportsResponse = /** @class */ (function (_super) {
    __extends(PostHistoryExportsResponse, _super);
    function PostHistoryExportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostHistoryExportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HistoryExportEntity)
    ], PostHistoryExportsResponse.prototype, "historyExportEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostHistoryExportsResponse.prototype, "statusCode", void 0);
    return PostHistoryExportsResponse;
}(SpeakeasyBase));
export { PostHistoryExportsResponse };
