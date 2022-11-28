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
var GetRevisionChangesetUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPostQueryParams, _super);
    function GetRevisionChangesetUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPostQueryParams.prototype, "rev", void 0);
    return GetRevisionChangesetUsingPostQueryParams;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPostQueryParams };
var GetRevisionChangesetUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPost200ApplicationJson, _super);
    function GetRevisionChangesetUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionChangesetUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPost200ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPost200ApplicationJson };
var GetRevisionChangesetUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPost400ApplicationJson, _super);
    function GetRevisionChangesetUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionChangesetUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPost400ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPost400ApplicationJson };
var GetRevisionChangesetUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPost401ApplicationJson, _super);
    function GetRevisionChangesetUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionChangesetUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPost401ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPost401ApplicationJson };
var GetRevisionChangesetUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPost500ApplicationJson, _super);
    function GetRevisionChangesetUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GetRevisionChangesetUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPost500ApplicationJson.prototype, "message", void 0);
    return GetRevisionChangesetUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPost500ApplicationJson };
var GetRevisionChangesetUsingPostRequest = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPostRequest, _super);
    function GetRevisionChangesetUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionChangesetUsingPostQueryParams)
    ], GetRevisionChangesetUsingPostRequest.prototype, "queryParams", void 0);
    return GetRevisionChangesetUsingPostRequest;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPostRequest };
var GetRevisionChangesetUsingPostResponse = /** @class */ (function (_super) {
    __extends(GetRevisionChangesetUsingPostResponse, _super);
    function GetRevisionChangesetUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRevisionChangesetUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRevisionChangesetUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionChangesetUsingPost200ApplicationJson)
    ], GetRevisionChangesetUsingPostResponse.prototype, "getRevisionChangesetUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionChangesetUsingPost400ApplicationJson)
    ], GetRevisionChangesetUsingPostResponse.prototype, "getRevisionChangesetUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionChangesetUsingPost401ApplicationJson)
    ], GetRevisionChangesetUsingPostResponse.prototype, "getRevisionChangesetUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevisionChangesetUsingPost500ApplicationJson)
    ], GetRevisionChangesetUsingPostResponse.prototype, "getRevisionChangesetUsingPost500ApplicationJsonObject", void 0);
    return GetRevisionChangesetUsingPostResponse;
}(SpeakeasyBase));
export { GetRevisionChangesetUsingPostResponse };
