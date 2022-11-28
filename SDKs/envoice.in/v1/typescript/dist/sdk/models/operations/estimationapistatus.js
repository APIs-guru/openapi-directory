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
var EstimationApiStatusQueryParams = /** @class */ (function (_super) {
    __extends(EstimationApiStatusQueryParams, _super);
    function EstimationApiStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Number)
    ], EstimationApiStatusQueryParams.prototype, "id", void 0);
    return EstimationApiStatusQueryParams;
}(SpeakeasyBase));
export { EstimationApiStatusQueryParams };
var EstimationApiStatusHeaders = /** @class */ (function (_super) {
    __extends(EstimationApiStatusHeaders, _super);
    function EstimationApiStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], EstimationApiStatusHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], EstimationApiStatusHeaders.prototype, "xAuthSecret", void 0);
    return EstimationApiStatusHeaders;
}(SpeakeasyBase));
export { EstimationApiStatusHeaders };
export var EstimationApiStatus200ApplicationJsonEnum;
(function (EstimationApiStatus200ApplicationJsonEnum) {
    EstimationApiStatus200ApplicationJsonEnum["Draft"] = "Draft";
    EstimationApiStatus200ApplicationJsonEnum["Accepted"] = "Accepted";
    EstimationApiStatus200ApplicationJsonEnum["Rejected"] = "Rejected";
})(EstimationApiStatus200ApplicationJsonEnum || (EstimationApiStatus200ApplicationJsonEnum = {}));
export var EstimationApiStatus200TextJsonEnum;
(function (EstimationApiStatus200TextJsonEnum) {
    EstimationApiStatus200TextJsonEnum["Draft"] = "Draft";
    EstimationApiStatus200TextJsonEnum["Accepted"] = "Accepted";
    EstimationApiStatus200TextJsonEnum["Rejected"] = "Rejected";
})(EstimationApiStatus200TextJsonEnum || (EstimationApiStatus200TextJsonEnum = {}));
var EstimationApiStatusRequest = /** @class */ (function (_super) {
    __extends(EstimationApiStatusRequest, _super);
    function EstimationApiStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiStatusQueryParams)
    ], EstimationApiStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiStatusHeaders)
    ], EstimationApiStatusRequest.prototype, "headers", void 0);
    return EstimationApiStatusRequest;
}(SpeakeasyBase));
export { EstimationApiStatusRequest };
var EstimationApiStatusResponse = /** @class */ (function (_super) {
    __extends(EstimationApiStatusResponse, _super);
    function EstimationApiStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EstimationApiStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiStatusResponse.prototype, "estimationApiStatus200ApplicationJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiStatusResponse.prototype, "estimationApiStatus200TextJsonStringEnum", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiStatusResponse.prototype, "statusCode", void 0);
    return EstimationApiStatusResponse;
}(SpeakeasyBase));
export { EstimationApiStatusResponse };
