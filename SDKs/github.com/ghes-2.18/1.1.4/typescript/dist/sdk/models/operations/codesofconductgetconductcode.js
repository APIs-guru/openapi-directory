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
var CodesOfConductGetConductCodePathParams = /** @class */ (function (_super) {
    __extends(CodesOfConductGetConductCodePathParams, _super);
    function CodesOfConductGetConductCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], CodesOfConductGetConductCodePathParams.prototype, "key", void 0);
    return CodesOfConductGetConductCodePathParams;
}(SpeakeasyBase));
export { CodesOfConductGetConductCodePathParams };
var CodesOfConductGetConductCode415ApplicationJson = /** @class */ (function (_super) {
    __extends(CodesOfConductGetConductCode415ApplicationJson, _super);
    function CodesOfConductGetConductCode415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodesOfConductGetConductCode415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodesOfConductGetConductCode415ApplicationJson.prototype, "message", void 0);
    return CodesOfConductGetConductCode415ApplicationJson;
}(SpeakeasyBase));
export { CodesOfConductGetConductCode415ApplicationJson };
var CodesOfConductGetConductCodeRequest = /** @class */ (function (_super) {
    __extends(CodesOfConductGetConductCodeRequest, _super);
    function CodesOfConductGetConductCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodesOfConductGetConductCodePathParams)
    ], CodesOfConductGetConductCodeRequest.prototype, "pathParams", void 0);
    return CodesOfConductGetConductCodeRequest;
}(SpeakeasyBase));
export { CodesOfConductGetConductCodeRequest };
var CodesOfConductGetConductCodeResponse = /** @class */ (function (_super) {
    __extends(CodesOfConductGetConductCodeResponse, _super);
    function CodesOfConductGetConductCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CodesOfConductGetConductCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CodesOfConductGetConductCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], CodesOfConductGetConductCodeResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CodeOfConduct)
    ], CodesOfConductGetConductCodeResponse.prototype, "codeOfConduct", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CodesOfConductGetConductCode415ApplicationJson)
    ], CodesOfConductGetConductCodeResponse.prototype, "codesOfConductGetConductCode415ApplicationJsonObject", void 0);
    return CodesOfConductGetConductCodeResponse;
}(SpeakeasyBase));
export { CodesOfConductGetConductCodeResponse };
