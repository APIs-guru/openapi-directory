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
export var UrbanDeliveryServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var UrbanDeliveryRequestBody = /** @class */ (function (_super) {
    __extends(UrbanDeliveryRequestBody, _super);
    function UrbanDeliveryRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], UrbanDeliveryRequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], UrbanDeliveryRequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=destination_latitude;" }),
        __metadata("design:type", Number)
    ], UrbanDeliveryRequestBody.prototype, "destinationLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=destination_longitude;" }),
        __metadata("design:type", Number)
    ], UrbanDeliveryRequestBody.prototype, "destinationLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=item_count;" }),
        __metadata("design:type", Number)
    ], UrbanDeliveryRequestBody.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=origin_latitude;" }),
        __metadata("design:type", Number)
    ], UrbanDeliveryRequestBody.prototype, "originLatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=origin_longitude;" }),
        __metadata("design:type", Number)
    ], UrbanDeliveryRequestBody.prototype, "originLongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vehicle_type;" }),
        __metadata("design:type", String)
    ], UrbanDeliveryRequestBody.prototype, "vehicleType", void 0);
    return UrbanDeliveryRequestBody;
}(SpeakeasyBase));
export { UrbanDeliveryRequestBody };
var UrbanDeliveryRequest = /** @class */ (function (_super) {
    __extends(UrbanDeliveryRequest, _super);
    function UrbanDeliveryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UrbanDeliveryRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UrbanDeliveryRequestBody)
    ], UrbanDeliveryRequest.prototype, "request", void 0);
    return UrbanDeliveryRequest;
}(SpeakeasyBase));
export { UrbanDeliveryRequest };
var UrbanDeliveryResponse = /** @class */ (function (_super) {
    __extends(UrbanDeliveryResponse, _super);
    function UrbanDeliveryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UrbanDeliveryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UrbanDeliveryResponse.prototype, "statusCode", void 0);
    return UrbanDeliveryResponse;
}(SpeakeasyBase));
export { UrbanDeliveryResponse };
