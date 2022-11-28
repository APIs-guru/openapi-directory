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
var PadUsersCountUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPostQueryParams, _super);
    function PadUsersCountUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingPostQueryParams.prototype, "padId", void 0);
    return PadUsersCountUsingPostQueryParams;
}(SpeakeasyBase));
export { PadUsersCountUsingPostQueryParams };
var PadUsersCountUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPost200ApplicationJsonData, _super);
    function PadUsersCountUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padUsersCount" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPost200ApplicationJsonData.prototype, "padUsersCount", void 0);
    return PadUsersCountUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { PadUsersCountUsingPost200ApplicationJsonData };
var PadUsersCountUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPost200ApplicationJson, _super);
    function PadUsersCountUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", PadUsersCountUsingPost200ApplicationJsonData)
    ], PadUsersCountUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingPost200ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingPost200ApplicationJson };
var PadUsersCountUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPost400ApplicationJson, _super);
    function PadUsersCountUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingPost400ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingPost400ApplicationJson };
var PadUsersCountUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPost401ApplicationJson, _super);
    function PadUsersCountUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingPost401ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingPost401ApplicationJson };
var PadUsersCountUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPost500ApplicationJson, _super);
    function PadUsersCountUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], PadUsersCountUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PadUsersCountUsingPost500ApplicationJson.prototype, "message", void 0);
    return PadUsersCountUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { PadUsersCountUsingPost500ApplicationJson };
var PadUsersCountUsingPostRequest = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPostRequest, _super);
    function PadUsersCountUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingPostQueryParams)
    ], PadUsersCountUsingPostRequest.prototype, "queryParams", void 0);
    return PadUsersCountUsingPostRequest;
}(SpeakeasyBase));
export { PadUsersCountUsingPostRequest };
var PadUsersCountUsingPostResponse = /** @class */ (function (_super) {
    __extends(PadUsersCountUsingPostResponse, _super);
    function PadUsersCountUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PadUsersCountUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PadUsersCountUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingPost200ApplicationJson)
    ], PadUsersCountUsingPostResponse.prototype, "padUsersCountUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingPost400ApplicationJson)
    ], PadUsersCountUsingPostResponse.prototype, "padUsersCountUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingPost401ApplicationJson)
    ], PadUsersCountUsingPostResponse.prototype, "padUsersCountUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PadUsersCountUsingPost500ApplicationJson)
    ], PadUsersCountUsingPostResponse.prototype, "padUsersCountUsingPost500ApplicationJsonObject", void 0);
    return PadUsersCountUsingPostResponse;
}(SpeakeasyBase));
export { PadUsersCountUsingPostResponse };
