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
var DeleteMockPathParams = /** @class */ (function (_super) {
    __extends(DeleteMockPathParams, _super);
    function DeleteMockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" }),
        __metadata("design:type", String)
    ], DeleteMockPathParams.prototype, "mockUid", void 0);
    return DeleteMockPathParams;
}(SpeakeasyBase));
export { DeleteMockPathParams };
var DeleteMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(DeleteMock200ApplicationJsonMock, _super);
    function DeleteMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteMock200ApplicationJsonMock.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DeleteMock200ApplicationJsonMock.prototype, "uid", void 0);
    return DeleteMock200ApplicationJsonMock;
}(SpeakeasyBase));
export { DeleteMock200ApplicationJsonMock };
var DeleteMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteMock200ApplicationJson, _super);
    function DeleteMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", DeleteMock200ApplicationJsonMock)
    ], DeleteMock200ApplicationJson.prototype, "mock", void 0);
    return DeleteMock200ApplicationJson;
}(SpeakeasyBase));
export { DeleteMock200ApplicationJson };
var DeleteMockRequest = /** @class */ (function (_super) {
    __extends(DeleteMockRequest, _super);
    function DeleteMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMockPathParams)
    ], DeleteMockRequest.prototype, "pathParams", void 0);
    return DeleteMockRequest;
}(SpeakeasyBase));
export { DeleteMockRequest };
var DeleteMockResponse = /** @class */ (function (_super) {
    __extends(DeleteMockResponse, _super);
    function DeleteMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMock200ApplicationJson)
    ], DeleteMockResponse.prototype, "deleteMock200ApplicationJsonObject", void 0);
    return DeleteMockResponse;
}(SpeakeasyBase));
export { DeleteMockResponse };
