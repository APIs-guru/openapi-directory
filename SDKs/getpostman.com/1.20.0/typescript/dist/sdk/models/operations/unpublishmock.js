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
var UnpublishMockPathParams = /** @class */ (function (_super) {
    __extends(UnpublishMockPathParams, _super);
    function UnpublishMockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" }),
        __metadata("design:type", String)
    ], UnpublishMockPathParams.prototype, "mockUid", void 0);
    return UnpublishMockPathParams;
}(SpeakeasyBase));
export { UnpublishMockPathParams };
var UnpublishMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(UnpublishMock200ApplicationJsonMock, _super);
    function UnpublishMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UnpublishMock200ApplicationJsonMock.prototype, "id", void 0);
    return UnpublishMock200ApplicationJsonMock;
}(SpeakeasyBase));
export { UnpublishMock200ApplicationJsonMock };
var UnpublishMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(UnpublishMock200ApplicationJson, _super);
    function UnpublishMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", UnpublishMock200ApplicationJsonMock)
    ], UnpublishMock200ApplicationJson.prototype, "mock", void 0);
    return UnpublishMock200ApplicationJson;
}(SpeakeasyBase));
export { UnpublishMock200ApplicationJson };
var UnpublishMockRequest = /** @class */ (function (_super) {
    __extends(UnpublishMockRequest, _super);
    function UnpublishMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnpublishMockPathParams)
    ], UnpublishMockRequest.prototype, "pathParams", void 0);
    return UnpublishMockRequest;
}(SpeakeasyBase));
export { UnpublishMockRequest };
var UnpublishMockResponse = /** @class */ (function (_super) {
    __extends(UnpublishMockResponse, _super);
    function UnpublishMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnpublishMockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnpublishMockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnpublishMock200ApplicationJson)
    ], UnpublishMockResponse.prototype, "unpublishMock200ApplicationJsonObject", void 0);
    return UnpublishMockResponse;
}(SpeakeasyBase));
export { UnpublishMockResponse };
