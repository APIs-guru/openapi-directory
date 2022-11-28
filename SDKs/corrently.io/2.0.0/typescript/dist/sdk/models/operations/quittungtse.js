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
var QuittungTseQueryParams = /** @class */ (function (_super) {
    __extends(QuittungTseQueryParams, _super);
    function QuittungTseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" }),
        __metadata("design:type", String)
    ], QuittungTseQueryParams.prototype, "account", void 0);
    return QuittungTseQueryParams;
}(SpeakeasyBase));
export { QuittungTseQueryParams };
var QuittungTse200ApplicationJson = /** @class */ (function (_super) {
    __extends(QuittungTse200ApplicationJson, _super);
    function QuittungTse200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], QuittungTse200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publickey" }),
        __metadata("design:type", String)
    ], QuittungTse200ApplicationJson.prototype, "publickey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], QuittungTse200ApplicationJson.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], QuittungTse200ApplicationJson.prototype, "signature", void 0);
    return QuittungTse200ApplicationJson;
}(SpeakeasyBase));
export { QuittungTse200ApplicationJson };
var QuittungTseRequest = /** @class */ (function (_super) {
    __extends(QuittungTseRequest, _super);
    function QuittungTseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuittungTseQueryParams)
    ], QuittungTseRequest.prototype, "queryParams", void 0);
    return QuittungTseRequest;
}(SpeakeasyBase));
export { QuittungTseRequest };
var QuittungTseResponse = /** @class */ (function (_super) {
    __extends(QuittungTseResponse, _super);
    function QuittungTseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QuittungTseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QuittungTseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QuittungTse200ApplicationJson)
    ], QuittungTseResponse.prototype, "quittungTse200ApplicationJsonObject", void 0);
    return QuittungTseResponse;
}(SpeakeasyBase));
export { QuittungTseResponse };
