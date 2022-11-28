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
var GetDataRequestPathParams = /** @class */ (function (_super) {
    __extends(GetDataRequestPathParams, _super);
    function GetDataRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" }),
        __metadata("design:type", String)
    ], GetDataRequestPathParams.prototype, "dataRequestId", void 0);
    return GetDataRequestPathParams;
}(SpeakeasyBase));
export { GetDataRequestPathParams };
var GetDataRequestSecurity = /** @class */ (function (_super) {
    __extends(GetDataRequestSecurity, _super);
    function GetDataRequestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetDataRequestSecurity.prototype, "apiTokenBasic", void 0);
    return GetDataRequestSecurity;
}(SpeakeasyBase));
export { GetDataRequestSecurity };
var GetDataRequestRequest = /** @class */ (function (_super) {
    __extends(GetDataRequestRequest, _super);
    function GetDataRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataRequestPathParams)
    ], GetDataRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataRequestSecurity)
    ], GetDataRequestRequest.prototype, "security", void 0);
    return GetDataRequestRequest;
}(SpeakeasyBase));
export { GetDataRequestRequest };
var GetDataRequestResponse = /** @class */ (function (_super) {
    __extends(GetDataRequestResponse, _super);
    function GetDataRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDataRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDataRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetDataRequestResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetDataRequestResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubmissionDataRequest)
    ], GetDataRequestResponse.prototype, "submissionDataRequest", void 0);
    return GetDataRequestResponse;
}(SpeakeasyBase));
export { GetDataRequestResponse };
