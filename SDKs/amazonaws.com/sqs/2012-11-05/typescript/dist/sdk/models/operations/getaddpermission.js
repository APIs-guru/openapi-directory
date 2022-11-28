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
var GetAddPermissionPathParams = /** @class */ (function (_super) {
    __extends(GetAddPermissionPathParams, _super);
    function GetAddPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" }),
        __metadata("design:type", Number)
    ], GetAddPermissionPathParams.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" }),
        __metadata("design:type", String)
    ], GetAddPermissionPathParams.prototype, "queueName", void 0);
    return GetAddPermissionPathParams;
}(SpeakeasyBase));
export { GetAddPermissionPathParams };
export var GetAddPermissionActionEnum;
(function (GetAddPermissionActionEnum) {
    GetAddPermissionActionEnum["AddPermission"] = "AddPermission";
})(GetAddPermissionActionEnum || (GetAddPermissionActionEnum = {}));
export var GetAddPermissionVersionEnum;
(function (GetAddPermissionVersionEnum) {
    GetAddPermissionVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(GetAddPermissionVersionEnum || (GetAddPermissionVersionEnum = {}));
var GetAddPermissionQueryParams = /** @class */ (function (_super) {
    __extends(GetAddPermissionQueryParams, _super);
    function GetAddPermissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccountIds" }),
        __metadata("design:type", Array)
    ], GetAddPermissionQueryParams.prototype, "awsAccountIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddPermissionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Actions" }),
        __metadata("design:type", Array)
    ], GetAddPermissionQueryParams.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" }),
        __metadata("design:type", String)
    ], GetAddPermissionQueryParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddPermissionQueryParams.prototype, "version", void 0);
    return GetAddPermissionQueryParams;
}(SpeakeasyBase));
export { GetAddPermissionQueryParams };
var GetAddPermissionHeaders = /** @class */ (function (_super) {
    __extends(GetAddPermissionHeaders, _super);
    function GetAddPermissionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddPermissionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddPermissionHeaders;
}(SpeakeasyBase));
export { GetAddPermissionHeaders };
var GetAddPermissionRequest = /** @class */ (function (_super) {
    __extends(GetAddPermissionRequest, _super);
    function GetAddPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddPermissionPathParams)
    ], GetAddPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddPermissionQueryParams)
    ], GetAddPermissionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAddPermissionHeaders)
    ], GetAddPermissionRequest.prototype, "headers", void 0);
    return GetAddPermissionRequest;
}(SpeakeasyBase));
export { GetAddPermissionRequest };
var GetAddPermissionResponse = /** @class */ (function (_super) {
    __extends(GetAddPermissionResponse, _super);
    function GetAddPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddPermissionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAddPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAddPermissionResponse.prototype, "statusCode", void 0);
    return GetAddPermissionResponse;
}(SpeakeasyBase));
export { GetAddPermissionResponse };
