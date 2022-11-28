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
var RequestSpaceAccesPathParams = /** @class */ (function (_super) {
    __extends(RequestSpaceAccesPathParams, _super);
    function RequestSpaceAccesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], RequestSpaceAccesPathParams.prototype, "spaceId", void 0);
    return RequestSpaceAccesPathParams;
}(SpeakeasyBase));
export { RequestSpaceAccesPathParams };
var RequestSpaceAccesRequestBody = /** @class */ (function (_super) {
    __extends(RequestSpaceAccesRequestBody, _super);
    function RequestSpaceAccesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=reason;" }),
        __metadata("design:type", String)
    ], RequestSpaceAccesRequestBody.prototype, "reason", void 0);
    return RequestSpaceAccesRequestBody;
}(SpeakeasyBase));
export { RequestSpaceAccesRequestBody };
var RequestSpaceAccesSecurity = /** @class */ (function (_super) {
    __extends(RequestSpaceAccesSecurity, _super);
    function RequestSpaceAccesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RequestSpaceAccesSecurity.prototype, "oauth", void 0);
    return RequestSpaceAccesSecurity;
}(SpeakeasyBase));
export { RequestSpaceAccesSecurity };
var RequestSpaceAccesRequest = /** @class */ (function (_super) {
    __extends(RequestSpaceAccesRequest, _super);
    function RequestSpaceAccesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSpaceAccesPathParams)
    ], RequestSpaceAccesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", RequestSpaceAccesRequestBody)
    ], RequestSpaceAccesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestSpaceAccesSecurity)
    ], RequestSpaceAccesRequest.prototype, "security", void 0);
    return RequestSpaceAccesRequest;
}(SpeakeasyBase));
export { RequestSpaceAccesRequest };
var RequestSpaceAccesResponse = /** @class */ (function (_super) {
    __extends(RequestSpaceAccesResponse, _super);
    function RequestSpaceAccesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestSpaceAccesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestSpaceAccesResponse.prototype, "statusCode", void 0);
    return RequestSpaceAccesResponse;
}(SpeakeasyBase));
export { RequestSpaceAccesResponse };
