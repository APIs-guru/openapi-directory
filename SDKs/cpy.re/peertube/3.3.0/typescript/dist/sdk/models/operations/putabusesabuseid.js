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
var PutAbusesAbuseIdPathParams = /** @class */ (function (_super) {
    __extends(PutAbusesAbuseIdPathParams, _super);
    function PutAbusesAbuseIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" }),
        __metadata("design:type", Number)
    ], PutAbusesAbuseIdPathParams.prototype, "abuseId", void 0);
    return PutAbusesAbuseIdPathParams;
}(SpeakeasyBase));
export { PutAbusesAbuseIdPathParams };
var PutAbusesAbuseIdRequestBody = /** @class */ (function (_super) {
    __extends(PutAbusesAbuseIdRequestBody, _super);
    function PutAbusesAbuseIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderationComment" }),
        __metadata("design:type", String)
    ], PutAbusesAbuseIdRequestBody.prototype, "moderationComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", Number)
    ], PutAbusesAbuseIdRequestBody.prototype, "state", void 0);
    return PutAbusesAbuseIdRequestBody;
}(SpeakeasyBase));
export { PutAbusesAbuseIdRequestBody };
var PutAbusesAbuseIdSecurity = /** @class */ (function (_super) {
    __extends(PutAbusesAbuseIdSecurity, _super);
    function PutAbusesAbuseIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PutAbusesAbuseIdSecurity.prototype, "oAuth2", void 0);
    return PutAbusesAbuseIdSecurity;
}(SpeakeasyBase));
export { PutAbusesAbuseIdSecurity };
var PutAbusesAbuseIdRequest = /** @class */ (function (_super) {
    __extends(PutAbusesAbuseIdRequest, _super);
    function PutAbusesAbuseIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAbusesAbuseIdPathParams)
    ], PutAbusesAbuseIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAbusesAbuseIdRequestBody)
    ], PutAbusesAbuseIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAbusesAbuseIdSecurity)
    ], PutAbusesAbuseIdRequest.prototype, "security", void 0);
    return PutAbusesAbuseIdRequest;
}(SpeakeasyBase));
export { PutAbusesAbuseIdRequest };
var PutAbusesAbuseIdResponse = /** @class */ (function (_super) {
    __extends(PutAbusesAbuseIdResponse, _super);
    function PutAbusesAbuseIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAbusesAbuseIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAbusesAbuseIdResponse.prototype, "statusCode", void 0);
    return PutAbusesAbuseIdResponse;
}(SpeakeasyBase));
export { PutAbusesAbuseIdResponse };
