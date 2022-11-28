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
var GetEffectivePermissionsForPathQueryParams = /** @class */ (function (_super) {
    __extends(GetEffectivePermissionsForPathQueryParams, _super);
    function GetEffectivePermissionsForPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathQueryParams.prototype, "nextToken", void 0);
    return GetEffectivePermissionsForPathQueryParams;
}(SpeakeasyBase));
export { GetEffectivePermissionsForPathQueryParams };
export var GetEffectivePermissionsForPathXAmzTargetEnum;
(function (GetEffectivePermissionsForPathXAmzTargetEnum) {
    GetEffectivePermissionsForPathXAmzTargetEnum["AwsLakeFormationGetEffectivePermissionsForPath"] = "AWSLakeFormation.GetEffectivePermissionsForPath";
})(GetEffectivePermissionsForPathXAmzTargetEnum || (GetEffectivePermissionsForPathXAmzTargetEnum = {}));
var GetEffectivePermissionsForPathHeaders = /** @class */ (function (_super) {
    __extends(GetEffectivePermissionsForPathHeaders, _super);
    function GetEffectivePermissionsForPathHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathHeaders.prototype, "xAmzTarget", void 0);
    return GetEffectivePermissionsForPathHeaders;
}(SpeakeasyBase));
export { GetEffectivePermissionsForPathHeaders };
var GetEffectivePermissionsForPathRequest = /** @class */ (function (_super) {
    __extends(GetEffectivePermissionsForPathRequest, _super);
    function GetEffectivePermissionsForPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEffectivePermissionsForPathQueryParams)
    ], GetEffectivePermissionsForPathRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEffectivePermissionsForPathHeaders)
    ], GetEffectivePermissionsForPathRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetEffectivePermissionsForPathRequest)
    ], GetEffectivePermissionsForPathRequest.prototype, "request", void 0);
    return GetEffectivePermissionsForPathRequest;
}(SpeakeasyBase));
export { GetEffectivePermissionsForPathRequest };
var GetEffectivePermissionsForPathResponse = /** @class */ (function (_super) {
    __extends(GetEffectivePermissionsForPathResponse, _super);
    function GetEffectivePermissionsForPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEffectivePermissionsForPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEffectivePermissionsForPathResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEffectivePermissionsForPathResponse)
    ], GetEffectivePermissionsForPathResponse.prototype, "getEffectivePermissionsForPathResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEffectivePermissionsForPathResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEffectivePermissionsForPathResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEffectivePermissionsForPathResponse.prototype, "operationTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEffectivePermissionsForPathResponse.prototype, "statusCode", void 0);
    return GetEffectivePermissionsForPathResponse;
}(SpeakeasyBase));
export { GetEffectivePermissionsForPathResponse };
