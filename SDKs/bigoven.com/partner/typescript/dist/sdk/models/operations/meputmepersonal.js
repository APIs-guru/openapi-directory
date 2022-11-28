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
var MePutMePersonalRequests = /** @class */ (function (_super) {
    __extends(MePutMePersonalRequests, _super);
    function MePutMePersonalRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Api2ModelsPersonal)
    ], MePutMePersonalRequests.prototype, "api2ModelsPersonal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.Api2ModelsPersonal)
    ], MePutMePersonalRequests.prototype, "api2ModelsPersonal1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Api2ModelsPersonal)
    ], MePutMePersonalRequests.prototype, "api2ModelsPersonal2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], MePutMePersonalRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], MePutMePersonalRequests.prototype, "textXml", void 0);
    return MePutMePersonalRequests;
}(SpeakeasyBase));
export { MePutMePersonalRequests };
var MePutMePersonalRequest = /** @class */ (function (_super) {
    __extends(MePutMePersonalRequest, _super);
    function MePutMePersonalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MePutMePersonalRequests)
    ], MePutMePersonalRequest.prototype, "request", void 0);
    return MePutMePersonalRequest;
}(SpeakeasyBase));
export { MePutMePersonalRequest };
var MePutMePersonalResponse = /** @class */ (function (_super) {
    __extends(MePutMePersonalResponse, _super);
    function MePutMePersonalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Api2ModelsBigOvenUser)
    ], MePutMePersonalResponse.prototype, "api2ModelsBigOvenUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], MePutMePersonalResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MePutMePersonalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MePutMePersonalResponse.prototype, "statusCode", void 0);
    return MePutMePersonalResponse;
}(SpeakeasyBase));
export { MePutMePersonalResponse };
