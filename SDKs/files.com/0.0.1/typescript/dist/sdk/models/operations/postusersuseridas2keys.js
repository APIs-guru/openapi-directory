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
var PostUsersUserIdAs2KeysPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdAs2KeysPathParams, _super);
    function PostUsersUserIdAs2KeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], PostUsersUserIdAs2KeysPathParams.prototype, "userId", void 0);
    return PostUsersUserIdAs2KeysPathParams;
}(SpeakeasyBase));
export { PostUsersUserIdAs2KeysPathParams };
var PostUsersUserIdAs2KeysRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersUserIdAs2KeysRequestBody, _super);
    function PostUsersUserIdAs2KeysRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=as2_partnership_name" }),
        __metadata("design:type", String)
    ], PostUsersUserIdAs2KeysRequestBody.prototype, "as2PartnershipName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=public_key" }),
        __metadata("design:type", String)
    ], PostUsersUserIdAs2KeysRequestBody.prototype, "publicKey", void 0);
    return PostUsersUserIdAs2KeysRequestBody;
}(SpeakeasyBase));
export { PostUsersUserIdAs2KeysRequestBody };
var PostUsersUserIdAs2KeysRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserIdAs2KeysRequest, _super);
    function PostUsersUserIdAs2KeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdAs2KeysPathParams)
    ], PostUsersUserIdAs2KeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUsersUserIdAs2KeysRequestBody)
    ], PostUsersUserIdAs2KeysRequest.prototype, "request", void 0);
    return PostUsersUserIdAs2KeysRequest;
}(SpeakeasyBase));
export { PostUsersUserIdAs2KeysRequest };
var PostUsersUserIdAs2KeysResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserIdAs2KeysResponse, _super);
    function PostUsersUserIdAs2KeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.As2KeyEntity)
    ], PostUsersUserIdAs2KeysResponse.prototype, "as2KeyEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserIdAs2KeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserIdAs2KeysResponse.prototype, "statusCode", void 0);
    return PostUsersUserIdAs2KeysResponse;
}(SpeakeasyBase));
export { PostUsersUserIdAs2KeysResponse };
