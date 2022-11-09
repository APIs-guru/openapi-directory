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
export var GetSolutionMetricsXAmzTargetEnum;
(function (GetSolutionMetricsXAmzTargetEnum) {
    GetSolutionMetricsXAmzTargetEnum["AmazonPersonalizeGetSolutionMetrics"] = "AmazonPersonalize.GetSolutionMetrics";
})(GetSolutionMetricsXAmzTargetEnum || (GetSolutionMetricsXAmzTargetEnum = {}));
var GetSolutionMetricsHeaders = /** @class */ (function (_super) {
    __extends(GetSolutionMetricsHeaders, _super);
    function GetSolutionMetricsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetSolutionMetricsHeaders.prototype, "xAmzTarget", void 0);
    return GetSolutionMetricsHeaders;
}(SpeakeasyBase));
export { GetSolutionMetricsHeaders };
var GetSolutionMetricsRequest = /** @class */ (function (_super) {
    __extends(GetSolutionMetricsRequest, _super);
    function GetSolutionMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSolutionMetricsHeaders)
    ], GetSolutionMetricsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetSolutionMetricsRequest)
    ], GetSolutionMetricsRequest.prototype, "request", void 0);
    return GetSolutionMetricsRequest;
}(SpeakeasyBase));
export { GetSolutionMetricsRequest };
var GetSolutionMetricsResponse = /** @class */ (function (_super) {
    __extends(GetSolutionMetricsResponse, _super);
    function GetSolutionMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSolutionMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetSolutionMetricsResponse)
    ], GetSolutionMetricsResponse.prototype, "getSolutionMetricsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSolutionMetricsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSolutionMetricsResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSolutionMetricsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSolutionMetricsResponse.prototype, "statusCode", void 0);
    return GetSolutionMetricsResponse;
}(SpeakeasyBase));
export { GetSolutionMetricsResponse };
