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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PostRmmPreSignAttachmentSecurity = /** @class */ (function (_super) {
    __extends(PostRmmPreSignAttachmentSecurity, _super);
    function PostRmmPreSignAttachmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostRmmPreSignAttachmentSecurity.prototype, "basicAuth", void 0);
    return PostRmmPreSignAttachmentSecurity;
}(SpeakeasyBase));
export { PostRmmPreSignAttachmentSecurity };
var PostRmmPreSignAttachmentRequest = /** @class */ (function (_super) {
    __extends(PostRmmPreSignAttachmentRequest, _super);
    function PostRmmPreSignAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PreSignRequest)
    ], PostRmmPreSignAttachmentRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRmmPreSignAttachmentSecurity)
    ], PostRmmPreSignAttachmentRequest.prototype, "security", void 0);
    return PostRmmPreSignAttachmentRequest;
}(SpeakeasyBase));
export { PostRmmPreSignAttachmentRequest };
var PostRmmPreSignAttachmentResponse = /** @class */ (function (_super) {
    __extends(PostRmmPreSignAttachmentResponse, _super);
    function PostRmmPreSignAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRmmPreSignAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreSignInfo)
    ], PostRmmPreSignAttachmentResponse.prototype, "preSignInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRmmPreSignAttachmentResponse.prototype, "statusCode", void 0);
    return PostRmmPreSignAttachmentResponse;
}(SpeakeasyBase));
export { PostRmmPreSignAttachmentResponse };
