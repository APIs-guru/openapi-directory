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
import * as shared from "../shared";
var GetPersonByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPersonByIdQueryParams, _super);
    function GetPersonByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPersonByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetPersonByIdQueryParams.prototype, "userId", void 0);
    return GetPersonByIdQueryParams;
}(SpeakeasyBase));
export { GetPersonByIdQueryParams };
var GetPersonById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPersonById200ApplicationJson, _super);
    function GetPersonById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", shared.Person)
    ], GetPersonById200ApplicationJson.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPersonById200ApplicationJson.prototype, "stat", void 0);
    return GetPersonById200ApplicationJson;
}(SpeakeasyBase));
export { GetPersonById200ApplicationJson };
var GetPersonByIdRequest = /** @class */ (function (_super) {
    __extends(GetPersonByIdRequest, _super);
    function GetPersonByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonByIdQueryParams)
    ], GetPersonByIdRequest.prototype, "queryParams", void 0);
    return GetPersonByIdRequest;
}(SpeakeasyBase));
export { GetPersonByIdRequest };
var GetPersonByIdResponse = /** @class */ (function (_super) {
    __extends(GetPersonByIdResponse, _super);
    function GetPersonByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonById200ApplicationJson)
    ], GetPersonByIdResponse.prototype, "getPersonById200ApplicationJsonObject", void 0);
    return GetPersonByIdResponse;
}(SpeakeasyBase));
export { GetPersonByIdResponse };
