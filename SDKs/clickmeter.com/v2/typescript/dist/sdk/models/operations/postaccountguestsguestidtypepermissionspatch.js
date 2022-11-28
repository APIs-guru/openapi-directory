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
export var PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum;
(function (PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum) {
    PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum["Datapoint"] = "datapoint";
    PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum["Group"] = "group";
})(PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum || (PostAccountGuestsGuestIdTypePermissionsPatchTypeEnum = {}));
var PostAccountGuestsGuestIdTypePermissionsPatchPathParams = /** @class */ (function (_super) {
    __extends(PostAccountGuestsGuestIdTypePermissionsPatchPathParams, _super);
    function PostAccountGuestsGuestIdTypePermissionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" }),
        __metadata("design:type", Number)
    ], PostAccountGuestsGuestIdTypePermissionsPatchPathParams.prototype, "guestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], PostAccountGuestsGuestIdTypePermissionsPatchPathParams.prototype, "type", void 0);
    return PostAccountGuestsGuestIdTypePermissionsPatchPathParams;
}(SpeakeasyBase));
export { PostAccountGuestsGuestIdTypePermissionsPatchPathParams };
var PostAccountGuestsGuestIdTypePermissionsPatchRequests = /** @class */ (function (_super) {
    __extends(PostAccountGuestsGuestIdTypePermissionsPatchRequests, _super);
    function PostAccountGuestsGuestIdTypePermissionsPatchRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequests.prototype, "apiCoreRequestsPermissionPatchRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequests.prototype, "apiCoreRequestsPermissionPatchRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequests.prototype, "apiCoreRequestsPermissionPatchRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequests.prototype, "textXml", void 0);
    return PostAccountGuestsGuestIdTypePermissionsPatchRequests;
}(SpeakeasyBase));
export { PostAccountGuestsGuestIdTypePermissionsPatchRequests };
var PostAccountGuestsGuestIdTypePermissionsPatchRequest = /** @class */ (function (_super) {
    __extends(PostAccountGuestsGuestIdTypePermissionsPatchRequest, _super);
    function PostAccountGuestsGuestIdTypePermissionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountGuestsGuestIdTypePermissionsPatchPathParams)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountGuestsGuestIdTypePermissionsPatchRequests)
    ], PostAccountGuestsGuestIdTypePermissionsPatchRequest.prototype, "request", void 0);
    return PostAccountGuestsGuestIdTypePermissionsPatchRequest;
}(SpeakeasyBase));
export { PostAccountGuestsGuestIdTypePermissionsPatchRequest };
var PostAccountGuestsGuestIdTypePermissionsPatchResponse = /** @class */ (function (_super) {
    __extends(PostAccountGuestsGuestIdTypePermissionsPatchResponse, _super);
    function PostAccountGuestsGuestIdTypePermissionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], PostAccountGuestsGuestIdTypePermissionsPatchResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAccountGuestsGuestIdTypePermissionsPatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAccountGuestsGuestIdTypePermissionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAccountGuestsGuestIdTypePermissionsPatchResponse.prototype, "statusCode", void 0);
    return PostAccountGuestsGuestIdTypePermissionsPatchResponse;
}(SpeakeasyBase));
export { PostAccountGuestsGuestIdTypePermissionsPatchResponse };
