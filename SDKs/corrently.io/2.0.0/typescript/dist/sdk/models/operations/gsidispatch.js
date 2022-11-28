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
var GsiDispatchQueryParams = /** @class */ (function (_super) {
    __extends(GsiDispatchQueryParams, _super);
    function GsiDispatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GsiDispatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GsiDispatchQueryParams.prototype, "zip", void 0);
    return GsiDispatchQueryParams;
}(SpeakeasyBase));
export { GsiDispatchQueryParams };
// GsiDispatch200ApplicationJsonTimeframe
/**
 * Evaluated timeframe for this request
**/
var GsiDispatch200ApplicationJsonTimeframe = /** @class */ (function (_super) {
    __extends(GsiDispatch200ApplicationJsonTimeframe, _super);
    function GsiDispatch200ApplicationJsonTimeframe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], GsiDispatch200ApplicationJsonTimeframe.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], GsiDispatch200ApplicationJsonTimeframe.prototype, "start", void 0);
    return GsiDispatch200ApplicationJsonTimeframe;
}(SpeakeasyBase));
export { GsiDispatch200ApplicationJsonTimeframe };
var GsiDispatch200ApplicationJson = /** @class */ (function (_super) {
    __extends(GsiDispatch200ApplicationJson, _super);
    function GsiDispatch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_distance_km" }),
        __metadata("design:type", Number)
    ], GsiDispatch200ApplicationJson.prototype, "avgDistanceKm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispatch_from", elemType: shared.DispatchLocation }),
        __metadata("design:type", Array)
    ], GsiDispatch200ApplicationJson.prototype, "dispatchFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispatch_target", elemType: shared.DispatchLocation }),
        __metadata("design:type", Array)
    ], GsiDispatch200ApplicationJson.prototype, "dispatchTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postmix" }),
        __metadata("design:type", Map)
    ], GsiDispatch200ApplicationJson.prototype, "postmix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=premix" }),
        __metadata("design:type", Map)
    ], GsiDispatch200ApplicationJson.prototype, "premix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeframe" }),
        __metadata("design:type", GsiDispatch200ApplicationJsonTimeframe)
    ], GsiDispatch200ApplicationJson.prototype, "timeframe", void 0);
    return GsiDispatch200ApplicationJson;
}(SpeakeasyBase));
export { GsiDispatch200ApplicationJson };
var GsiDispatchRequest = /** @class */ (function (_super) {
    __extends(GsiDispatchRequest, _super);
    function GsiDispatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiDispatchQueryParams)
    ], GsiDispatchRequest.prototype, "queryParams", void 0);
    return GsiDispatchRequest;
}(SpeakeasyBase));
export { GsiDispatchRequest };
var GsiDispatchResponse = /** @class */ (function (_super) {
    __extends(GsiDispatchResponse, _super);
    function GsiDispatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GsiDispatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GsiDispatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GsiDispatch200ApplicationJson)
    ], GsiDispatchResponse.prototype, "gsiDispatch200ApplicationJsonObject", void 0);
    return GsiDispatchResponse;
}(SpeakeasyBase));
export { GsiDispatchResponse };
