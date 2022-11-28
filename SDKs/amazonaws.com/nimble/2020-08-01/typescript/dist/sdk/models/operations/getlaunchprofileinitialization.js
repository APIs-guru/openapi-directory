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
var GetLaunchProfileInitializationPathParams = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationPathParams, _super);
    function GetLaunchProfileInitializationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationPathParams.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationPathParams.prototype, "studioId", void 0);
    return GetLaunchProfileInitializationPathParams;
}(SpeakeasyBase));
export { GetLaunchProfileInitializationPathParams };
var GetLaunchProfileInitializationQueryParams = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationQueryParams, _super);
    function GetLaunchProfileInitializationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=launchProfileProtocolVersions" }),
        __metadata("design:type", Array)
    ], GetLaunchProfileInitializationQueryParams.prototype, "launchProfileProtocolVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=launchPurpose" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationQueryParams.prototype, "launchPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationQueryParams.prototype, "platform", void 0);
    return GetLaunchProfileInitializationQueryParams;
}(SpeakeasyBase));
export { GetLaunchProfileInitializationQueryParams };
var GetLaunchProfileInitializationHeaders = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationHeaders, _super);
    function GetLaunchProfileInitializationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetLaunchProfileInitializationHeaders;
}(SpeakeasyBase));
export { GetLaunchProfileInitializationHeaders };
var GetLaunchProfileInitializationRequest = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationRequest, _super);
    function GetLaunchProfileInitializationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLaunchProfileInitializationPathParams)
    ], GetLaunchProfileInitializationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLaunchProfileInitializationQueryParams)
    ], GetLaunchProfileInitializationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLaunchProfileInitializationHeaders)
    ], GetLaunchProfileInitializationRequest.prototype, "headers", void 0);
    return GetLaunchProfileInitializationRequest;
}(SpeakeasyBase));
export { GetLaunchProfileInitializationRequest };
var GetLaunchProfileInitializationResponse = /** @class */ (function (_super) {
    __extends(GetLaunchProfileInitializationResponse, _super);
    function GetLaunchProfileInitializationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLaunchProfileInitializationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetLaunchProfileInitializationResponse)
    ], GetLaunchProfileInitializationResponse.prototype, "getLaunchProfileInitializationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLaunchProfileInitializationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLaunchProfileInitializationResponse.prototype, "validationException", void 0);
    return GetLaunchProfileInitializationResponse;
}(SpeakeasyBase));
export { GetLaunchProfileInitializationResponse };
