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
var CopyPadWithoutHistoryUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostQueryParams, _super);
    function CopyPadWithoutHistoryUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostQueryParams.prototype, "sourceId", void 0);
    return CopyPadWithoutHistoryUsingPostQueryParams;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPostQueryParams };
var CopyPadWithoutHistoryUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost200ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost200ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPost200ApplicationJson };
var CopyPadWithoutHistoryUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost400ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost400ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPost400ApplicationJson };
var CopyPadWithoutHistoryUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost401ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost401ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPost401ApplicationJson };
var CopyPadWithoutHistoryUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPost500ApplicationJson, _super);
    function CopyPadWithoutHistoryUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPost500ApplicationJson.prototype, "message", void 0);
    return CopyPadWithoutHistoryUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPost500ApplicationJson };
var CopyPadWithoutHistoryUsingPostRequest = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostRequest, _super);
    function CopyPadWithoutHistoryUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPostQueryParams)
    ], CopyPadWithoutHistoryUsingPostRequest.prototype, "queryParams", void 0);
    return CopyPadWithoutHistoryUsingPostRequest;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPostRequest };
var CopyPadWithoutHistoryUsingPostResponse = /** @class */ (function (_super) {
    __extends(CopyPadWithoutHistoryUsingPostResponse, _super);
    function CopyPadWithoutHistoryUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost200ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost400ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost401ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadWithoutHistoryUsingPost500ApplicationJson)
    ], CopyPadWithoutHistoryUsingPostResponse.prototype, "copyPadWithoutHistoryUsingPost500ApplicationJsonObject", void 0);
    return CopyPadWithoutHistoryUsingPostResponse;
}(SpeakeasyBase));
export { CopyPadWithoutHistoryUsingPostResponse };
