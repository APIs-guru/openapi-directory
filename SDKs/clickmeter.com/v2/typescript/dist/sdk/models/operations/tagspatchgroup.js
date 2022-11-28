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
var TagsPatchGroupPathParams = /** @class */ (function (_super) {
    __extends(TagsPatchGroupPathParams, _super);
    function TagsPatchGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsPatchGroupPathParams.prototype, "tagId", void 0);
    return TagsPatchGroupPathParams;
}(SpeakeasyBase));
export { TagsPatchGroupPathParams };
var TagsPatchGroupRequests = /** @class */ (function (_super) {
    __extends(TagsPatchGroupRequests, _super);
    function TagsPatchGroupRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPatchBody)
    ], TagsPatchGroupRequests.prototype, "apiCoreRequestsPatchBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsPatchBody)
    ], TagsPatchGroupRequests.prototype, "apiCoreRequestsPatchBody1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPatchBody)
    ], TagsPatchGroupRequests.prototype, "apiCoreRequestsPatchBody2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], TagsPatchGroupRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TagsPatchGroupRequests.prototype, "textXml", void 0);
    return TagsPatchGroupRequests;
}(SpeakeasyBase));
export { TagsPatchGroupRequests };
var TagsPatchGroupRequest = /** @class */ (function (_super) {
    __extends(TagsPatchGroupRequest, _super);
    function TagsPatchGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsPatchGroupPathParams)
    ], TagsPatchGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsPatchGroupRequests)
    ], TagsPatchGroupRequest.prototype, "request", void 0);
    return TagsPatchGroupRequest;
}(SpeakeasyBase));
export { TagsPatchGroupRequest };
var TagsPatchGroupResponse = /** @class */ (function (_super) {
    __extends(TagsPatchGroupResponse, _super);
    function TagsPatchGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], TagsPatchGroupResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagsPatchGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsPatchGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsPatchGroupResponse.prototype, "statusCode", void 0);
    return TagsPatchGroupResponse;
}(SpeakeasyBase));
export { TagsPatchGroupResponse };
