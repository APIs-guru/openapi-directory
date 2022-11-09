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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PutContainersQuotaHeaders = /** @class */ (function (_super) {
    __extends(PutContainersQuotaHeaders, _super);
    function PutContainersQuotaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PutContainersQuotaHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PutContainersQuotaHeaders.prototype, "xAuthToken", void 0);
    return PutContainersQuotaHeaders;
}(SpeakeasyBase));
export { PutContainersQuotaHeaders };
var PutContainersQuotaRequest = /** @class */ (function (_super) {
    __extends(PutContainersQuotaRequest, _super);
    function PutContainersQuotaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutContainersQuotaHeaders)
    ], PutContainersQuotaRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutContainersQuotaRequest.prototype, "request", void 0);
    return PutContainersQuotaRequest;
}(SpeakeasyBase));
export { PutContainersQuotaRequest };
var PutContainersQuotaResponse = /** @class */ (function (_super) {
    __extends(PutContainersQuotaResponse, _super);
    function PutContainersQuotaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutContainersQuotaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutContainersQuotaResponse.prototype, "statusCode", void 0);
    return PutContainersQuotaResponse;
}(SpeakeasyBase));
export { PutContainersQuotaResponse };
