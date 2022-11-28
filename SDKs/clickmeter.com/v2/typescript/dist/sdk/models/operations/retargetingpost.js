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
var RetargetingPostPathParams = /** @class */ (function (_super) {
    __extends(RetargetingPostPathParams, _super);
    function RetargetingPostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], RetargetingPostPathParams.prototype, "id", void 0);
    return RetargetingPostPathParams;
}(SpeakeasyBase));
export { RetargetingPostPathParams };
var RetargetingPostRequests = /** @class */ (function (_super) {
    __extends(RetargetingPostRequests, _super);
    function RetargetingPostRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreDtoRetargetingRetargetingScript)
    ], RetargetingPostRequests.prototype, "apiCoreDtoRetargetingRetargetingScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreDtoRetargetingRetargetingScript)
    ], RetargetingPostRequests.prototype, "apiCoreDtoRetargetingRetargetingScript1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreDtoRetargetingRetargetingScript)
    ], RetargetingPostRequests.prototype, "apiCoreDtoRetargetingRetargetingScript2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], RetargetingPostRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], RetargetingPostRequests.prototype, "textXml", void 0);
    return RetargetingPostRequests;
}(SpeakeasyBase));
export { RetargetingPostRequests };
var RetargetingPostRequest = /** @class */ (function (_super) {
    __extends(RetargetingPostRequest, _super);
    function RetargetingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetargetingPostPathParams)
    ], RetargetingPostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetargetingPostRequests)
    ], RetargetingPostRequest.prototype, "request", void 0);
    return RetargetingPostRequest;
}(SpeakeasyBase));
export { RetargetingPostRequest };
var RetargetingPostResponse = /** @class */ (function (_super) {
    __extends(RetargetingPostResponse, _super);
    function RetargetingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], RetargetingPostResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RetargetingPostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetargetingPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetargetingPostResponse.prototype, "statusCode", void 0);
    return RetargetingPostResponse;
}(SpeakeasyBase));
export { RetargetingPostResponse };
