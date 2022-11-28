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
var CreateApiQueryParams = /** @class */ (function (_super) {
    __extends(CreateApiQueryParams, _super);
    function CreateApiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], CreateApiQueryParams.prototype, "workspace", void 0);
    return CreateApiQueryParams;
}(SpeakeasyBase));
export { CreateApiQueryParams };
var CreateApiRequestBodyApi = /** @class */ (function (_super) {
    __extends(CreateApiRequestBodyApi, _super);
    function CreateApiRequestBodyApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateApiRequestBodyApi.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApiRequestBodyApi.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], CreateApiRequestBodyApi.prototype, "summary", void 0);
    return CreateApiRequestBodyApi;
}(SpeakeasyBase));
export { CreateApiRequestBodyApi };
var CreateApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiRequestBody, _super);
    function CreateApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", CreateApiRequestBodyApi)
    ], CreateApiRequestBody.prototype, "api", void 0);
    return CreateApiRequestBody;
}(SpeakeasyBase));
export { CreateApiRequestBody };
var CreateApi200ApplicationJsonApi = /** @class */ (function (_super) {
    __extends(CreateApi200ApplicationJsonApi, _super);
    function CreateApi200ApplicationJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], CreateApi200ApplicationJsonApi.prototype, "updatedAt", void 0);
    return CreateApi200ApplicationJsonApi;
}(SpeakeasyBase));
export { CreateApi200ApplicationJsonApi };
var CreateApi200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateApi200ApplicationJson, _super);
    function CreateApi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", CreateApi200ApplicationJsonApi)
    ], CreateApi200ApplicationJson.prototype, "api", void 0);
    return CreateApi200ApplicationJson;
}(SpeakeasyBase));
export { CreateApi200ApplicationJson };
var CreateApiRequest = /** @class */ (function (_super) {
    __extends(CreateApiRequest, _super);
    function CreateApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiQueryParams)
    ], CreateApiRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiRequestBody)
    ], CreateApiRequest.prototype, "request", void 0);
    return CreateApiRequest;
}(SpeakeasyBase));
export { CreateApiRequest };
var CreateApiResponse = /** @class */ (function (_super) {
    __extends(CreateApiResponse, _super);
    function CreateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApi200ApplicationJson)
    ], CreateApiResponse.prototype, "createApi200ApplicationJsonObject", void 0);
    return CreateApiResponse;
}(SpeakeasyBase));
export { CreateApiResponse };
