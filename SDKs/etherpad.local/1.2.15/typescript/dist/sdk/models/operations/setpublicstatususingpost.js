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
var SetPublicStatusUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPostQueryParams, _super);
    function SetPublicStatusUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPostQueryParams.prototype, "publicStatus", void 0);
    return SetPublicStatusUsingPostQueryParams;
}(SpeakeasyBase));
export { SetPublicStatusUsingPostQueryParams };
var SetPublicStatusUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPost200ApplicationJson, _super);
    function SetPublicStatusUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPost200ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingPost200ApplicationJson };
var SetPublicStatusUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPost400ApplicationJson, _super);
    function SetPublicStatusUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPost400ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingPost400ApplicationJson };
var SetPublicStatusUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPost401ApplicationJson, _super);
    function SetPublicStatusUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPost401ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingPost401ApplicationJson };
var SetPublicStatusUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPost500ApplicationJson, _super);
    function SetPublicStatusUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], SetPublicStatusUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPost500ApplicationJson.prototype, "message", void 0);
    return SetPublicStatusUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { SetPublicStatusUsingPost500ApplicationJson };
var SetPublicStatusUsingPostRequest = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPostRequest, _super);
    function SetPublicStatusUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingPostQueryParams)
    ], SetPublicStatusUsingPostRequest.prototype, "queryParams", void 0);
    return SetPublicStatusUsingPostRequest;
}(SpeakeasyBase));
export { SetPublicStatusUsingPostRequest };
var SetPublicStatusUsingPostResponse = /** @class */ (function (_super) {
    __extends(SetPublicStatusUsingPostResponse, _super);
    function SetPublicStatusUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetPublicStatusUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetPublicStatusUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingPost200ApplicationJson)
    ], SetPublicStatusUsingPostResponse.prototype, "setPublicStatusUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingPost400ApplicationJson)
    ], SetPublicStatusUsingPostResponse.prototype, "setPublicStatusUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingPost401ApplicationJson)
    ], SetPublicStatusUsingPostResponse.prototype, "setPublicStatusUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetPublicStatusUsingPost500ApplicationJson)
    ], SetPublicStatusUsingPostResponse.prototype, "setPublicStatusUsingPost500ApplicationJsonObject", void 0);
    return SetPublicStatusUsingPostResponse;
}(SpeakeasyBase));
export { SetPublicStatusUsingPostResponse };
