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
var DenySpaceAccesPathParams = /** @class */ (function (_super) {
    __extends(DenySpaceAccesPathParams, _super);
    function DenySpaceAccesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participantId" }),
        __metadata("design:type", String)
    ], DenySpaceAccesPathParams.prototype, "participantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], DenySpaceAccesPathParams.prototype, "spaceId", void 0);
    return DenySpaceAccesPathParams;
}(SpeakeasyBase));
export { DenySpaceAccesPathParams };
var DenySpaceAccesRequestBody = /** @class */ (function (_super) {
    __extends(DenySpaceAccesRequestBody, _super);
    function DenySpaceAccesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=reason;" }),
        __metadata("design:type", String)
    ], DenySpaceAccesRequestBody.prototype, "reason", void 0);
    return DenySpaceAccesRequestBody;
}(SpeakeasyBase));
export { DenySpaceAccesRequestBody };
var DenySpaceAccesSecurity = /** @class */ (function (_super) {
    __extends(DenySpaceAccesSecurity, _super);
    function DenySpaceAccesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DenySpaceAccesSecurity.prototype, "oauth", void 0);
    return DenySpaceAccesSecurity;
}(SpeakeasyBase));
export { DenySpaceAccesSecurity };
var DenySpaceAccesRequest = /** @class */ (function (_super) {
    __extends(DenySpaceAccesRequest, _super);
    function DenySpaceAccesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DenySpaceAccesPathParams)
    ], DenySpaceAccesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", DenySpaceAccesRequestBody)
    ], DenySpaceAccesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DenySpaceAccesSecurity)
    ], DenySpaceAccesRequest.prototype, "security", void 0);
    return DenySpaceAccesRequest;
}(SpeakeasyBase));
export { DenySpaceAccesRequest };
var DenySpaceAccesResponse = /** @class */ (function (_super) {
    __extends(DenySpaceAccesResponse, _super);
    function DenySpaceAccesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DenySpaceAccesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DenySpaceAccesResponse.prototype, "statusCode", void 0);
    return DenySpaceAccesResponse;
}(SpeakeasyBase));
export { DenySpaceAccesResponse };
