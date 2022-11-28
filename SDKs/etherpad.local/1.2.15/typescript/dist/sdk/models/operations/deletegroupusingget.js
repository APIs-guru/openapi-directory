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
var DeleteGroupUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGetQueryParams, _super);
    function DeleteGroupUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingGetQueryParams.prototype, "groupId", void 0);
    return DeleteGroupUsingGetQueryParams;
}(SpeakeasyBase));
export { DeleteGroupUsingGetQueryParams };
var DeleteGroupUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGet200ApplicationJson, _super);
    function DeleteGroupUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingGet200ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingGet200ApplicationJson };
var DeleteGroupUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGet400ApplicationJson, _super);
    function DeleteGroupUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingGet400ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingGet400ApplicationJson };
var DeleteGroupUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGet401ApplicationJson, _super);
    function DeleteGroupUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingGet401ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingGet401ApplicationJson };
var DeleteGroupUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGet500ApplicationJson, _super);
    function DeleteGroupUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteGroupUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteGroupUsingGet500ApplicationJson.prototype, "message", void 0);
    return DeleteGroupUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupUsingGet500ApplicationJson };
var DeleteGroupUsingGetRequest = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGetRequest, _super);
    function DeleteGroupUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingGetQueryParams)
    ], DeleteGroupUsingGetRequest.prototype, "queryParams", void 0);
    return DeleteGroupUsingGetRequest;
}(SpeakeasyBase));
export { DeleteGroupUsingGetRequest };
var DeleteGroupUsingGetResponse = /** @class */ (function (_super) {
    __extends(DeleteGroupUsingGetResponse, _super);
    function DeleteGroupUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGroupUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGroupUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingGet200ApplicationJson)
    ], DeleteGroupUsingGetResponse.prototype, "deleteGroupUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingGet400ApplicationJson)
    ], DeleteGroupUsingGetResponse.prototype, "deleteGroupUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingGet401ApplicationJson)
    ], DeleteGroupUsingGetResponse.prototype, "deleteGroupUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupUsingGet500ApplicationJson)
    ], DeleteGroupUsingGetResponse.prototype, "deleteGroupUsingGet500ApplicationJsonObject", void 0);
    return DeleteGroupUsingGetResponse;
}(SpeakeasyBase));
export { DeleteGroupUsingGetResponse };
