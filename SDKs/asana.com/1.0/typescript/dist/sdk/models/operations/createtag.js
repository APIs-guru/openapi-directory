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
var CreateTagQueryParams = /** @class */ (function (_super) {
    __extends(CreateTagQueryParams, _super);
    function CreateTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateTagQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateTagQueryParams.prototype, "optPretty", void 0);
    return CreateTagQueryParams;
}(SpeakeasyBase));
export { CreateTagQueryParams };
var CreateTagRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateTagRequestBodyInput, _super);
    function CreateTagRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TagRequestInput)
    ], CreateTagRequestBodyInput.prototype, "data", void 0);
    return CreateTagRequestBodyInput;
}(SpeakeasyBase));
export { CreateTagRequestBodyInput };
var CreateTag201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTag201ApplicationJson, _super);
    function CreateTag201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TagResponse)
    ], CreateTag201ApplicationJson.prototype, "data", void 0);
    return CreateTag201ApplicationJson;
}(SpeakeasyBase));
export { CreateTag201ApplicationJson };
var CreateTagRequest = /** @class */ (function (_super) {
    __extends(CreateTagRequest, _super);
    function CreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagQueryParams)
    ], CreateTagRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTagRequestBodyInput)
    ], CreateTagRequest.prototype, "request", void 0);
    return CreateTagRequest;
}(SpeakeasyBase));
export { CreateTagRequest };
var CreateTagResponse = /** @class */ (function (_super) {
    __extends(CreateTagResponse, _super);
    function CreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateTagResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTag201ApplicationJson)
    ], CreateTagResponse.prototype, "createTag201ApplicationJsonObject", void 0);
    return CreateTagResponse;
}(SpeakeasyBase));
export { CreateTagResponse };
