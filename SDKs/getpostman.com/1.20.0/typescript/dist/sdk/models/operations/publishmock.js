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
var PublishMockPathParams = /** @class */ (function (_super) {
    __extends(PublishMockPathParams, _super);
    function PublishMockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" }),
        __metadata("design:type", String)
    ], PublishMockPathParams.prototype, "mockUid", void 0);
    return PublishMockPathParams;
}(SpeakeasyBase));
export { PublishMockPathParams };
var PublishMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(PublishMock200ApplicationJsonMock, _super);
    function PublishMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PublishMock200ApplicationJsonMock.prototype, "id", void 0);
    return PublishMock200ApplicationJsonMock;
}(SpeakeasyBase));
export { PublishMock200ApplicationJsonMock };
var PublishMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(PublishMock200ApplicationJson, _super);
    function PublishMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", PublishMock200ApplicationJsonMock)
    ], PublishMock200ApplicationJson.prototype, "mock", void 0);
    return PublishMock200ApplicationJson;
}(SpeakeasyBase));
export { PublishMock200ApplicationJson };
var PublishMockRequest = /** @class */ (function (_super) {
    __extends(PublishMockRequest, _super);
    function PublishMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishMockPathParams)
    ], PublishMockRequest.prototype, "pathParams", void 0);
    return PublishMockRequest;
}(SpeakeasyBase));
export { PublishMockRequest };
var PublishMockResponse = /** @class */ (function (_super) {
    __extends(PublishMockResponse, _super);
    function PublishMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PublishMockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PublishMockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PublishMock200ApplicationJson)
    ], PublishMockResponse.prototype, "publishMock200ApplicationJsonObject", void 0);
    return PublishMockResponse;
}(SpeakeasyBase));
export { PublishMockResponse };
