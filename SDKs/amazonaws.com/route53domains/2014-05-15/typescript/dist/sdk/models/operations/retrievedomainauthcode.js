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
export var RetrieveDomainAuthCodeXAmzTargetEnum;
(function (RetrieveDomainAuthCodeXAmzTargetEnum) {
    RetrieveDomainAuthCodeXAmzTargetEnum["Route53DomainsV20140515RetrieveDomainAuthCode"] = "Route53Domains_v20140515.RetrieveDomainAuthCode";
})(RetrieveDomainAuthCodeXAmzTargetEnum || (RetrieveDomainAuthCodeXAmzTargetEnum = {}));
var RetrieveDomainAuthCodeHeaders = /** @class */ (function (_super) {
    __extends(RetrieveDomainAuthCodeHeaders, _super);
    function RetrieveDomainAuthCodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeHeaders.prototype, "xAmzTarget", void 0);
    return RetrieveDomainAuthCodeHeaders;
}(SpeakeasyBase));
export { RetrieveDomainAuthCodeHeaders };
var RetrieveDomainAuthCodeRequest = /** @class */ (function (_super) {
    __extends(RetrieveDomainAuthCodeRequest, _super);
    function RetrieveDomainAuthCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveDomainAuthCodeHeaders)
    ], RetrieveDomainAuthCodeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RetrieveDomainAuthCodeRequest)
    ], RetrieveDomainAuthCodeRequest.prototype, "request", void 0);
    return RetrieveDomainAuthCodeRequest;
}(SpeakeasyBase));
export { RetrieveDomainAuthCodeRequest };
var RetrieveDomainAuthCodeResponse = /** @class */ (function (_super) {
    __extends(RetrieveDomainAuthCodeResponse, _super);
    function RetrieveDomainAuthCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveDomainAuthCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveDomainAuthCodeResponse.prototype, "invalidInput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetrieveDomainAuthCodeResponse)
    ], RetrieveDomainAuthCodeResponse.prototype, "retrieveDomainAuthCodeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveDomainAuthCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveDomainAuthCodeResponse.prototype, "unsupportedTld", void 0);
    return RetrieveDomainAuthCodeResponse;
}(SpeakeasyBase));
export { RetrieveDomainAuthCodeResponse };
