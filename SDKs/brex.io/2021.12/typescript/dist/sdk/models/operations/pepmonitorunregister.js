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
var PepMonitorUnregisterPathParams = /** @class */ (function (_super) {
    __extends(PepMonitorUnregisterPathParams, _super);
    function PepMonitorUnregisterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PepMonitorUnregisterPathParams.prototype, "id", void 0);
    return PepMonitorUnregisterPathParams;
}(SpeakeasyBase));
export { PepMonitorUnregisterPathParams };
var PepMonitorUnregisterSecurity = /** @class */ (function (_super) {
    __extends(PepMonitorUnregisterSecurity, _super);
    function PepMonitorUnregisterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], PepMonitorUnregisterSecurity.prototype, "userKey", void 0);
    return PepMonitorUnregisterSecurity;
}(SpeakeasyBase));
export { PepMonitorUnregisterSecurity };
var PepMonitorUnregisterRequest = /** @class */ (function (_super) {
    __extends(PepMonitorUnregisterRequest, _super);
    function PepMonitorUnregisterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PepMonitorUnregisterPathParams)
    ], PepMonitorUnregisterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PepMonitorUnregisterSecurity)
    ], PepMonitorUnregisterRequest.prototype, "security", void 0);
    return PepMonitorUnregisterRequest;
}(SpeakeasyBase));
export { PepMonitorUnregisterRequest };
var PepMonitorUnregisterResponse = /** @class */ (function (_super) {
    __extends(PepMonitorUnregisterResponse, _super);
    function PepMonitorUnregisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PepMonitorUnregisterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PepMonitorUnregisterResponse.prototype, "pepMonitorUnregister200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PepMonitorUnregisterResponse.prototype, "pepMonitorUnregisterDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PepMonitorUnregisterResponse.prototype, "statusCode", void 0);
    return PepMonitorUnregisterResponse;
}(SpeakeasyBase));
export { PepMonitorUnregisterResponse };
