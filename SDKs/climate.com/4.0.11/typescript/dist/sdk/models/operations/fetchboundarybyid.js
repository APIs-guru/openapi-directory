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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FetchBoundaryByIdPathParams = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdPathParams, _super);
    function FetchBoundaryByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=boundaryId" }),
        __metadata("design:type", String)
    ], FetchBoundaryByIdPathParams.prototype, "boundaryId", void 0);
    return FetchBoundaryByIdPathParams;
}(SpeakeasyBase));
export { FetchBoundaryByIdPathParams };
var FetchBoundaryByIdSecurityOption1 = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdSecurityOption1, _super);
    function FetchBoundaryByIdSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FetchBoundaryByIdSecurityOption1.prototype, "apiKey", void 0);
    return FetchBoundaryByIdSecurityOption1;
}(SpeakeasyBase));
export { FetchBoundaryByIdSecurityOption1 };
var FetchBoundaryByIdSecurityOption2 = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdSecurityOption2, _super);
    function FetchBoundaryByIdSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], FetchBoundaryByIdSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return FetchBoundaryByIdSecurityOption2;
}(SpeakeasyBase));
export { FetchBoundaryByIdSecurityOption2 };
var FetchBoundaryByIdSecurity = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdSecurity, _super);
    function FetchBoundaryByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchBoundaryByIdSecurityOption1)
    ], FetchBoundaryByIdSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchBoundaryByIdSecurityOption2)
    ], FetchBoundaryByIdSecurity.prototype, "option2", void 0);
    return FetchBoundaryByIdSecurity;
}(SpeakeasyBase));
export { FetchBoundaryByIdSecurity };
var FetchBoundaryByIdRequest = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdRequest, _super);
    function FetchBoundaryByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBoundaryByIdPathParams)
    ], FetchBoundaryByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchBoundaryByIdSecurity)
    ], FetchBoundaryByIdRequest.prototype, "security", void 0);
    return FetchBoundaryByIdRequest;
}(SpeakeasyBase));
export { FetchBoundaryByIdRequest };
var FetchBoundaryByIdResponse = /** @class */ (function (_super) {
    __extends(FetchBoundaryByIdResponse, _super);
    function FetchBoundaryByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FetchBoundaryByIdResponse.prototype, "boundary", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchBoundaryByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], FetchBoundaryByIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FetchBoundaryByIdResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchBoundaryByIdResponse.prototype, "statusCode", void 0);
    return FetchBoundaryByIdResponse;
}(SpeakeasyBase));
export { FetchBoundaryByIdResponse };
