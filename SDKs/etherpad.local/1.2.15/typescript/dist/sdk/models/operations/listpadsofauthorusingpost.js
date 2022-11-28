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
var ListPadsOfAuthorUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPostQueryParams, _super);
    function ListPadsOfAuthorUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPostQueryParams.prototype, "authorId", void 0);
    return ListPadsOfAuthorUsingPostQueryParams;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPostQueryParams };
var ListPadsOfAuthorUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPost200ApplicationJsonData, _super);
    function ListPadsOfAuthorUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListPadsOfAuthorUsingPost200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListPadsOfAuthorUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPost200ApplicationJsonData };
var ListPadsOfAuthorUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPost200ApplicationJson, _super);
    function ListPadsOfAuthorUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListPadsOfAuthorUsingPost200ApplicationJsonData)
    ], ListPadsOfAuthorUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPost200ApplicationJson };
var ListPadsOfAuthorUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPost400ApplicationJson, _super);
    function ListPadsOfAuthorUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPost400ApplicationJson };
var ListPadsOfAuthorUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPost401ApplicationJson, _super);
    function ListPadsOfAuthorUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPost401ApplicationJson };
var ListPadsOfAuthorUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPost500ApplicationJson, _super);
    function ListPadsOfAuthorUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsOfAuthorUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListPadsOfAuthorUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPost500ApplicationJson };
var ListPadsOfAuthorUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPostRequest, _super);
    function ListPadsOfAuthorUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingPostQueryParams)
    ], ListPadsOfAuthorUsingPostRequest.prototype, "queryParams", void 0);
    return ListPadsOfAuthorUsingPostRequest;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPostRequest };
var ListPadsOfAuthorUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListPadsOfAuthorUsingPostResponse, _super);
    function ListPadsOfAuthorUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingPost200ApplicationJson)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "listPadsOfAuthorUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingPost400ApplicationJson)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "listPadsOfAuthorUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingPost401ApplicationJson)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "listPadsOfAuthorUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsOfAuthorUsingPost500ApplicationJson)
    ], ListPadsOfAuthorUsingPostResponse.prototype, "listPadsOfAuthorUsingPost500ApplicationJsonObject", void 0);
    return ListPadsOfAuthorUsingPostResponse;
}(SpeakeasyBase));
export { ListPadsOfAuthorUsingPostResponse };
