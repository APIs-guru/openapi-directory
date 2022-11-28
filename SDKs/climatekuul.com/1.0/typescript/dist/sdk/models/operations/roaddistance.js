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
export var RoadDistanceServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var RoadDistanceRequestBody = /** @class */ (function (_super) {
    __extends(RoadDistanceRequestBody, _super);
    function RoadDistanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], RoadDistanceRequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], RoadDistanceRequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=travel_distance;" }),
        __metadata("design:type", Number)
    ], RoadDistanceRequestBody.prototype, "travelDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=trip_end;" }),
        __metadata("design:type", Number)
    ], RoadDistanceRequestBody.prototype, "tripEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=trip_start;" }),
        __metadata("design:type", Number)
    ], RoadDistanceRequestBody.prototype, "tripStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vehicle_make;" }),
        __metadata("design:type", String)
    ], RoadDistanceRequestBody.prototype, "vehicleMake", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vehicle_type;" }),
        __metadata("design:type", String)
    ], RoadDistanceRequestBody.prototype, "vehicleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=vehicle_year;" }),
        __metadata("design:type", Number)
    ], RoadDistanceRequestBody.prototype, "vehicleYear", void 0);
    return RoadDistanceRequestBody;
}(SpeakeasyBase));
export { RoadDistanceRequestBody };
var RoadDistanceRequest = /** @class */ (function (_super) {
    __extends(RoadDistanceRequest, _super);
    function RoadDistanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoadDistanceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", RoadDistanceRequestBody)
    ], RoadDistanceRequest.prototype, "request", void 0);
    return RoadDistanceRequest;
}(SpeakeasyBase));
export { RoadDistanceRequest };
var RoadDistanceResponse = /** @class */ (function (_super) {
    __extends(RoadDistanceResponse, _super);
    function RoadDistanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RoadDistanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RoadDistanceResponse.prototype, "statusCode", void 0);
    return RoadDistanceResponse;
}(SpeakeasyBase));
export { RoadDistanceResponse };
