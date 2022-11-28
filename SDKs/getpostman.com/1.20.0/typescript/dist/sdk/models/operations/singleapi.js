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
var SingleApiPathParams = /** @class */ (function (_super) {
    __extends(SingleApiPathParams, _super);
    function SingleApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], SingleApiPathParams.prototype, "apiId", void 0);
    return SingleApiPathParams;
}(SpeakeasyBase));
export { SingleApiPathParams };
var SingleApi200ApplicationJsonApi = /** @class */ (function (_super) {
    __extends(SingleApi200ApplicationJsonApi, _super);
    function SingleApi200ApplicationJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], SingleApi200ApplicationJsonApi.prototype, "updatedAt", void 0);
    return SingleApi200ApplicationJsonApi;
}(SpeakeasyBase));
export { SingleApi200ApplicationJsonApi };
var SingleApi200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleApi200ApplicationJson, _super);
    function SingleApi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", SingleApi200ApplicationJsonApi)
    ], SingleApi200ApplicationJson.prototype, "api", void 0);
    return SingleApi200ApplicationJson;
}(SpeakeasyBase));
export { SingleApi200ApplicationJson };
var SingleApiRequest = /** @class */ (function (_super) {
    __extends(SingleApiRequest, _super);
    function SingleApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleApiPathParams)
    ], SingleApiRequest.prototype, "pathParams", void 0);
    return SingleApiRequest;
}(SpeakeasyBase));
export { SingleApiRequest };
var SingleApiResponse = /** @class */ (function (_super) {
    __extends(SingleApiResponse, _super);
    function SingleApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleApi200ApplicationJson)
    ], SingleApiResponse.prototype, "singleApi200ApplicationJsonObject", void 0);
    return SingleApiResponse;
}(SpeakeasyBase));
export { SingleApiResponse };
