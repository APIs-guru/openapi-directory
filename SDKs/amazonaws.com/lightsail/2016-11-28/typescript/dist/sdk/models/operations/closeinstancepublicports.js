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
export var CloseInstancePublicPortsXAmzTargetEnum;
(function (CloseInstancePublicPortsXAmzTargetEnum) {
    CloseInstancePublicPortsXAmzTargetEnum["Lightsail20161128CloseInstancePublicPorts"] = "Lightsail_20161128.CloseInstancePublicPorts";
})(CloseInstancePublicPortsXAmzTargetEnum || (CloseInstancePublicPortsXAmzTargetEnum = {}));
var CloseInstancePublicPortsHeaders = /** @class */ (function (_super) {
    __extends(CloseInstancePublicPortsHeaders, _super);
    function CloseInstancePublicPortsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsHeaders.prototype, "xAmzTarget", void 0);
    return CloseInstancePublicPortsHeaders;
}(SpeakeasyBase));
export { CloseInstancePublicPortsHeaders };
var CloseInstancePublicPortsRequest = /** @class */ (function (_super) {
    __extends(CloseInstancePublicPortsRequest, _super);
    function CloseInstancePublicPortsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseInstancePublicPortsHeaders)
    ], CloseInstancePublicPortsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CloseInstancePublicPortsRequest)
    ], CloseInstancePublicPortsRequest.prototype, "request", void 0);
    return CloseInstancePublicPortsRequest;
}(SpeakeasyBase));
export { CloseInstancePublicPortsRequest };
var CloseInstancePublicPortsResponse = /** @class */ (function (_super) {
    __extends(CloseInstancePublicPortsResponse, _super);
    function CloseInstancePublicPortsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "accountSetupInProgressException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CloseInstancePublicPortsResult)
    ], CloseInstancePublicPortsResponse.prototype, "closeInstancePublicPortsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloseInstancePublicPortsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "operationFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloseInstancePublicPortsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CloseInstancePublicPortsResponse.prototype, "unauthenticatedException", void 0);
    return CloseInstancePublicPortsResponse;
}(SpeakeasyBase));
export { CloseInstancePublicPortsResponse };
