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
var DeleteSessionUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPostQueryParams, _super);
    function DeleteSessionUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingPostQueryParams.prototype, "sessionId", void 0);
    return DeleteSessionUsingPostQueryParams;
}(SpeakeasyBase));
export { DeleteSessionUsingPostQueryParams };
var DeleteSessionUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPost200ApplicationJson, _super);
    function DeleteSessionUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingPost200ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingPost200ApplicationJson };
var DeleteSessionUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPost400ApplicationJson, _super);
    function DeleteSessionUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingPost400ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingPost400ApplicationJson };
var DeleteSessionUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPost401ApplicationJson, _super);
    function DeleteSessionUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingPost401ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingPost401ApplicationJson };
var DeleteSessionUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPost500ApplicationJson, _super);
    function DeleteSessionUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteSessionUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSessionUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteSessionUsingPost500ApplicationJson.prototype, "message", void 0);
    return DeleteSessionUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { DeleteSessionUsingPost500ApplicationJson };
var DeleteSessionUsingPostRequest = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPostRequest, _super);
    function DeleteSessionUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingPostQueryParams)
    ], DeleteSessionUsingPostRequest.prototype, "queryParams", void 0);
    return DeleteSessionUsingPostRequest;
}(SpeakeasyBase));
export { DeleteSessionUsingPostRequest };
var DeleteSessionUsingPostResponse = /** @class */ (function (_super) {
    __extends(DeleteSessionUsingPostResponse, _super);
    function DeleteSessionUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSessionUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSessionUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingPost200ApplicationJson)
    ], DeleteSessionUsingPostResponse.prototype, "deleteSessionUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingPost400ApplicationJson)
    ], DeleteSessionUsingPostResponse.prototype, "deleteSessionUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingPost401ApplicationJson)
    ], DeleteSessionUsingPostResponse.prototype, "deleteSessionUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSessionUsingPost500ApplicationJson)
    ], DeleteSessionUsingPostResponse.prototype, "deleteSessionUsingPost500ApplicationJsonObject", void 0);
    return DeleteSessionUsingPostResponse;
}(SpeakeasyBase));
export { DeleteSessionUsingPostResponse };
