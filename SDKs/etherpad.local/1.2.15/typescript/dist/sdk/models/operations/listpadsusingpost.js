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
var ListPadsUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(ListPadsUsingPostQueryParams, _super);
    function ListPadsUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], ListPadsUsingPostQueryParams.prototype, "groupId", void 0);
    return ListPadsUsingPostQueryParams;
}(SpeakeasyBase));
export { ListPadsUsingPostQueryParams };
var ListPadsUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListPadsUsingPost200ApplicationJsonData, _super);
    function ListPadsUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListPadsUsingPost200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListPadsUsingPost200ApplicationJsonData;
}(SpeakeasyBase));
export { ListPadsUsingPost200ApplicationJsonData };
var ListPadsUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingPost200ApplicationJson, _super);
    function ListPadsUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListPadsUsingPost200ApplicationJsonData)
    ], ListPadsUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingPost200ApplicationJson };
var ListPadsUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingPost400ApplicationJson, _super);
    function ListPadsUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingPost400ApplicationJson };
var ListPadsUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingPost401ApplicationJson, _super);
    function ListPadsUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingPost401ApplicationJson };
var ListPadsUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListPadsUsingPost500ApplicationJson, _super);
    function ListPadsUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListPadsUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], ListPadsUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListPadsUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListPadsUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { ListPadsUsingPost500ApplicationJson };
var ListPadsUsingPostRequest = /** @class */ (function (_super) {
    __extends(ListPadsUsingPostRequest, _super);
    function ListPadsUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingPostQueryParams)
    ], ListPadsUsingPostRequest.prototype, "queryParams", void 0);
    return ListPadsUsingPostRequest;
}(SpeakeasyBase));
export { ListPadsUsingPostRequest };
var ListPadsUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListPadsUsingPostResponse, _super);
    function ListPadsUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListPadsUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListPadsUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingPost200ApplicationJson)
    ], ListPadsUsingPostResponse.prototype, "listPadsUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingPost400ApplicationJson)
    ], ListPadsUsingPostResponse.prototype, "listPadsUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingPost401ApplicationJson)
    ], ListPadsUsingPostResponse.prototype, "listPadsUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListPadsUsingPost500ApplicationJson)
    ], ListPadsUsingPostResponse.prototype, "listPadsUsingPost500ApplicationJsonObject", void 0);
    return ListPadsUsingPostResponse;
}(SpeakeasyBase));
export { ListPadsUsingPostResponse };
