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
var FunctionsCreateTagPathParams = /** @class */ (function (_super) {
    __extends(FunctionsCreateTagPathParams, _super);
    function FunctionsCreateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsCreateTagPathParams.prototype, "functionId", void 0);
    return FunctionsCreateTagPathParams;
}(SpeakeasyBase));
export { FunctionsCreateTagPathParams };
var FunctionsCreateTagRequestBody = /** @class */ (function (_super) {
    __extends(FunctionsCreateTagRequestBody, _super);
    function FunctionsCreateTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=code" }),
        __metadata("design:type", String)
    ], FunctionsCreateTagRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=command" }),
        __metadata("design:type", String)
    ], FunctionsCreateTagRequestBody.prototype, "command", void 0);
    return FunctionsCreateTagRequestBody;
}(SpeakeasyBase));
export { FunctionsCreateTagRequestBody };
var FunctionsCreateTagSecurity = /** @class */ (function (_super) {
    __extends(FunctionsCreateTagSecurity, _super);
    function FunctionsCreateTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsCreateTagSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsCreateTagSecurity.prototype, "project", void 0);
    return FunctionsCreateTagSecurity;
}(SpeakeasyBase));
export { FunctionsCreateTagSecurity };
var FunctionsCreateTagRequest = /** @class */ (function (_super) {
    __extends(FunctionsCreateTagRequest, _super);
    function FunctionsCreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsCreateTagPathParams)
    ], FunctionsCreateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", FunctionsCreateTagRequestBody)
    ], FunctionsCreateTagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsCreateTagSecurity)
    ], FunctionsCreateTagRequest.prototype, "security", void 0);
    return FunctionsCreateTagRequest;
}(SpeakeasyBase));
export { FunctionsCreateTagRequest };
var FunctionsCreateTagResponse = /** @class */ (function (_super) {
    __extends(FunctionsCreateTagResponse, _super);
    function FunctionsCreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FunctionsCreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FunctionsCreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], FunctionsCreateTagResponse.prototype, "tag", void 0);
    return FunctionsCreateTagResponse;
}(SpeakeasyBase));
export { FunctionsCreateTagResponse };
