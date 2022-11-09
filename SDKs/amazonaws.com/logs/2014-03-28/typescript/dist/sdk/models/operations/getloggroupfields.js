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
export var GetLogGroupFieldsXAmzTargetEnum;
(function (GetLogGroupFieldsXAmzTargetEnum) {
    GetLogGroupFieldsXAmzTargetEnum["Logs20140328GetLogGroupFields"] = "Logs_20140328.GetLogGroupFields";
})(GetLogGroupFieldsXAmzTargetEnum || (GetLogGroupFieldsXAmzTargetEnum = {}));
var GetLogGroupFieldsHeaders = /** @class */ (function (_super) {
    __extends(GetLogGroupFieldsHeaders, _super);
    function GetLogGroupFieldsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetLogGroupFieldsHeaders.prototype, "xAmzTarget", void 0);
    return GetLogGroupFieldsHeaders;
}(SpeakeasyBase));
export { GetLogGroupFieldsHeaders };
var GetLogGroupFieldsRequest = /** @class */ (function (_super) {
    __extends(GetLogGroupFieldsRequest, _super);
    function GetLogGroupFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLogGroupFieldsHeaders)
    ], GetLogGroupFieldsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetLogGroupFieldsRequest)
    ], GetLogGroupFieldsRequest.prototype, "request", void 0);
    return GetLogGroupFieldsRequest;
}(SpeakeasyBase));
export { GetLogGroupFieldsRequest };
var GetLogGroupFieldsResponse = /** @class */ (function (_super) {
    __extends(GetLogGroupFieldsResponse, _super);
    function GetLogGroupFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLogGroupFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetLogGroupFieldsResponse)
    ], GetLogGroupFieldsResponse.prototype, "getLogGroupFieldsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLogGroupFieldsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLogGroupFieldsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLogGroupFieldsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLogGroupFieldsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLogGroupFieldsResponse.prototype, "statusCode", void 0);
    return GetLogGroupFieldsResponse;
}(SpeakeasyBase));
export { GetLogGroupFieldsResponse };
