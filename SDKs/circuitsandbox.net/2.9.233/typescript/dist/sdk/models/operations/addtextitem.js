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
var AddTextItemPathParams = /** @class */ (function (_super) {
    __extends(AddTextItemPathParams, _super);
    function AddTextItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], AddTextItemPathParams.prototype, "convId", void 0);
    return AddTextItemPathParams;
}(SpeakeasyBase));
export { AddTextItemPathParams };
var AddTextItemRequestBody = /** @class */ (function (_super) {
    __extends(AddTextItemRequestBody, _super);
    function AddTextItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=attachments;" }),
        __metadata("design:type", Array)
    ], AddTextItemRequestBody.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=content;" }),
        __metadata("design:type", String)
    ], AddTextItemRequestBody.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=formMetaData;" }),
        __metadata("design:type", String)
    ], AddTextItemRequestBody.prototype, "formMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=subject;" }),
        __metadata("design:type", String)
    ], AddTextItemRequestBody.prototype, "subject", void 0);
    return AddTextItemRequestBody;
}(SpeakeasyBase));
export { AddTextItemRequestBody };
var AddTextItemSecurity = /** @class */ (function (_super) {
    __extends(AddTextItemSecurity, _super);
    function AddTextItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddTextItemSecurity.prototype, "oauth", void 0);
    return AddTextItemSecurity;
}(SpeakeasyBase));
export { AddTextItemSecurity };
var AddTextItemRequest = /** @class */ (function (_super) {
    __extends(AddTextItemRequest, _super);
    function AddTextItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTextItemPathParams)
    ], AddTextItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddTextItemRequestBody)
    ], AddTextItemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTextItemSecurity)
    ], AddTextItemRequest.prototype, "security", void 0);
    return AddTextItemRequest;
}(SpeakeasyBase));
export { AddTextItemRequest };
var AddTextItemResponse = /** @class */ (function (_super) {
    __extends(AddTextItemResponse, _super);
    function AddTextItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddTextItemResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddTextItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTextItemResponse.prototype, "conversationItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddTextItemResponse.prototype, "statusCode", void 0);
    return AddTextItemResponse;
}(SpeakeasyBase));
export { AddTextItemResponse };
