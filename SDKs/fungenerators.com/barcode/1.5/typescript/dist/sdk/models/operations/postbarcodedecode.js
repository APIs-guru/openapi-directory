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
var PostBarcodeDecodeRequestBody = /** @class */ (function (_super) {
    __extends(PostBarcodeDecodeRequestBody, _super);
    function PostBarcodeDecodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=barimage;" }),
        __metadata("design:type", Uint8Array)
    ], PostBarcodeDecodeRequestBody.prototype, "barimage", void 0);
    return PostBarcodeDecodeRequestBody;
}(SpeakeasyBase));
export { PostBarcodeDecodeRequestBody };
var PostBarcodeDecodeSecurity = /** @class */ (function (_super) {
    __extends(PostBarcodeDecodeSecurity, _super);
    function PostBarcodeDecodeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], PostBarcodeDecodeSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return PostBarcodeDecodeSecurity;
}(SpeakeasyBase));
export { PostBarcodeDecodeSecurity };
var PostBarcodeDecodeRequest = /** @class */ (function (_super) {
    __extends(PostBarcodeDecodeRequest, _super);
    function PostBarcodeDecodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PostBarcodeDecodeRequestBody)
    ], PostBarcodeDecodeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostBarcodeDecodeSecurity)
    ], PostBarcodeDecodeRequest.prototype, "security", void 0);
    return PostBarcodeDecodeRequest;
}(SpeakeasyBase));
export { PostBarcodeDecodeRequest };
var PostBarcodeDecodeResponse = /** @class */ (function (_super) {
    __extends(PostBarcodeDecodeResponse, _super);
    function PostBarcodeDecodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostBarcodeDecodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostBarcodeDecodeResponse.prototype, "statusCode", void 0);
    return PostBarcodeDecodeResponse;
}(SpeakeasyBase));
export { PostBarcodeDecodeResponse };
