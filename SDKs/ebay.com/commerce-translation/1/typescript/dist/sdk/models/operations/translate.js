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
var TranslateSecurity = /** @class */ (function (_super) {
    __extends(TranslateSecurity, _super);
    function TranslateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], TranslateSecurity.prototype, "apiAuth", void 0);
    return TranslateSecurity;
}(SpeakeasyBase));
export { TranslateSecurity };
var Translate400ApplicationJson = /** @class */ (function (_super) {
    __extends(Translate400ApplicationJson, _super);
    function Translate400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.Error }),
        __metadata("design:type", Array)
    ], Translate400ApplicationJson.prototype, "errors", void 0);
    return Translate400ApplicationJson;
}(SpeakeasyBase));
export { Translate400ApplicationJson };
var Translate500ApplicationJson = /** @class */ (function (_super) {
    __extends(Translate500ApplicationJson, _super);
    function Translate500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.Error }),
        __metadata("design:type", Array)
    ], Translate500ApplicationJson.prototype, "errors", void 0);
    return Translate500ApplicationJson;
}(SpeakeasyBase));
export { Translate500ApplicationJson };
var TranslateRequest = /** @class */ (function (_super) {
    __extends(TranslateRequest, _super);
    function TranslateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TranslateRequest)
    ], TranslateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateSecurity)
    ], TranslateRequest.prototype, "security", void 0);
    return TranslateRequest;
}(SpeakeasyBase));
export { TranslateRequest };
var TranslateResponse = /** @class */ (function (_super) {
    __extends(TranslateResponse, _super);
    function TranslateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TranslateResponse)
    ], TranslateResponse.prototype, "translateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Translate400ApplicationJson)
    ], TranslateResponse.prototype, "translate400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Translate500ApplicationJson)
    ], TranslateResponse.prototype, "translate500ApplicationJsonObject", void 0);
    return TranslateResponse;
}(SpeakeasyBase));
export { TranslateResponse };
