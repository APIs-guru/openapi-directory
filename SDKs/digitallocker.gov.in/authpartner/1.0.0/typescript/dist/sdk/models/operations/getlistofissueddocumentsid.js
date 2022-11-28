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
var GetListOfIssuedDocumentsId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsId200ApplicationJson, _super);
    function GetListOfIssuedDocumentsId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items" }),
        __metadata("design:type", Array)
    ], GetListOfIssuedDocumentsId200ApplicationJson.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsId200ApplicationJson.prototype, "resource", void 0);
    return GetListOfIssuedDocumentsId200ApplicationJson;
}(SpeakeasyBase));
export { GetListOfIssuedDocumentsId200ApplicationJson };
var GetListOfIssuedDocumentsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsId401ApplicationJson, _super);
    function GetListOfIssuedDocumentsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfIssuedDocumentsId401ApplicationJson;
}(SpeakeasyBase));
export { GetListOfIssuedDocumentsId401ApplicationJson };
var GetListOfIssuedDocumentsIdResponse = /** @class */ (function (_super) {
    __extends(GetListOfIssuedDocumentsIdResponse, _super);
    function GetListOfIssuedDocumentsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListOfIssuedDocumentsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfIssuedDocumentsId200ApplicationJson)
    ], GetListOfIssuedDocumentsIdResponse.prototype, "getListOfIssuedDocumentsId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOfIssuedDocumentsId401ApplicationJson)
    ], GetListOfIssuedDocumentsIdResponse.prototype, "getListOfIssuedDocumentsId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetListOfIssuedDocumentsIdResponse.prototype, "getListOfIssuedDocumentsId500ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListOfIssuedDocumentsIdResponse.prototype, "statusCode", void 0);
    return GetListOfIssuedDocumentsIdResponse;
}(SpeakeasyBase));
export { GetListOfIssuedDocumentsIdResponse };
