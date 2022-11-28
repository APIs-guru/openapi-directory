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
var GetAttachmentPathParams = /** @class */ (function (_super) {
    __extends(GetAttachmentPathParams, _super);
    function GetAttachmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_gid" }),
        __metadata("design:type", String)
    ], GetAttachmentPathParams.prototype, "attachmentGid", void 0);
    return GetAttachmentPathParams;
}(SpeakeasyBase));
export { GetAttachmentPathParams };
var GetAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachmentQueryParams, _super);
    function GetAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetAttachmentQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetAttachmentQueryParams.prototype, "optPretty", void 0);
    return GetAttachmentQueryParams;
}(SpeakeasyBase));
export { GetAttachmentQueryParams };
var GetAttachment200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttachment200ApplicationJson, _super);
    function GetAttachment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.AttachmentResponse)
    ], GetAttachment200ApplicationJson.prototype, "data", void 0);
    return GetAttachment200ApplicationJson;
}(SpeakeasyBase));
export { GetAttachment200ApplicationJson };
var GetAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetAttachmentRequest, _super);
    function GetAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachmentPathParams)
    ], GetAttachmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachmentQueryParams)
    ], GetAttachmentRequest.prototype, "queryParams", void 0);
    return GetAttachmentRequest;
}(SpeakeasyBase));
export { GetAttachmentRequest };
var GetAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetAttachmentResponse, _super);
    function GetAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetAttachmentResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttachmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachment200ApplicationJson)
    ], GetAttachmentResponse.prototype, "getAttachment200ApplicationJsonObject", void 0);
    return GetAttachmentResponse;
}(SpeakeasyBase));
export { GetAttachmentResponse };
