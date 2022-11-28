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
var CreateDiffHtmlUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPostQueryParams, _super);
    function CreateDiffHtmlUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endRev" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPostQueryParams.prototype, "endRev", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPostQueryParams.prototype, "padId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRev" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPostQueryParams.prototype, "startRev", void 0);
    return CreateDiffHtmlUsingPostQueryParams;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPostQueryParams };
var CreateDiffHtmlUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPost200ApplicationJson, _super);
    function CreateDiffHtmlUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingPost200ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPost200ApplicationJson };
var CreateDiffHtmlUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPost400ApplicationJson, _super);
    function CreateDiffHtmlUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingPost400ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPost400ApplicationJson };
var CreateDiffHtmlUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPost401ApplicationJson, _super);
    function CreateDiffHtmlUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingPost401ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPost401ApplicationJson };
var CreateDiffHtmlUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPost500ApplicationJson, _super);
    function CreateDiffHtmlUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CreateDiffHtmlUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreateDiffHtmlUsingPost500ApplicationJson;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPost500ApplicationJson };
var CreateDiffHtmlUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPostRequest, _super);
    function CreateDiffHtmlUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingPostQueryParams)
    ], CreateDiffHtmlUsingPostRequest.prototype, "queryParams", void 0);
    return CreateDiffHtmlUsingPostRequest;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPostRequest };
var CreateDiffHtmlUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreateDiffHtmlUsingPostResponse, _super);
    function CreateDiffHtmlUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDiffHtmlUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDiffHtmlUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingPost200ApplicationJson)
    ], CreateDiffHtmlUsingPostResponse.prototype, "createDiffHtmlUsingPost200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingPost400ApplicationJson)
    ], CreateDiffHtmlUsingPostResponse.prototype, "createDiffHtmlUsingPost400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingPost401ApplicationJson)
    ], CreateDiffHtmlUsingPostResponse.prototype, "createDiffHtmlUsingPost401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDiffHtmlUsingPost500ApplicationJson)
    ], CreateDiffHtmlUsingPostResponse.prototype, "createDiffHtmlUsingPost500ApplicationJsonObject", void 0);
    return CreateDiffHtmlUsingPostResponse;
}(SpeakeasyBase));
export { CreateDiffHtmlUsingPostResponse };
