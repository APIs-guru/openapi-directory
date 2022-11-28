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
var PostBundlesIdSharePathParams = /** @class */ (function (_super) {
    __extends(PostBundlesIdSharePathParams, _super);
    function PostBundlesIdSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostBundlesIdSharePathParams.prototype, "id", void 0);
    return PostBundlesIdSharePathParams;
}(SpeakeasyBase));
export { PostBundlesIdSharePathParams };
var PostBundlesIdShareRequestBody = /** @class */ (function (_super) {
    __extends(PostBundlesIdShareRequestBody, _super);
    function PostBundlesIdShareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=note" }),
        __metadata("design:type", String)
    ], PostBundlesIdShareRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recipients;json=true" }),
        __metadata("design:type", Array)
    ], PostBundlesIdShareRequestBody.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=to" }),
        __metadata("design:type", Array)
    ], PostBundlesIdShareRequestBody.prototype, "to", void 0);
    return PostBundlesIdShareRequestBody;
}(SpeakeasyBase));
export { PostBundlesIdShareRequestBody };
var PostBundlesIdShareRequest = /** @class */ (function (_super) {
    __extends(PostBundlesIdShareRequest, _super);
    function PostBundlesIdShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBundlesIdSharePathParams)
    ], PostBundlesIdShareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostBundlesIdShareRequestBody)
    ], PostBundlesIdShareRequest.prototype, "request", void 0);
    return PostBundlesIdShareRequest;
}(SpeakeasyBase));
export { PostBundlesIdShareRequest };
var PostBundlesIdShareResponse = /** @class */ (function (_super) {
    __extends(PostBundlesIdShareResponse, _super);
    function PostBundlesIdShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBundlesIdShareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBundlesIdShareResponse.prototype, "statusCode", void 0);
    return PostBundlesIdShareResponse;
}(SpeakeasyBase));
export { PostBundlesIdShareResponse };
