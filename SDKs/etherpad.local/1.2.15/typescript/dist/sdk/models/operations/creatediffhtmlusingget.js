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
var CreateDiffHtmlUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGetQueryParams, _super);
    function CreateDiffHtmlUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endRev" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGetQueryParams.prototype, "endRev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGetQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRev" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGetQueryParams.prototype, "startRev", void 0);
    return CreateDiffHtmlUsingGetQueryParams;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGetQueryParams };
var CreateDiffHtmlUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGet200ApplicationJson, _super);
    function CreateDiffHtmlUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGet200ApplicationJson };
var CreateDiffHtmlUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGet400ApplicationJson, _super);
    function CreateDiffHtmlUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGet400ApplicationJson };
var CreateDiffHtmlUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGet401ApplicationJson, _super);
    function CreateDiffHtmlUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGet401ApplicationJson };
var CreateDiffHtmlUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGet500ApplicationJson, _super);
    function CreateDiffHtmlUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGet500ApplicationJson };
var CreateDiffHtmlUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGetRequest, _super);
    function CreateDiffHtmlUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingGetQueryParams)
    ], CreateDiffHtmlUsingGetRequest.prototype, "queryParams", void 0);
    return CreateDiffHtmlUsingGetRequest;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGetRequest };
var CreateDiffHtmlUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingGetResponse, _super);
    function CreateDiffHtmlUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingGet200ApplicationJson)
    ], CreateDiffHtmlUsingGetResponse.prototype, "createDiffHtmlUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingGet400ApplicationJson)
    ], CreateDiffHtmlUsingGetResponse.prototype, "createDiffHtmlUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingGet401ApplicationJson)
    ], CreateDiffHtmlUsingGetResponse.prototype, "createDiffHtmlUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingGet500ApplicationJson)
    ], CreateDiffHtmlUsingGetResponse.prototype, "createDiffHtmlUsingGet500ApplicationJsonObject", void 0);
    return CreateDiffHtmlUsingGetResponse;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingGetResponse };
