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
var MeteringGetQueryParams = /** @class */ (function (_super) {
    __extends(MeteringGetQueryParams, _super);
    function MeteringGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" }),
        __metadata("design:type", String)
    ], MeteringGetQueryParams.prototype, "account", void 0);
    return MeteringGetQueryParams;
}(SpeakeasyBase));
export { MeteringGetQueryParams };
var MeteringGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(MeteringGet200ApplicationJson, _super);
    function MeteringGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1.8.0" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "one80", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1.8.1" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "one81", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1.8.2" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "one82", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_processingTime" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "processingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], MeteringGet200ApplicationJson.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=co2_g_oekostrom" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "co2GOekostrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=co2_g_standard" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "co2GStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credits" }),
        __metadata("design:type", Object)
    ], MeteringGet200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeStamp" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "timeStamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], MeteringGet200ApplicationJson.prototype, "ttl", void 0);
    return MeteringGet200ApplicationJson;
}(SpeakeasyBase));
export { MeteringGet200ApplicationJson };
var MeteringGetRequest = /** @class */ (function (_super) {
    __extends(MeteringGetRequest, _super);
    function MeteringGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MeteringGetQueryParams)
    ], MeteringGetRequest.prototype, "queryParams", void 0);
    return MeteringGetRequest;
}(SpeakeasyBase));
export { MeteringGetRequest };
var MeteringGetResponse = /** @class */ (function (_super) {
    __extends(MeteringGetResponse, _super);
    function MeteringGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MeteringGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MeteringGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MeteringGet200ApplicationJson)
    ], MeteringGetResponse.prototype, "meteringGet200ApplicationJsonObject", void 0);
    return MeteringGetResponse;
}(SpeakeasyBase));
export { MeteringGetResponse };
