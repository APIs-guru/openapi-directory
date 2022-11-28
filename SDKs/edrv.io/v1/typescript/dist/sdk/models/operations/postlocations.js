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
var PostLocationsRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PostLocationsRequestBodyAddress, _super);
    function PostLocationsRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostLocationsRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostLocationsRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PostLocationsRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAndNumber" }),
        __metadata("design:type", String)
    ], PostLocationsRequestBodyAddress.prototype, "streetAndNumber", void 0);
    return PostLocationsRequestBodyAddress;
}(SpeakeasyBase));
export { PostLocationsRequestBodyAddress };
var PostLocationsRequestBodyCoordinates = /** @class */ (function (_super) {
    __extends(PostLocationsRequestBodyCoordinates, _super);
    function PostLocationsRequestBodyCoordinates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PostLocationsRequestBodyCoordinates.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PostLocationsRequestBodyCoordinates.prototype, "longitude", void 0);
    return PostLocationsRequestBodyCoordinates;
}(SpeakeasyBase));
export { PostLocationsRequestBodyCoordinates };
var PostLocationsRequestBody = /** @class */ (function (_super) {
    __extends(PostLocationsRequestBody, _super);
    function PostLocationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostLocationsRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PostLocationsRequestBodyAddress)
    ], PostLocationsRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargestations" }),
        __metadata("design:type", Array)
    ], PostLocationsRequestBody.prototype, "chargestations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", PostLocationsRequestBodyCoordinates)
    ], PostLocationsRequestBody.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatorName" }),
        __metadata("design:type", String)
    ], PostLocationsRequestBody.prototype, "operatorName", void 0);
    return PostLocationsRequestBody;
}(SpeakeasyBase));
export { PostLocationsRequestBody };
var PostLocations200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLocations200ApplicationJson, _super);
    function PostLocations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLocations200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PostLocations200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PostLocations200ApplicationJson.prototype, "result", void 0);
    return PostLocations200ApplicationJson;
}(SpeakeasyBase));
export { PostLocations200ApplicationJson };
var PostLocationsRequest = /** @class */ (function (_super) {
    __extends(PostLocationsRequest, _super);
    function PostLocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLocationsRequestBody)
    ], PostLocationsRequest.prototype, "request", void 0);
    return PostLocationsRequest;
}(SpeakeasyBase));
export { PostLocationsRequest };
var PostLocationsResponse = /** @class */ (function (_super) {
    __extends(PostLocationsResponse, _super);
    function PostLocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLocationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLocationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLocations200ApplicationJson)
    ], PostLocationsResponse.prototype, "postLocations200ApplicationJsonObject", void 0);
    return PostLocationsResponse;
}(SpeakeasyBase));
export { PostLocationsResponse };
