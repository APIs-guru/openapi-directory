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
export var PostClickwrapsRequestBodyUseWithBundlesEnum;
(function (PostClickwrapsRequestBodyUseWithBundlesEnum) {
    PostClickwrapsRequestBodyUseWithBundlesEnum["None"] = "none";
    PostClickwrapsRequestBodyUseWithBundlesEnum["Available"] = "available";
    PostClickwrapsRequestBodyUseWithBundlesEnum["Require"] = "require";
})(PostClickwrapsRequestBodyUseWithBundlesEnum || (PostClickwrapsRequestBodyUseWithBundlesEnum = {}));
export var PostClickwrapsRequestBodyUseWithInboxesEnum;
(function (PostClickwrapsRequestBodyUseWithInboxesEnum) {
    PostClickwrapsRequestBodyUseWithInboxesEnum["None"] = "none";
    PostClickwrapsRequestBodyUseWithInboxesEnum["Available"] = "available";
    PostClickwrapsRequestBodyUseWithInboxesEnum["Require"] = "require";
})(PostClickwrapsRequestBodyUseWithInboxesEnum || (PostClickwrapsRequestBodyUseWithInboxesEnum = {}));
export var PostClickwrapsRequestBodyUseWithUsersEnum;
(function (PostClickwrapsRequestBodyUseWithUsersEnum) {
    PostClickwrapsRequestBodyUseWithUsersEnum["None"] = "none";
    PostClickwrapsRequestBodyUseWithUsersEnum["Require"] = "require";
})(PostClickwrapsRequestBodyUseWithUsersEnum || (PostClickwrapsRequestBodyUseWithUsersEnum = {}));
var PostClickwrapsRequestBody = /** @class */ (function (_super) {
    __extends(PostClickwrapsRequestBody, _super);
    function PostClickwrapsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=body" }),
        __metadata("design:type", String)
    ], PostClickwrapsRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostClickwrapsRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_bundles" }),
        __metadata("design:type", String)
    ], PostClickwrapsRequestBody.prototype, "useWithBundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_inboxes" }),
        __metadata("design:type", String)
    ], PostClickwrapsRequestBody.prototype, "useWithInboxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_users" }),
        __metadata("design:type", String)
    ], PostClickwrapsRequestBody.prototype, "useWithUsers", void 0);
    return PostClickwrapsRequestBody;
}(SpeakeasyBase));
export { PostClickwrapsRequestBody };
var PostClickwrapsRequest = /** @class */ (function (_super) {
    __extends(PostClickwrapsRequest, _super);
    function PostClickwrapsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostClickwrapsRequestBody)
    ], PostClickwrapsRequest.prototype, "request", void 0);
    return PostClickwrapsRequest;
}(SpeakeasyBase));
export { PostClickwrapsRequest };
var PostClickwrapsResponse = /** @class */ (function (_super) {
    __extends(PostClickwrapsResponse, _super);
    function PostClickwrapsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClickwrapEntity)
    ], PostClickwrapsResponse.prototype, "clickwrapEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostClickwrapsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostClickwrapsResponse.prototype, "statusCode", void 0);
    return PostClickwrapsResponse;
}(SpeakeasyBase));
export { PostClickwrapsResponse };
