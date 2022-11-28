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
var FunctionsUpdateTagPathParams = /** @class */ (function (_super) {
    __extends(FunctionsUpdateTagPathParams, _super);
    function FunctionsUpdateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], FunctionsUpdateTagPathParams.prototype, "functionId", void 0);
    return FunctionsUpdateTagPathParams;
}(SpeakeasyBase));
export { FunctionsUpdateTagPathParams };
var FunctionsUpdateTagRequestBody = /** @class */ (function (_super) {
    __extends(FunctionsUpdateTagRequestBody, _super);
    function FunctionsUpdateTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], FunctionsUpdateTagRequestBody.prototype, "tag", void 0);
    return FunctionsUpdateTagRequestBody;
}(SpeakeasyBase));
export { FunctionsUpdateTagRequestBody };
var FunctionsUpdateTagSecurity = /** @class */ (function (_super) {
    __extends(FunctionsUpdateTagSecurity, _super);
    function FunctionsUpdateTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], FunctionsUpdateTagSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], FunctionsUpdateTagSecurity.prototype, "project", void 0);
    return FunctionsUpdateTagSecurity;
}(SpeakeasyBase));
export { FunctionsUpdateTagSecurity };
var FunctionsUpdateTagRequest = /** @class */ (function (_super) {
    __extends(FunctionsUpdateTagRequest, _super);
    function FunctionsUpdateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsUpdateTagPathParams)
    ], FunctionsUpdateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", FunctionsUpdateTagRequestBody)
    ], FunctionsUpdateTagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FunctionsUpdateTagSecurity)
    ], FunctionsUpdateTagRequest.prototype, "security", void 0);
    return FunctionsUpdateTagRequest;
}(SpeakeasyBase));
export { FunctionsUpdateTagRequest };
var FunctionsUpdateTagResponse = /** @class */ (function (_super) {
    __extends(FunctionsUpdateTagResponse, _super);
    function FunctionsUpdateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FunctionsUpdateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FunctionsUpdateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Function)
    ], FunctionsUpdateTagResponse.prototype, "function", void 0);
    return FunctionsUpdateTagResponse;
}(SpeakeasyBase));
export { FunctionsUpdateTagResponse };
