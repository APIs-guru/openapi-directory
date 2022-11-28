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
var GroupsPatchNotesPathParams = /** @class */ (function (_super) {
    __extends(GroupsPatchNotesPathParams, _super);
    function GroupsPatchNotesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GroupsPatchNotesPathParams.prototype, "id", void 0);
    return GroupsPatchNotesPathParams;
}(SpeakeasyBase));
export { GroupsPatchNotesPathParams };
var GroupsPatchNotesRequests = /** @class */ (function (_super) {
    __extends(GroupsPatchNotesRequests, _super);
    function GroupsPatchNotesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], GroupsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], GroupsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsGenericTextPatch)
    ], GroupsPatchNotesRequests.prototype, "apiCoreRequestsGenericTextPatch2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], GroupsPatchNotesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], GroupsPatchNotesRequests.prototype, "textXml", void 0);
    return GroupsPatchNotesRequests;
}(SpeakeasyBase));
export { GroupsPatchNotesRequests };
var GroupsPatchNotesRequest = /** @class */ (function (_super) {
    __extends(GroupsPatchNotesRequest, _super);
    function GroupsPatchNotesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsPatchNotesPathParams)
    ], GroupsPatchNotesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupsPatchNotesRequests)
    ], GroupsPatchNotesRequest.prototype, "request", void 0);
    return GroupsPatchNotesRequest;
}(SpeakeasyBase));
export { GroupsPatchNotesRequest };
var GroupsPatchNotesResponse = /** @class */ (function (_super) {
    __extends(GroupsPatchNotesResponse, _super);
    function GroupsPatchNotesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], GroupsPatchNotesResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupsPatchNotesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupsPatchNotesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupsPatchNotesResponse.prototype, "statusCode", void 0);
    return GroupsPatchNotesResponse;
}(SpeakeasyBase));
export { GroupsPatchNotesResponse };
