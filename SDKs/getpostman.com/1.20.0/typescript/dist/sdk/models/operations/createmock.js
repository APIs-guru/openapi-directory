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
var CreateMockRequestBodyMock = /** @class */ (function (_super) {
    __extends(CreateMockRequestBodyMock, _super);
    function CreateMockRequestBodyMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], CreateMockRequestBodyMock.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], CreateMockRequestBodyMock.prototype, "environment", void 0);
    return CreateMockRequestBodyMock;
}(SpeakeasyBase));
export { CreateMockRequestBodyMock };
var CreateMockRequestBody = /** @class */ (function (_super) {
    __extends(CreateMockRequestBody, _super);
    function CreateMockRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", CreateMockRequestBodyMock)
    ], CreateMockRequestBody.prototype, "mock", void 0);
    return CreateMockRequestBody;
}(SpeakeasyBase));
export { CreateMockRequestBody };
var CreateMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(CreateMock200ApplicationJsonMock, _super);
    function CreateMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mockUrl" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "mockUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateMock200ApplicationJsonMock.prototype, "uid", void 0);
    return CreateMock200ApplicationJsonMock;
}(SpeakeasyBase));
export { CreateMock200ApplicationJsonMock };
var CreateMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateMock200ApplicationJson, _super);
    function CreateMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", CreateMock200ApplicationJsonMock)
    ], CreateMock200ApplicationJson.prototype, "mock", void 0);
    return CreateMock200ApplicationJson;
}(SpeakeasyBase));
export { CreateMock200ApplicationJson };
var CreateMockRequest = /** @class */ (function (_super) {
    __extends(CreateMockRequest, _super);
    function CreateMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMockRequestBody)
    ], CreateMockRequest.prototype, "request", void 0);
    return CreateMockRequest;
}(SpeakeasyBase));
export { CreateMockRequest };
var CreateMockResponse = /** @class */ (function (_super) {
    __extends(CreateMockResponse, _super);
    function CreateMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMock200ApplicationJson)
    ], CreateMockResponse.prototype, "createMock200ApplicationJsonObject", void 0);
    return CreateMockResponse;
}(SpeakeasyBase));
export { CreateMockResponse };
