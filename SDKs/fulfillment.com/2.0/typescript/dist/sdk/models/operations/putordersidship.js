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
var PutOrdersIdShipPathParams = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipPathParams, _super);
    function PutOrdersIdShipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutOrdersIdShipPathParams.prototype, "id", void 0);
    return PutOrdersIdShipPathParams;
}(SpeakeasyBase));
export { PutOrdersIdShipPathParams };
var PutOrdersIdShipOrderShipV2 = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipOrderShipV2, _super);
    function PutOrdersIdShipOrderShipV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingNumber" }),
        __metadata("design:type", String)
    ], PutOrdersIdShipOrderShipV2.prototype, "trackingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weightOverride" }),
        __metadata("design:type", Number)
    ], PutOrdersIdShipOrderShipV2.prototype, "weightOverride", void 0);
    return PutOrdersIdShipOrderShipV2;
}(SpeakeasyBase));
export { PutOrdersIdShipOrderShipV2 };
var PutOrdersIdShipSecurity = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipSecurity, _super);
    function PutOrdersIdShipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], PutOrdersIdShipSecurity.prototype, "fdcAuth", void 0);
    return PutOrdersIdShipSecurity;
}(SpeakeasyBase));
export { PutOrdersIdShipSecurity };
var PutOrdersIdShipRequest = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipRequest, _super);
    function PutOrdersIdShipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOrdersIdShipPathParams)
    ], PutOrdersIdShipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutOrdersIdShipOrderShipV2)
    ], PutOrdersIdShipRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOrdersIdShipSecurity)
    ], PutOrdersIdShipRequest.prototype, "security", void 0);
    return PutOrdersIdShipRequest;
}(SpeakeasyBase));
export { PutOrdersIdShipRequest };
var PutOrdersIdShipResponse = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipResponse, _super);
    function PutOrdersIdShipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutOrdersIdShipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutOrdersIdShipResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchema)
    ], PutOrdersIdShipResponse.prototype, "oneordersPostResponses201ContentApplication1jsonSchema", void 0);
    return PutOrdersIdShipResponse;
}(SpeakeasyBase));
export { PutOrdersIdShipResponse };
