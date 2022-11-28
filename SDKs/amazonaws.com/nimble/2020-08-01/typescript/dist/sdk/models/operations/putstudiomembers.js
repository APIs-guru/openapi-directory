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
var PutStudioMembersPathParams = /** @class */ (function (_super) {
    __extends(PutStudioMembersPathParams, _super);
    function PutStudioMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], PutStudioMembersPathParams.prototype, "studioId", void 0);
    return PutStudioMembersPathParams;
}(SpeakeasyBase));
export { PutStudioMembersPathParams };
var PutStudioMembersHeaders = /** @class */ (function (_super) {
    __extends(PutStudioMembersHeaders, _super);
    function PutStudioMembersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutStudioMembersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutStudioMembersHeaders;
}(SpeakeasyBase));
export { PutStudioMembersHeaders };
var PutStudioMembersRequestBody = /** @class */ (function (_super) {
    __extends(PutStudioMembersRequestBody, _super);
    function PutStudioMembersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityStoreId" }),
        __metadata("design:type", String)
    ], PutStudioMembersRequestBody.prototype, "identityStoreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: shared.NewStudioMember }),
        __metadata("design:type", Array)
    ], PutStudioMembersRequestBody.prototype, "members", void 0);
    return PutStudioMembersRequestBody;
}(SpeakeasyBase));
export { PutStudioMembersRequestBody };
var PutStudioMembersRequest = /** @class */ (function (_super) {
    __extends(PutStudioMembersRequest, _super);
    function PutStudioMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutStudioMembersPathParams)
    ], PutStudioMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutStudioMembersHeaders)
    ], PutStudioMembersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutStudioMembersRequestBody)
    ], PutStudioMembersRequest.prototype, "request", void 0);
    return PutStudioMembersRequest;
}(SpeakeasyBase));
export { PutStudioMembersRequest };
var PutStudioMembersResponse = /** @class */ (function (_super) {
    __extends(PutStudioMembersResponse, _super);
    function PutStudioMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutStudioMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PutStudioMembersResponse.prototype, "putStudioMembersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutStudioMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutStudioMembersResponse.prototype, "validationException", void 0);
    return PutStudioMembersResponse;
}(SpeakeasyBase));
export { PutStudioMembersResponse };
