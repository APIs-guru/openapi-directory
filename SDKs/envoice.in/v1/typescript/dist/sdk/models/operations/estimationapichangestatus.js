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
var EstimationApiChangeStatusHeaders = /** @class */ (function (_super) {
    __extends(EstimationApiChangeStatusHeaders, _super);
    function EstimationApiChangeStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], EstimationApiChangeStatusHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], EstimationApiChangeStatusHeaders.prototype, "xAuthSecret", void 0);
    return EstimationApiChangeStatusHeaders;
}(SpeakeasyBase));
export { EstimationApiChangeStatusHeaders };
var EstimationApiChangeStatusRequests = /** @class */ (function (_super) {
    __extends(EstimationApiChangeStatusRequests, _super);
    function EstimationApiChangeStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiChangeStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EstimationChangeStatusApiModel)
    ], EstimationApiChangeStatusRequests.prototype, "estimationChangeStatusApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.EstimationChangeStatusApiModel)
    ], EstimationApiChangeStatusRequests.prototype, "estimationChangeStatusApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.EstimationChangeStatusApiModel)
    ], EstimationApiChangeStatusRequests.prototype, "estimationChangeStatusApiModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiChangeStatusRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], EstimationApiChangeStatusRequests.prototype, "textXml", void 0);
    return EstimationApiChangeStatusRequests;
}(SpeakeasyBase));
export { EstimationApiChangeStatusRequests };
var EstimationApiChangeStatusRequest = /** @class */ (function (_super) {
    __extends(EstimationApiChangeStatusRequest, _super);
    function EstimationApiChangeStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiChangeStatusHeaders)
    ], EstimationApiChangeStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiChangeStatusRequests)
    ], EstimationApiChangeStatusRequest.prototype, "request", void 0);
    return EstimationApiChangeStatusRequest;
}(SpeakeasyBase));
export { EstimationApiChangeStatusRequest };
var EstimationApiChangeStatusResponse = /** @class */ (function (_super) {
    __extends(EstimationApiChangeStatusResponse, _super);
    function EstimationApiChangeStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EstimationApiChangeStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiChangeStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], EstimationApiChangeStatusResponse.prototype, "estimationApiChangeStatus200ApplicationJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], EstimationApiChangeStatusResponse.prototype, "estimationApiChangeStatus200TextJsonBoolean", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiChangeStatusResponse.prototype, "statusCode", void 0);
    return EstimationApiChangeStatusResponse;
}(SpeakeasyBase));
export { EstimationApiChangeStatusResponse };
