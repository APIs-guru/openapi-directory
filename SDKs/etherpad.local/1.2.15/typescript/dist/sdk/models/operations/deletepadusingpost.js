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
var DeletePadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(DeletePadUsingPostQueryParams, _super);
    function DeletePadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], DeletePadUsingPostQueryParams.prototype, "padId", void 0);
    return DeletePadUsingPostQueryParams;
}(SpeakeasyBase));
export { DeletePadUsingPostQueryParams };
var DeletePadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingPost200ApplicationJson, _super);
    function DeletePadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeletePadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingPost200ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { DeletePadUsingPost200ApplicationJson };
var DeletePadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingPost400ApplicationJson, _super);
    function DeletePadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeletePadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingPost400ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { DeletePadUsingPost400ApplicationJson };
var DeletePadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingPost401ApplicationJson, _super);
    function DeletePadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeletePadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingPost401ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { DeletePadUsingPost401ApplicationJson };
var DeletePadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingPost500ApplicationJson, _super);
    function DeletePadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeletePadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingPost500ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { DeletePadUsingPost500ApplicationJson };
var DeletePadUsingPostRequest = /** @class */ (function (_super) {
    __extends(DeletePadUsingPostRequest, _super);
    function DeletePadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePadUsingPostQueryParams)
    ], DeletePadUsingPostRequest.prototype, "queryParams", void 0);
    return DeletePadUsingPostRequest;
}(SpeakeasyBase));
export { DeletePadUsingPostRequest };
var DeletePadUsingPostResponse = /** @class */ (function (_super) {
    __extends(DeletePadUsingPostResponse, _super);
    function DeletePadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePadUsingPost200ApplicationJson)
    ], DeletePadUsingPostResponse.prototype, "deletePadUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePadUsingPost400ApplicationJson)
    ], DeletePadUsingPostResponse.prototype, "deletePadUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePadUsingPost401ApplicationJson)
    ], DeletePadUsingPostResponse.prototype, "deletePadUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePadUsingPost500ApplicationJson)
    ], DeletePadUsingPostResponse.prototype, "deletePadUsingPost500ApplicationJsonObject", void 0);
    return DeletePadUsingPostResponse;
}(SpeakeasyBase));
export { DeletePadUsingPostResponse };
