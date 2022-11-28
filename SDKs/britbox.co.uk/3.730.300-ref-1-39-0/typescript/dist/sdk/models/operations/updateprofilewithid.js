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
var UpdateProfileWithIdPathParams = /** @class */ (function (_super) {
    __extends(UpdateProfileWithIdPathParams, _super);
    function UpdateProfileWithIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateProfileWithIdPathParams.prototype, "id", void 0);
    return UpdateProfileWithIdPathParams;
}(SpeakeasyBase));
export { UpdateProfileWithIdPathParams };
var UpdateProfileWithIdQueryParams = /** @class */ (function (_super) {
    __extends(UpdateProfileWithIdQueryParams, _super);
    function UpdateProfileWithIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" }),
        __metadata("design:type", Array)
    ], UpdateProfileWithIdQueryParams.prototype, "ff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], UpdateProfileWithIdQueryParams.prototype, "lang", void 0);
    return UpdateProfileWithIdQueryParams;
}(SpeakeasyBase));
export { UpdateProfileWithIdQueryParams };
var UpdateProfileWithIdSecurity = /** @class */ (function (_super) {
    __extends(UpdateProfileWithIdSecurity, _super);
    function UpdateProfileWithIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], UpdateProfileWithIdSecurity.prototype, "accountAuth", void 0);
    return UpdateProfileWithIdSecurity;
}(SpeakeasyBase));
export { UpdateProfileWithIdSecurity };
var UpdateProfileWithIdRequest = /** @class */ (function (_super) {
    __extends(UpdateProfileWithIdRequest, _super);
    function UpdateProfileWithIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfileWithIdPathParams)
    ], UpdateProfileWithIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfileWithIdQueryParams)
    ], UpdateProfileWithIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProfileUpdateRequest)
    ], UpdateProfileWithIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProfileWithIdSecurity)
    ], UpdateProfileWithIdRequest.prototype, "security", void 0);
    return UpdateProfileWithIdRequest;
}(SpeakeasyBase));
export { UpdateProfileWithIdRequest };
var UpdateProfileWithIdResponse = /** @class */ (function (_super) {
    __extends(UpdateProfileWithIdResponse, _super);
    function UpdateProfileWithIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProfileWithIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], UpdateProfileWithIdResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProfileWithIdResponse.prototype, "statusCode", void 0);
    return UpdateProfileWithIdResponse;
}(SpeakeasyBase));
export { UpdateProfileWithIdResponse };
