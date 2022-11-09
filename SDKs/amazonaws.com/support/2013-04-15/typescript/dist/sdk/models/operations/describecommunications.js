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
var DescribeCommunicationsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeCommunicationsQueryParams, _super);
    function DescribeCommunicationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsQueryParams.prototype, "nextToken", void 0);
    return DescribeCommunicationsQueryParams;
}(SpeakeasyBase));
export { DescribeCommunicationsQueryParams };
export var DescribeCommunicationsXAmzTargetEnum;
(function (DescribeCommunicationsXAmzTargetEnum) {
    DescribeCommunicationsXAmzTargetEnum["AwsSupport20130415DescribeCommunications"] = "AWSSupport_20130415.DescribeCommunications";
})(DescribeCommunicationsXAmzTargetEnum || (DescribeCommunicationsXAmzTargetEnum = {}));
var DescribeCommunicationsHeaders = /** @class */ (function (_super) {
    __extends(DescribeCommunicationsHeaders, _super);
    function DescribeCommunicationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeCommunicationsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeCommunicationsHeaders;
}(SpeakeasyBase));
export { DescribeCommunicationsHeaders };
var DescribeCommunicationsRequest = /** @class */ (function (_super) {
    __extends(DescribeCommunicationsRequest, _super);
    function DescribeCommunicationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeCommunicationsQueryParams)
    ], DescribeCommunicationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeCommunicationsHeaders)
    ], DescribeCommunicationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeCommunicationsRequest)
    ], DescribeCommunicationsRequest.prototype, "request", void 0);
    return DescribeCommunicationsRequest;
}(SpeakeasyBase));
export { DescribeCommunicationsRequest };
var DescribeCommunicationsResponse = /** @class */ (function (_super) {
    __extends(DescribeCommunicationsResponse, _super);
    function DescribeCommunicationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeCommunicationsResponse.prototype, "caseIdNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeCommunicationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeCommunicationsResponse)
    ], DescribeCommunicationsResponse.prototype, "describeCommunicationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeCommunicationsResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeCommunicationsResponse.prototype, "statusCode", void 0);
    return DescribeCommunicationsResponse;
}(SpeakeasyBase));
export { DescribeCommunicationsResponse };
