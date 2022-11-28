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
var CopyPadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CopyPadUsingGetQueryParams, _super);
    function CopyPadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], CopyPadUsingGetQueryParams.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], CopyPadUsingGetQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], CopyPadUsingGetQueryParams.prototype, "sourceId", void 0);
    return CopyPadUsingGetQueryParams;
}(SpeakeasyBase));
export { CopyPadUsingGetQueryParams };
var CopyPadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingGet200ApplicationJson, _super);
    function CopyPadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingGet200ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingGet200ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingGet200ApplicationJson };
var CopyPadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingGet400ApplicationJson, _super);
    function CopyPadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingGet400ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingGet400ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingGet400ApplicationJson };
var CopyPadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingGet401ApplicationJson, _super);
    function CopyPadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingGet401ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingGet401ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingGet401ApplicationJson };
var CopyPadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CopyPadUsingGet500ApplicationJson, _super);
    function CopyPadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CopyPadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], CopyPadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CopyPadUsingGet500ApplicationJson.prototype, "message", void 0);
    return CopyPadUsingGet500ApplicationJson;
}(SpeakeasyBase));
export { CopyPadUsingGet500ApplicationJson };
var CopyPadUsingGetRequest = /** @class */ (function (_super) {
    __extends(CopyPadUsingGetRequest, _super);
    function CopyPadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingGetQueryParams)
    ], CopyPadUsingGetRequest.prototype, "queryParams", void 0);
    return CopyPadUsingGetRequest;
}(SpeakeasyBase));
export { CopyPadUsingGetRequest };
var CopyPadUsingGetResponse = /** @class */ (function (_super) {
    __extends(CopyPadUsingGetResponse, _super);
    function CopyPadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CopyPadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CopyPadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingGet200ApplicationJson)
    ], CopyPadUsingGetResponse.prototype, "copyPadUsingGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingGet400ApplicationJson)
    ], CopyPadUsingGetResponse.prototype, "copyPadUsingGet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingGet401ApplicationJson)
    ], CopyPadUsingGetResponse.prototype, "copyPadUsingGet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyPadUsingGet500ApplicationJson)
    ], CopyPadUsingGetResponse.prototype, "copyPadUsingGet500ApplicationJsonObject", void 0);
    return CopyPadUsingGetResponse;
}(SpeakeasyBase));
export { CopyPadUsingGetResponse };
