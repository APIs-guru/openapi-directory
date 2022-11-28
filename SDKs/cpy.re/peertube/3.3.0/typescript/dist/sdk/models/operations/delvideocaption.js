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
var DelVideoCaptionPathParams = /** @class */ (function (_super) {
    __extends(DelVideoCaptionPathParams, _super);
    function DelVideoCaptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=captionLanguage" }),
        __metadata("design:type", String)
    ], DelVideoCaptionPathParams.prototype, "captionLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Object)
    ], DelVideoCaptionPathParams.prototype, "id", void 0);
    return DelVideoCaptionPathParams;
}(SpeakeasyBase));
export { DelVideoCaptionPathParams };
var DelVideoCaptionSecurity = /** @class */ (function (_super) {
    __extends(DelVideoCaptionSecurity, _super);
    function DelVideoCaptionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DelVideoCaptionSecurity.prototype, "oAuth2", void 0);
    return DelVideoCaptionSecurity;
}(SpeakeasyBase));
export { DelVideoCaptionSecurity };
var DelVideoCaptionRequest = /** @class */ (function (_super) {
    __extends(DelVideoCaptionRequest, _super);
    function DelVideoCaptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DelVideoCaptionPathParams)
    ], DelVideoCaptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DelVideoCaptionSecurity)
    ], DelVideoCaptionRequest.prototype, "security", void 0);
    return DelVideoCaptionRequest;
}(SpeakeasyBase));
export { DelVideoCaptionRequest };
var DelVideoCaptionResponse = /** @class */ (function (_super) {
    __extends(DelVideoCaptionResponse, _super);
    function DelVideoCaptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DelVideoCaptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DelVideoCaptionResponse.prototype, "statusCode", void 0);
    return DelVideoCaptionResponse;
}(SpeakeasyBase));
export { DelVideoCaptionResponse };
