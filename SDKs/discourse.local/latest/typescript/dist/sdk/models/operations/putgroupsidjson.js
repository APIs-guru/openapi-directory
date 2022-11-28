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
var PutGroupsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutGroupsIdJsonPathParams, _super);
    function PutGroupsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutGroupsIdJsonPathParams.prototype, "id", void 0);
    return PutGroupsIdJsonPathParams;
}(SpeakeasyBase));
export { PutGroupsIdJsonPathParams };
var PutGroupsIdJsonRequestBodyGroup = /** @class */ (function (_super) {
    __extends(PutGroupsIdJsonRequestBodyGroup, _super);
    function PutGroupsIdJsonRequestBodyGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutGroupsIdJsonRequestBodyGroup.prototype, "name", void 0);
    return PutGroupsIdJsonRequestBodyGroup;
}(SpeakeasyBase));
export { PutGroupsIdJsonRequestBodyGroup };
var PutGroupsIdJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutGroupsIdJsonRequestBody, _super);
    function PutGroupsIdJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", PutGroupsIdJsonRequestBodyGroup)
    ], PutGroupsIdJsonRequestBody.prototype, "group", void 0);
    return PutGroupsIdJsonRequestBody;
}(SpeakeasyBase));
export { PutGroupsIdJsonRequestBody };
var PutGroupsIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutGroupsIdJson200ApplicationJson, _super);
    function PutGroupsIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PutGroupsIdJson200ApplicationJson.prototype, "success", void 0);
    return PutGroupsIdJson200ApplicationJson;
}(SpeakeasyBase));
export { PutGroupsIdJson200ApplicationJson };
var PutGroupsIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutGroupsIdJsonRequest, _super);
    function PutGroupsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGroupsIdJsonPathParams)
    ], PutGroupsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutGroupsIdJsonRequestBody)
    ], PutGroupsIdJsonRequest.prototype, "request", void 0);
    return PutGroupsIdJsonRequest;
}(SpeakeasyBase));
export { PutGroupsIdJsonRequest };
var PutGroupsIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutGroupsIdJsonResponse, _super);
    function PutGroupsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutGroupsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGroupsIdJson200ApplicationJson)
    ], PutGroupsIdJsonResponse.prototype, "putGroupsIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutGroupsIdJsonResponse.prototype, "statusCode", void 0);
    return PutGroupsIdJsonResponse;
}(SpeakeasyBase));
export { PutGroupsIdJsonResponse };
