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
var PatchLocationPathParams = /** @class */ (function (_super) {
    __extends(PatchLocationPathParams, _super);
    function PatchLocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchLocationPathParams.prototype, "id", void 0);
    return PatchLocationPathParams;
}(SpeakeasyBase));
export { PatchLocationPathParams };
var PatchLocationRequestBodyAddress = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyAddress, _super);
    function PatchLocationRequestBodyAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyAddress.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyAddress.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyAddress.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streetAndNumber" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyAddress.prototype, "streetAndNumber", void 0);
    return PatchLocationRequestBodyAddress;
}(SpeakeasyBase));
export { PatchLocationRequestBodyAddress };
var PatchLocationRequestBodyCoordinates = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyCoordinates, _super);
    function PatchLocationRequestBodyCoordinates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PatchLocationRequestBodyCoordinates.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PatchLocationRequestBodyCoordinates.prototype, "longitude", void 0);
    return PatchLocationRequestBodyCoordinates;
}(SpeakeasyBase));
export { PatchLocationRequestBodyCoordinates };
var PatchLocationRequestBodyOpeningHours0 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours0, _super);
    function PatchLocationRequestBodyOpeningHours0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours0.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours0.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours0;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours0 };
var PatchLocationRequestBodyOpeningHours1 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours1, _super);
    function PatchLocationRequestBodyOpeningHours1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours1.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours1.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours1;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours1 };
var PatchLocationRequestBodyOpeningHours2 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours2, _super);
    function PatchLocationRequestBodyOpeningHours2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours2.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours2.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours2;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours2 };
var PatchLocationRequestBodyOpeningHours3 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours3, _super);
    function PatchLocationRequestBodyOpeningHours3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours3.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours3.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours3;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours3 };
var PatchLocationRequestBodyOpeningHours4 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours4, _super);
    function PatchLocationRequestBodyOpeningHours4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours4.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours4.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours4;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours4 };
var PatchLocationRequestBodyOpeningHours5 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours5, _super);
    function PatchLocationRequestBodyOpeningHours5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours5.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours5.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours5;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours5 };
var PatchLocationRequestBodyOpeningHours6 = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours6, _super);
    function PatchLocationRequestBodyOpeningHours6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours6.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBodyOpeningHours6.prototype, "startTime", void 0);
    return PatchLocationRequestBodyOpeningHours6;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours6 };
var PatchLocationRequestBodyOpeningHours = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBodyOpeningHours, _super);
    function PatchLocationRequestBodyOpeningHours() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=0", elemType: PatchLocationRequestBodyOpeningHours0 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "zero", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1", elemType: PatchLocationRequestBodyOpeningHours1 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "one", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=2", elemType: PatchLocationRequestBodyOpeningHours2 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "two", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=3", elemType: PatchLocationRequestBodyOpeningHours3 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "three", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=4", elemType: PatchLocationRequestBodyOpeningHours4 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "four", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=5", elemType: PatchLocationRequestBodyOpeningHours5 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "five", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=6", elemType: PatchLocationRequestBodyOpeningHours6 }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBodyOpeningHours.prototype, "six", void 0);
    return PatchLocationRequestBodyOpeningHours;
}(SpeakeasyBase));
export { PatchLocationRequestBodyOpeningHours };
var PatchLocationRequestBody = /** @class */ (function (_super) {
    __extends(PatchLocationRequestBody, _super);
    function PatchLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PatchLocationRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PatchLocationRequestBodyAddress)
    ], PatchLocationRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargestations" }),
        __metadata("design:type", Array)
    ], PatchLocationRequestBody.prototype, "chargestations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coordinates" }),
        __metadata("design:type", PatchLocationRequestBodyCoordinates)
    ], PatchLocationRequestBody.prototype, "coordinates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openingHours" }),
        __metadata("design:type", PatchLocationRequestBodyOpeningHours)
    ], PatchLocationRequestBody.prototype, "openingHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operatorName" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBody.prototype, "operatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], PatchLocationRequestBody.prototype, "timezone", void 0);
    return PatchLocationRequestBody;
}(SpeakeasyBase));
export { PatchLocationRequestBody };
var PatchLocation200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchLocation200ApplicationJson, _super);
    function PatchLocation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchLocation200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchLocation200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PatchLocation200ApplicationJson.prototype, "result", void 0);
    return PatchLocation200ApplicationJson;
}(SpeakeasyBase));
export { PatchLocation200ApplicationJson };
var PatchLocationRequest = /** @class */ (function (_super) {
    __extends(PatchLocationRequest, _super);
    function PatchLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchLocationPathParams)
    ], PatchLocationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchLocationRequestBody)
    ], PatchLocationRequest.prototype, "request", void 0);
    return PatchLocationRequest;
}(SpeakeasyBase));
export { PatchLocationRequest };
var PatchLocationResponse = /** @class */ (function (_super) {
    __extends(PatchLocationResponse, _super);
    function PatchLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchLocation200ApplicationJson)
    ], PatchLocationResponse.prototype, "patchLocation200ApplicationJsonObject", void 0);
    return PatchLocationResponse;
}(SpeakeasyBase));
export { PatchLocationResponse };
