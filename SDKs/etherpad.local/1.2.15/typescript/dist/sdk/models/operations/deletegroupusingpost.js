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
var DeleteGroupUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPostQueryParams, _super);
    function DeleteGroupUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingPostQueryParams.prototype, "groupId", void 0);
    return DeleteGroupUsingPostQueryParams;
}(SpeakeasyBase));
export { DeleteGroupUsingPostQueryParams };
var DeleteGroupUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPost200ApplicationJson, _super);
    function DeleteGroupUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingPost200ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingPost200ApplicationJson };
var DeleteGroupUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPost400ApplicationJson, _super);
    function DeleteGroupUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingPost400ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingPost400ApplicationJson };
var DeleteGroupUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPost401ApplicationJson, _super);
    function DeleteGroupUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingPost401ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingPost401ApplicationJson };
var DeleteGroupUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPost500ApplicationJson, _super);
    function DeleteGroupUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingPost500ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingPost500ApplicationJson };
var DeleteGroupUsingPostRequest = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPostRequest, _super);
    function DeleteGroupUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingPostQueryParams)
    ], DeleteGroupUsingPostRequest.prototype, "queryParams", void 0);
    return DeleteGroupUsingPostRequest;
}(SpeakeasyBase));
export { DeleteGroupUsingPostRequest };
var DeleteGroupUsingPostResponse = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingPostResponse, _super);
    function DeleteGroupUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGroupUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGroupUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingPost200ApplicationJson)
    ], DeleteGroupUsingPostResponse.prototype, "deleteGroupUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingPost400ApplicationJson)
    ], DeleteGroupUsingPostResponse.prototype, "deleteGroupUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingPost401ApplicationJson)
    ], DeleteGroupUsingPostResponse.prototype, "deleteGroupUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingPost500ApplicationJson)
    ], DeleteGroupUsingPostResponse.prototype, "deleteGroupUsingPost500ApplicationJsonObject", void 0);
    return DeleteGroupUsingPostResponse;
}(SpeakeasyBase));
export { DeleteGroupUsingPostResponse };
