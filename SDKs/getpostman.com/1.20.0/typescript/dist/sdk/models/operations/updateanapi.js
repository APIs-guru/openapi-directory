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
var UpdateAnApiPathParams = /** @class */ (function (_super) {
    __extends(UpdateAnApiPathParams, _super);
    function UpdateAnApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateAnApiPathParams.prototype, "apiId", void 0);
    return UpdateAnApiPathParams;
}(SpeakeasyBase));
export { UpdateAnApiPathParams };
var UpdateAnApiRequestBodyApi = /** @class */ (function (_super) {
    __extends(UpdateAnApiRequestBodyApi, _super);
    function UpdateAnApiRequestBodyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateAnApiRequestBodyApi.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAnApiRequestBodyApi.prototype, "name", void 0);
    return UpdateAnApiRequestBodyApi;
}(SpeakeasyBase));
export { UpdateAnApiRequestBodyApi };
var UpdateAnApiRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAnApiRequestBody, _super);
    function UpdateAnApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", UpdateAnApiRequestBodyApi)
    ], UpdateAnApiRequestBody.prototype, "api", void 0);
    return UpdateAnApiRequestBody;
}(SpeakeasyBase));
export { UpdateAnApiRequestBody };
var UpdateAnApi200ApplicationJsonApi = /** @class */ (function (_super) {
    __extends(UpdateAnApi200ApplicationJsonApi, _super);
    function UpdateAnApi200ApplicationJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], UpdateAnApi200ApplicationJsonApi.prototype, "updatedAt", void 0);
    return UpdateAnApi200ApplicationJsonApi;
}(SpeakeasyBase));
export { UpdateAnApi200ApplicationJsonApi };
var UpdateAnApi200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateAnApi200ApplicationJson, _super);
    function UpdateAnApi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", UpdateAnApi200ApplicationJsonApi)
    ], UpdateAnApi200ApplicationJson.prototype, "api", void 0);
    return UpdateAnApi200ApplicationJson;
}(SpeakeasyBase));
export { UpdateAnApi200ApplicationJson };
var UpdateAnApiRequest = /** @class */ (function (_super) {
    __extends(UpdateAnApiRequest, _super);
    function UpdateAnApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnApiPathParams)
    ], UpdateAnApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAnApiRequestBody)
    ], UpdateAnApiRequest.prototype, "request", void 0);
    return UpdateAnApiRequest;
}(SpeakeasyBase));
export { UpdateAnApiRequest };
var UpdateAnApiResponse = /** @class */ (function (_super) {
    __extends(UpdateAnApiResponse, _super);
    function UpdateAnApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAnApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAnApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAnApi200ApplicationJson)
    ], UpdateAnApiResponse.prototype, "updateAnApi200ApplicationJsonObject", void 0);
    return UpdateAnApiResponse;
}(SpeakeasyBase));
export { UpdateAnApiResponse };
