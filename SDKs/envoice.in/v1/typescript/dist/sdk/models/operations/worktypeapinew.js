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
var WorkTypeApiNewHeaders = /** @class */ (function (_super) {
    __extends(WorkTypeApiNewHeaders, _super);
    function WorkTypeApiNewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], WorkTypeApiNewHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], WorkTypeApiNewHeaders.prototype, "xAuthSecret", void 0);
    return WorkTypeApiNewHeaders;
}(SpeakeasyBase));
export { WorkTypeApiNewHeaders };
var WorkTypeApiNewRequests = /** @class */ (function (_super) {
    __extends(WorkTypeApiNewRequests, _super);
    function WorkTypeApiNewRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiNewRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiNewRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiNewRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkTypeCreateApiModel)
    ], WorkTypeApiNewRequests.prototype, "workTypeCreateApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.WorkTypeCreateApiModel)
    ], WorkTypeApiNewRequests.prototype, "workTypeCreateApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.WorkTypeCreateApiModel)
    ], WorkTypeApiNewRequests.prototype, "workTypeCreateApiModel2", void 0);
    return WorkTypeApiNewRequests;
}(SpeakeasyBase));
export { WorkTypeApiNewRequests };
var WorkTypeApiNewRequest = /** @class */ (function (_super) {
    __extends(WorkTypeApiNewRequest, _super);
    function WorkTypeApiNewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiNewHeaders)
    ], WorkTypeApiNewRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiNewRequests)
    ], WorkTypeApiNewRequest.prototype, "request", void 0);
    return WorkTypeApiNewRequest;
}(SpeakeasyBase));
export { WorkTypeApiNewRequest };
var WorkTypeApiNewResponse = /** @class */ (function (_super) {
    __extends(WorkTypeApiNewResponse, _super);
    function WorkTypeApiNewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiNewResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkTypeApiNewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiNewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiNewResponse.prototype, "workTypeApiNew200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiNewResponse.prototype, "workTypeApiNew200TextJsonInt32Integer", void 0);
    return WorkTypeApiNewResponse;
}(SpeakeasyBase));
export { WorkTypeApiNewResponse };
