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
var PutTIdStatusJsonPathParams = /** @class */ (function (_super) {
    __extends(PutTIdStatusJsonPathParams, _super);
    function PutTIdStatusJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonPathParams.prototype, "id", void 0);
    return PutTIdStatusJsonPathParams;
}(SpeakeasyBase));
export { PutTIdStatusJsonPathParams };
var PutTIdStatusJsonHeaders = /** @class */ (function (_super) {
    __extends(PutTIdStatusJsonHeaders, _super);
    function PutTIdStatusJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonHeaders.prototype, "apiUsername", void 0);
    return PutTIdStatusJsonHeaders;
}(SpeakeasyBase));
export { PutTIdStatusJsonHeaders };
export var PutTIdStatusJsonRequestBodyEnabledEnum;
(function (PutTIdStatusJsonRequestBodyEnabledEnum) {
    PutTIdStatusJsonRequestBodyEnabledEnum["True"] = "true";
    PutTIdStatusJsonRequestBodyEnabledEnum["False"] = "false";
})(PutTIdStatusJsonRequestBodyEnabledEnum || (PutTIdStatusJsonRequestBodyEnabledEnum = {}));
export var PutTIdStatusJsonRequestBodyStatusEnum;
(function (PutTIdStatusJsonRequestBodyStatusEnum) {
    PutTIdStatusJsonRequestBodyStatusEnum["Closed"] = "closed";
    PutTIdStatusJsonRequestBodyStatusEnum["Pinned"] = "pinned";
    PutTIdStatusJsonRequestBodyStatusEnum["PinnedGlobally"] = "pinned_globally";
    PutTIdStatusJsonRequestBodyStatusEnum["Archived"] = "archived";
    PutTIdStatusJsonRequestBodyStatusEnum["Visible"] = "visible";
})(PutTIdStatusJsonRequestBodyStatusEnum || (PutTIdStatusJsonRequestBodyStatusEnum = {}));
var PutTIdStatusJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutTIdStatusJsonRequestBody, _super);
    function PutTIdStatusJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=until" }),
        __metadata("design:type", String)
    ], PutTIdStatusJsonRequestBody.prototype, "until", void 0);
    return PutTIdStatusJsonRequestBody;
}(SpeakeasyBase));
export { PutTIdStatusJsonRequestBody };
var PutTIdStatusJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTIdStatusJson200ApplicationJson, _super);
    function PutTIdStatusJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PutTIdStatusJson200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_status_update" }),
        __metadata("design:type", String)
    ], PutTIdStatusJson200ApplicationJson.prototype, "topicStatusUpdate", void 0);
    return PutTIdStatusJson200ApplicationJson;
}(SpeakeasyBase));
export { PutTIdStatusJson200ApplicationJson };
var PutTIdStatusJsonRequest = /** @class */ (function (_super) {
    __extends(PutTIdStatusJsonRequest, _super);
    function PutTIdStatusJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdStatusJsonPathParams)
    ], PutTIdStatusJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdStatusJsonHeaders)
    ], PutTIdStatusJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTIdStatusJsonRequestBody)
    ], PutTIdStatusJsonRequest.prototype, "request", void 0);
    return PutTIdStatusJsonRequest;
}(SpeakeasyBase));
export { PutTIdStatusJsonRequest };
var PutTIdStatusJsonResponse = /** @class */ (function (_super) {
    __extends(PutTIdStatusJsonResponse, _super);
    function PutTIdStatusJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTIdStatusJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdStatusJson200ApplicationJson)
    ], PutTIdStatusJsonResponse.prototype, "putTIdStatusJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTIdStatusJsonResponse.prototype, "statusCode", void 0);
    return PutTIdStatusJsonResponse;
}(SpeakeasyBase));
export { PutTIdStatusJsonResponse };
