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
var GetInstancesHealthStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesHealthStatusQueryParams, _super);
    function GetInstancesHealthStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusQueryParams.prototype, "nextToken", void 0);
    return GetInstancesHealthStatusQueryParams;
}(SpeakeasyBase));
export { GetInstancesHealthStatusQueryParams };
export var GetInstancesHealthStatusXAmzTargetEnum;
(function (GetInstancesHealthStatusXAmzTargetEnum) {
    GetInstancesHealthStatusXAmzTargetEnum["Route53AutoNamingV20170314GetInstancesHealthStatus"] = "Route53AutoNaming_v20170314.GetInstancesHealthStatus";
})(GetInstancesHealthStatusXAmzTargetEnum || (GetInstancesHealthStatusXAmzTargetEnum = {}));
var GetInstancesHealthStatusHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesHealthStatusHeaders, _super);
    function GetInstancesHealthStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusHeaders.prototype, "xAmzTarget", void 0);
    return GetInstancesHealthStatusHeaders;
}(SpeakeasyBase));
export { GetInstancesHealthStatusHeaders };
var GetInstancesHealthStatusRequest = /** @class */ (function (_super) {
    __extends(GetInstancesHealthStatusRequest, _super);
    function GetInstancesHealthStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesHealthStatusQueryParams)
    ], GetInstancesHealthStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesHealthStatusHeaders)
    ], GetInstancesHealthStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetInstancesHealthStatusRequest)
    ], GetInstancesHealthStatusRequest.prototype, "request", void 0);
    return GetInstancesHealthStatusRequest;
}(SpeakeasyBase));
export { GetInstancesHealthStatusRequest };
var GetInstancesHealthStatusResponse = /** @class */ (function (_super) {
    __extends(GetInstancesHealthStatusResponse, _super);
    function GetInstancesHealthStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesHealthStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetInstancesHealthStatusResponse)
    ], GetInstancesHealthStatusResponse.prototype, "getInstancesHealthStatusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInstancesHealthStatusResponse.prototype, "instanceNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInstancesHealthStatusResponse.prototype, "invalidInput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInstancesHealthStatusResponse.prototype, "serviceNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesHealthStatusResponse.prototype, "statusCode", void 0);
    return GetInstancesHealthStatusResponse;
}(SpeakeasyBase));
export { GetInstancesHealthStatusResponse };
