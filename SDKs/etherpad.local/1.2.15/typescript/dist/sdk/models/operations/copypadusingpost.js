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
var CopyPadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadUsingPostQueryParams, _super);
    function CopyPadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadUsingPostQueryParams.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadUsingPostQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadUsingPostQueryParams.prototype, "sourceId", void 0);
    return CopyPadUsingPostQueryParams;
}(SpeakeasyBase));
export { CopyPadUsingPostQueryParams };
var CopyPadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingPost200ApplicationJson, _super);
    function CopyPadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingPost200ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingPost200ApplicationJson };
var CopyPadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingPost400ApplicationJson, _super);
    function CopyPadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingPost400ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingPost400ApplicationJson };
var CopyPadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingPost401ApplicationJson, _super);
    function CopyPadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingPost401ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingPost401ApplicationJson };
var CopyPadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingPost500ApplicationJson, _super);
    function CopyPadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingPost500ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingPost500ApplicationJson };
var CopyPadUsingPostRequest = /** @class */ (function (_super) {
    __extends(CopyPadUsingPostRequest, _super);
    function CopyPadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingPostQueryParams)
    ], CopyPadUsingPostRequest.prototype, "queryParams", void 0);
    return CopyPadUsingPostRequest;
}(SpeakeasyBase));
export { CopyPadUsingPostRequest };
var CopyPadUsingPostResponse = /** @class */ (function (_super) {
    __extends(CopyPadUsingPostResponse, _super);
    function CopyPadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CopyPadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CopyPadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingPost200ApplicationJson)
    ], CopyPadUsingPostResponse.prototype, "copyPadUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingPost400ApplicationJson)
    ], CopyPadUsingPostResponse.prototype, "copyPadUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingPost401ApplicationJson)
    ], CopyPadUsingPostResponse.prototype, "copyPadUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingPost500ApplicationJson)
    ], CopyPadUsingPostResponse.prototype, "copyPadUsingPost500ApplicationJsonObject", void 0);
    return CopyPadUsingPostResponse;
}(SpeakeasyBase));
export { CopyPadUsingPostResponse };
