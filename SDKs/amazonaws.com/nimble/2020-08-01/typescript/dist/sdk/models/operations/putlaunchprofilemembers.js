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
var PutLaunchProfileMembersPathParams = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersPathParams, _super);
    function PutLaunchProfileMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersPathParams.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersPathParams.prototype, "studioId", void 0);
    return PutLaunchProfileMembersPathParams;
}(SpeakeasyBase));
export { PutLaunchProfileMembersPathParams };
var PutLaunchProfileMembersHeaders = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersHeaders, _super);
    function PutLaunchProfileMembersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutLaunchProfileMembersHeaders;
}(SpeakeasyBase));
export { PutLaunchProfileMembersHeaders };
var PutLaunchProfileMembersRequestBody = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersRequestBody, _super);
    function PutLaunchProfileMembersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityStoreId" }),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersRequestBody.prototype, "identityStoreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: shared.NewLaunchProfileMember }),
        __metadata("design:type", Array)
    ], PutLaunchProfileMembersRequestBody.prototype, "members", void 0);
    return PutLaunchProfileMembersRequestBody;
}(SpeakeasyBase));
export { PutLaunchProfileMembersRequestBody };
var PutLaunchProfileMembersRequest = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersRequest, _super);
    function PutLaunchProfileMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutLaunchProfileMembersPathParams)
    ], PutLaunchProfileMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutLaunchProfileMembersHeaders)
    ], PutLaunchProfileMembersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutLaunchProfileMembersRequestBody)
    ], PutLaunchProfileMembersRequest.prototype, "request", void 0);
    return PutLaunchProfileMembersRequest;
}(SpeakeasyBase));
export { PutLaunchProfileMembersRequest };
var PutLaunchProfileMembersResponse = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersResponse, _super);
    function PutLaunchProfileMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutLaunchProfileMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutLaunchProfileMembersResponse.prototype, "putLaunchProfileMembersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutLaunchProfileMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutLaunchProfileMembersResponse.prototype, "validationException", void 0);
    return PutLaunchProfileMembersResponse;
}(SpeakeasyBase));
export { PutLaunchProfileMembersResponse };
