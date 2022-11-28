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
var DeleteAbusesAbuseIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdPathParams, _super);
    function DeleteAbusesAbuseIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=abuseId" }),
        __metadata("design:type", Number)
    ], DeleteAbusesAbuseIdPathParams.prototype, "abuseId", void 0);
    return DeleteAbusesAbuseIdPathParams;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdPathParams };
var DeleteAbusesAbuseIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdSecurity, _super);
    function DeleteAbusesAbuseIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteAbusesAbuseIdSecurity.prototype, "oAuth2", void 0);
    return DeleteAbusesAbuseIdSecurity;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdSecurity };
var DeleteAbusesAbuseIdRequest = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdRequest, _super);
    function DeleteAbusesAbuseIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAbusesAbuseIdPathParams)
    ], DeleteAbusesAbuseIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAbusesAbuseIdSecurity)
    ], DeleteAbusesAbuseIdRequest.prototype, "security", void 0);
    return DeleteAbusesAbuseIdRequest;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdRequest };
var DeleteAbusesAbuseIdResponse = /** @class */ (function (_super) {
    __extends(DeleteAbusesAbuseIdResponse, _super);
    function DeleteAbusesAbuseIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAbusesAbuseIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAbusesAbuseIdResponse.prototype, "statusCode", void 0);
    return DeleteAbusesAbuseIdResponse;
}(SpeakeasyBase));
export { DeleteAbusesAbuseIdResponse };
