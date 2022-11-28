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
var WorkTypeApiUpdateHeaders = /** @class */ (function (_super) {
    __extends(WorkTypeApiUpdateHeaders, _super);
    function WorkTypeApiUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], WorkTypeApiUpdateHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], WorkTypeApiUpdateHeaders.prototype, "xAuthSecret", void 0);
    return WorkTypeApiUpdateHeaders;
}(SpeakeasyBase));
export { WorkTypeApiUpdateHeaders };
var WorkTypeApiUpdateRequests = /** @class */ (function (_super) {
    __extends(WorkTypeApiUpdateRequests, _super);
    function WorkTypeApiUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiUpdateRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/html" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiUpdateRequests.prototype, "textHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], WorkTypeApiUpdateRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WorkTypeUpdateApiModel)
    ], WorkTypeApiUpdateRequests.prototype, "workTypeUpdateApiModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.WorkTypeUpdateApiModel)
    ], WorkTypeApiUpdateRequests.prototype, "workTypeUpdateApiModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.WorkTypeUpdateApiModel)
    ], WorkTypeApiUpdateRequests.prototype, "workTypeUpdateApiModel2", void 0);
    return WorkTypeApiUpdateRequests;
}(SpeakeasyBase));
export { WorkTypeApiUpdateRequests };
var WorkTypeApiUpdateRequest = /** @class */ (function (_super) {
    __extends(WorkTypeApiUpdateRequest, _super);
    function WorkTypeApiUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiUpdateHeaders)
    ], WorkTypeApiUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WorkTypeApiUpdateRequests)
    ], WorkTypeApiUpdateRequest.prototype, "request", void 0);
    return WorkTypeApiUpdateRequest;
}(SpeakeasyBase));
export { WorkTypeApiUpdateRequest };
var WorkTypeApiUpdateResponse = /** @class */ (function (_super) {
    __extends(WorkTypeApiUpdateResponse, _super);
    function WorkTypeApiUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WorkTypeApiUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WorkTypeApiUpdateResponse.prototype, "statusCode", void 0);
    return WorkTypeApiUpdateResponse;
}(SpeakeasyBase));
export { WorkTypeApiUpdateResponse };
