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
var GsiPredictionQueryParams = /** @class */ (function (_super) {
    __extends(GsiPredictionQueryParams, _super);
    function GsiPredictionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GsiPredictionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GsiPredictionQueryParams.prototype, "zip", void 0);
    return GsiPredictionQueryParams;
}(SpeakeasyBase));
export { GsiPredictionQueryParams };
// GsiPrediction200ApplicationJsonLocation
/**
 * Standarized location info sourced for prediction
**/
var GsiPrediction200ApplicationJsonLocation = /** @class */ (function (_super) {
    __extends(GsiPrediction200ApplicationJsonLocation, _super);
    function GsiPrediction200ApplicationJsonLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GsiPrediction200ApplicationJsonLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], GsiPrediction200ApplicationJsonLocation.prototype, "zip", void 0);
    return GsiPrediction200ApplicationJsonLocation;
}(SpeakeasyBase));
export { GsiPrediction200ApplicationJsonLocation };
// GsiPrediction200ApplicationJsonMatrixH0
/**
 * Indicates number of hours a device should run
**/
var GsiPrediction200ApplicationJsonMatrixH0 = /** @class */ (function (_super) {
    __extends(GsiPrediction200ApplicationJsonMatrixH0, _super);
    function GsiPrediction200ApplicationJsonMatrixH0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_1" }),
        __metadata("design:type", String)
    ], GsiPrediction200ApplicationJsonMatrixH0.prototype, "avg1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_2" }),
        __metadata("design:type", String)
    ], GsiPrediction200ApplicationJsonMatrixH0.prototype, "avg2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_3" }),
        __metadata("design:type", String)
    ], GsiPrediction200ApplicationJsonMatrixH0.prototype, "avg3", void 0);
    return GsiPrediction200ApplicationJsonMatrixH0;
}(SpeakeasyBase));
export { GsiPrediction200ApplicationJsonMatrixH0 };
// GsiPrediction200ApplicationJsonMatrix
/**
 * Device switching recommendation.
**/
var GsiPrediction200ApplicationJsonMatrix = /** @class */ (function (_super) {
    __extends(GsiPrediction200ApplicationJsonMatrix, _super);
    function GsiPrediction200ApplicationJsonMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=h0" }),
        __metadata("design:type", GsiPrediction200ApplicationJsonMatrixH0)
    ], GsiPrediction200ApplicationJsonMatrix.prototype, "h0", void 0);
    return GsiPrediction200ApplicationJsonMatrix;
}(SpeakeasyBase));
export { GsiPrediction200ApplicationJsonMatrix };
var GsiPrediction200ApplicationJson = /** @class */ (function (_super) {
    __extends(GsiPrediction200ApplicationJson, _super);
    function GsiPrediction200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forecast", elemType: shared.ForecastItem }),
        __metadata("design:type", Array)
    ], GsiPrediction200ApplicationJson.prototype, "forecast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GsiPrediction200ApplicationJsonLocation)
    ], GsiPrediction200ApplicationJson.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matrix" }),
        __metadata("design:type", GsiPrediction200ApplicationJsonMatrix)
    ], GsiPrediction200ApplicationJson.prototype, "matrix", void 0);
    return GsiPrediction200ApplicationJson;
}(SpeakeasyBase));
export { GsiPrediction200ApplicationJson };
var GsiPredictionRequest = /** @class */ (function (_super) {
    __extends(GsiPredictionRequest, _super);
    function GsiPredictionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiPredictionQueryParams)
    ], GsiPredictionRequest.prototype, "queryParams", void 0);
    return GsiPredictionRequest;
}(SpeakeasyBase));
export { GsiPredictionRequest };
var GsiPredictionResponse = /** @class */ (function (_super) {
    __extends(GsiPredictionResponse, _super);
    function GsiPredictionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GsiPredictionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GsiPredictionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiPrediction200ApplicationJson)
    ], GsiPredictionResponse.prototype, "gsiPrediction200ApplicationJsonObject", void 0);
    return GsiPredictionResponse;
}(SpeakeasyBase));
export { GsiPredictionResponse };
