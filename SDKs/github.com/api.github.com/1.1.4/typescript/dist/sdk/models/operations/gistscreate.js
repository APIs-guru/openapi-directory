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
var GistsCreateRequestBodyFiles = /** @class */ (function (_super) {
    __extends(GistsCreateRequestBodyFiles, _super);
    function GistsCreateRequestBodyFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GistsCreateRequestBodyFiles.prototype, "content", void 0);
    return GistsCreateRequestBodyFiles;
}(SpeakeasyBase));
export { GistsCreateRequestBodyFiles };
export var GistsCreateRequestBodyPublic2Enum;
(function (GistsCreateRequestBodyPublic2Enum) {
    GistsCreateRequestBodyPublic2Enum["True"] = "true";
    GistsCreateRequestBodyPublic2Enum["False"] = "false";
})(GistsCreateRequestBodyPublic2Enum || (GistsCreateRequestBodyPublic2Enum = {}));
var GistsCreateRequestBody = /** @class */ (function (_super) {
    __extends(GistsCreateRequestBody, _super);
    function GistsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistsCreateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: GistsCreateRequestBodyFiles }),
        __metadata("design:type", Map)
    ], GistsCreateRequestBody.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Object)
    ], GistsCreateRequestBody.prototype, "public", void 0);
    return GistsCreateRequestBody;
}(SpeakeasyBase));
export { GistsCreateRequestBody };
var GistsCreateRequest = /** @class */ (function (_super) {
    __extends(GistsCreateRequest, _super);
    function GistsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GistsCreateRequestBody)
    ], GistsCreateRequest.prototype, "request", void 0);
    return GistsCreateRequest;
}(SpeakeasyBase));
export { GistsCreateRequest };
var GistsCreateResponse = /** @class */ (function (_super) {
    __extends(GistsCreateResponse, _super);
    function GistsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GistsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GistsCreateResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GistsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], GistsCreateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GistSimple)
    ], GistsCreateResponse.prototype, "gistSimple", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], GistsCreateResponse.prototype, "validationError", void 0);
    return GistsCreateResponse;
}(SpeakeasyBase));
export { GistsCreateResponse };
