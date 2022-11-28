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
var DeleteAttachmentPathParams = /** @class */ (function (_super) {
    __extends(DeleteAttachmentPathParams, _super);
    function DeleteAttachmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_gid" }),
        __metadata("design:type", String)
    ], DeleteAttachmentPathParams.prototype, "attachmentGid", void 0);
    return DeleteAttachmentPathParams;
}(SpeakeasyBase));
export { DeleteAttachmentPathParams };
var DeleteAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(DeleteAttachmentQueryParams, _super);
    function DeleteAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteAttachmentQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteAttachmentQueryParams.prototype, "optPretty", void 0);
    return DeleteAttachmentQueryParams;
}(SpeakeasyBase));
export { DeleteAttachmentQueryParams };
var DeleteAttachment200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteAttachment200ApplicationJson, _super);
    function DeleteAttachment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteAttachment200ApplicationJson.prototype, "data", void 0);
    return DeleteAttachment200ApplicationJson;
}(SpeakeasyBase));
export { DeleteAttachment200ApplicationJson };
var DeleteAttachmentRequest = /** @class */ (function (_super) {
    __extends(DeleteAttachmentRequest, _super);
    function DeleteAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAttachmentPathParams)
    ], DeleteAttachmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAttachmentQueryParams)
    ], DeleteAttachmentRequest.prototype, "queryParams", void 0);
    return DeleteAttachmentRequest;
}(SpeakeasyBase));
export { DeleteAttachmentRequest };
var DeleteAttachmentResponse = /** @class */ (function (_super) {
    __extends(DeleteAttachmentResponse, _super);
    function DeleteAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteAttachmentResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAttachmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAttachment200ApplicationJson)
    ], DeleteAttachmentResponse.prototype, "deleteAttachment200ApplicationJsonObject", void 0);
    return DeleteAttachmentResponse;
}(SpeakeasyBase));
export { DeleteAttachmentResponse };
