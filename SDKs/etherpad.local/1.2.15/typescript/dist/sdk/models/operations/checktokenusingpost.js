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
var CheckTokenUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingPost200ApplicationJson, _super);
    function CheckTokenUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CheckTokenUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingPost200ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CheckTokenUsingPost200ApplicationJson };
var CheckTokenUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingPost400ApplicationJson, _super);
    function CheckTokenUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CheckTokenUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingPost400ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CheckTokenUsingPost400ApplicationJson };
var CheckTokenUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingPost401ApplicationJson, _super);
    function CheckTokenUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CheckTokenUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingPost401ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CheckTokenUsingPost401ApplicationJson };
var CheckTokenUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingPost500ApplicationJson, _super);
    function CheckTokenUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CheckTokenUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingPost500ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CheckTokenUsingPost500ApplicationJson };
var CheckTokenUsingPostResponse = /** @class */ (function (_super) {
    __extends(CheckTokenUsingPostResponse, _super);
    function CheckTokenUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckTokenUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckTokenUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckTokenUsingPost200ApplicationJson)
    ], CheckTokenUsingPostResponse.prototype, "checkTokenUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckTokenUsingPost400ApplicationJson)
    ], CheckTokenUsingPostResponse.prototype, "checkTokenUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckTokenUsingPost401ApplicationJson)
    ], CheckTokenUsingPostResponse.prototype, "checkTokenUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckTokenUsingPost500ApplicationJson)
    ], CheckTokenUsingPostResponse.prototype, "checkTokenUsingPost500ApplicationJsonObject", void 0);
    return CheckTokenUsingPostResponse;
}(SpeakeasyBase));
export { CheckTokenUsingPostResponse };
