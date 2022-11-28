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
var GetProfileWithIdPathParams = /** @class */ (function (_super) {
    __extends(GetProfileWithIdPathParams, _super);
    function GetProfileWithIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetProfileWithIdPathParams.prototype, "id", void 0);
    return GetProfileWithIdPathParams;
}(SpeakeasyBase));
export { GetProfileWithIdPathParams };
var GetProfileWithIdQueryParams = /** @class */ (function (_super) {
    __extends(GetProfileWithIdQueryParams, _super);
    function GetProfileWithIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], GetProfileWithIdQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetProfileWithIdQueryParams.prototype, "lang", void 0);
    return GetProfileWithIdQueryParams;
}(SpeakeasyBase));
export { GetProfileWithIdQueryParams };
var GetProfileWithIdSecurity = /** @class */ (function (_super) {
    __extends(GetProfileWithIdSecurity, _super);
    function GetProfileWithIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetProfileWithIdSecurity.prototype, "accountAuth", void 0);
    return GetProfileWithIdSecurity;
}(SpeakeasyBase));
export { GetProfileWithIdSecurity };
var GetProfileWithIdRequest = /** @class */ (function (_super) {
    __extends(GetProfileWithIdRequest, _super);
    function GetProfileWithIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileWithIdPathParams)
    ], GetProfileWithIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileWithIdQueryParams)
    ], GetProfileWithIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileWithIdSecurity)
    ], GetProfileWithIdRequest.prototype, "security", void 0);
    return GetProfileWithIdRequest;
}(SpeakeasyBase));
export { GetProfileWithIdRequest };
var GetProfileWithIdResponse = /** @class */ (function (_super) {
    __extends(GetProfileWithIdResponse, _super);
    function GetProfileWithIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileWithIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProfileSummary)
    ], GetProfileWithIdResponse.prototype, "profileSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetProfileWithIdResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileWithIdResponse.prototype, "statusCode", void 0);
    return GetProfileWithIdResponse;
}(SpeakeasyBase));
export { GetProfileWithIdResponse };
