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
var GetRemovePermissionPathParams = /** @class */ (function (_super) {
    __extends(GetRemovePermissionPathParams, _super);
    function GetRemovePermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetRemovePermissionPathParams.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetRemovePermissionPathParams.prototype, "queueName", void 0);
    return GetRemovePermissionPathParams;
}(SpeakeasyBase));
export { GetRemovePermissionPathParams };
export var GetRemovePermissionActionEnum;
(function (GetRemovePermissionActionEnum) {
    GetRemovePermissionActionEnum["RemovePermission"] = "RemovePermission";
})(GetRemovePermissionActionEnum || (GetRemovePermissionActionEnum = {}));
export var GetRemovePermissionVersionEnum;
(function (GetRemovePermissionVersionEnum) {
    GetRemovePermissionVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetRemovePermissionVersionEnum || (GetRemovePermissionVersionEnum = {}));
var GetRemovePermissionQueryParams = /** @class */ (function (_super) {
    __extends(GetRemovePermissionQueryParams, _super);
    function GetRemovePermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemovePermissionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Label" }),
        __metadata("design:type", String)
    ], GetRemovePermissionQueryParams.prototype, "label", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemovePermissionQueryParams.prototype, "version", void 0);
    return GetRemovePermissionQueryParams;
}(SpeakeasyBase));
export { GetRemovePermissionQueryParams };
var GetRemovePermissionHeaders = /** @class */ (function (_super) {
    __extends(GetRemovePermissionHeaders, _super);
    function GetRemovePermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemovePermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemovePermissionHeaders;
}(SpeakeasyBase));
export { GetRemovePermissionHeaders };
var GetRemovePermissionRequest = /** @class */ (function (_super) {
    __extends(GetRemovePermissionRequest, _super);
    function GetRemovePermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemovePermissionPathParams)
    ], GetRemovePermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemovePermissionQueryParams)
    ], GetRemovePermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemovePermissionHeaders)
    ], GetRemovePermissionRequest.prototype, "headers", void 0);
    return GetRemovePermissionRequest;
}(SpeakeasyBase));
export { GetRemovePermissionRequest };
var GetRemovePermissionResponse = /** @class */ (function (_super) {
    __extends(GetRemovePermissionResponse, _super);
    function GetRemovePermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemovePermissionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemovePermissionResponse.prototype, "statusCode", void 0);
    return GetRemovePermissionResponse;
}(SpeakeasyBase));
export { GetRemovePermissionResponse };
