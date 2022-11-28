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
var GetSubmissionPathParams = /** @class */ (function (_super) {
    __extends(GetSubmissionPathParams, _super);
    function GetSubmissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_id" }),
        __metadata("design:type", String)
    ], GetSubmissionPathParams.prototype, "submissionId", void 0);
    return GetSubmissionPathParams;
}(SpeakeasyBase));
export { GetSubmissionPathParams };
var GetSubmissionQueryParams = /** @class */ (function (_super) {
    __extends(GetSubmissionQueryParams, _super);
    function GetSubmissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_data" }),
        __metadata("design:type", Boolean)
    ], GetSubmissionQueryParams.prototype, "includeData", void 0);
    return GetSubmissionQueryParams;
}(SpeakeasyBase));
export { GetSubmissionQueryParams };
var GetSubmissionSecurity = /** @class */ (function (_super) {
    __extends(GetSubmissionSecurity, _super);
    function GetSubmissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetSubmissionSecurity.prototype, "apiTokenBasic", void 0);
    return GetSubmissionSecurity;
}(SpeakeasyBase));
export { GetSubmissionSecurity };
var GetSubmissionRequest = /** @class */ (function (_super) {
    __extends(GetSubmissionRequest, _super);
    function GetSubmissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionPathParams)
    ], GetSubmissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionQueryParams)
    ], GetSubmissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionSecurity)
    ], GetSubmissionRequest.prototype, "security", void 0);
    return GetSubmissionRequest;
}(SpeakeasyBase));
export { GetSubmissionRequest };
var GetSubmissionResponse = /** @class */ (function (_super) {
    __extends(GetSubmissionResponse, _super);
    function GetSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubmissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubmissionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetSubmissionResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSubmissionResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Submission)
    ], GetSubmissionResponse.prototype, "submission", void 0);
    return GetSubmissionResponse;
}(SpeakeasyBase));
export { GetSubmissionResponse };
