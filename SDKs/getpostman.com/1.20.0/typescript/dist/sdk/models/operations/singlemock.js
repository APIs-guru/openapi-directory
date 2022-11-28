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
var SingleMockPathParams = /** @class */ (function (_super) {
    __extends(SingleMockPathParams, _super);
    function SingleMockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" }),
        __metadata("design:type", String)
    ], SingleMockPathParams.prototype, "mockUid", void 0);
    return SingleMockPathParams;
}(SpeakeasyBase));
export { SingleMockPathParams };
var SingleMock200ApplicationJsonMock = /** @class */ (function (_super) {
    __extends(SingleMock200ApplicationJsonMock, _super);
    function SingleMock200ApplicationJsonMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mockUrl" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "mockUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], SingleMock200ApplicationJsonMock.prototype, "uid", void 0);
    return SingleMock200ApplicationJsonMock;
}(SpeakeasyBase));
export { SingleMock200ApplicationJsonMock };
var SingleMock200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleMock200ApplicationJson, _super);
    function SingleMock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mock" }),
        __metadata("design:type", SingleMock200ApplicationJsonMock)
    ], SingleMock200ApplicationJson.prototype, "mock", void 0);
    return SingleMock200ApplicationJson;
}(SpeakeasyBase));
export { SingleMock200ApplicationJson };
var SingleMockRequest = /** @class */ (function (_super) {
    __extends(SingleMockRequest, _super);
    function SingleMockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleMockPathParams)
    ], SingleMockRequest.prototype, "pathParams", void 0);
    return SingleMockRequest;
}(SpeakeasyBase));
export { SingleMockRequest };
var SingleMockResponse = /** @class */ (function (_super) {
    __extends(SingleMockResponse, _super);
    function SingleMockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleMockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleMockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleMock200ApplicationJson)
    ], SingleMockResponse.prototype, "singleMock200ApplicationJsonObject", void 0);
    return SingleMockResponse;
}(SpeakeasyBase));
export { SingleMockResponse };
