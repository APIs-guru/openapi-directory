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
export var GetAuthorizeSnapshotAccessActionEnum;
(function (GetAuthorizeSnapshotAccessActionEnum) {
    GetAuthorizeSnapshotAccessActionEnum["AuthorizeSnapshotAccess"] = "AuthorizeSnapshotAccess";
})(GetAuthorizeSnapshotAccessActionEnum || (GetAuthorizeSnapshotAccessActionEnum = {}));
export var GetAuthorizeSnapshotAccessVersionEnum;
(function (GetAuthorizeSnapshotAccessVersionEnum) {
    GetAuthorizeSnapshotAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAuthorizeSnapshotAccessVersionEnum || (GetAuthorizeSnapshotAccessVersionEnum = {}));
var GetAuthorizeSnapshotAccessQueryParams = /** @class */ (function (_super) {
    __extends(GetAuthorizeSnapshotAccessQueryParams, _super);
    function GetAuthorizeSnapshotAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccountWithRestoreAccess" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessQueryParams.prototype, "accountWithRestoreAccess", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessQueryParams.prototype, "snapshotClusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessQueryParams.prototype, "snapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessQueryParams.prototype, "version", void 0);
    return GetAuthorizeSnapshotAccessQueryParams;
}(SpeakeasyBase));
export { GetAuthorizeSnapshotAccessQueryParams };
var GetAuthorizeSnapshotAccessHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizeSnapshotAccessHeaders, _super);
    function GetAuthorizeSnapshotAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizeSnapshotAccessHeaders;
}(SpeakeasyBase));
export { GetAuthorizeSnapshotAccessHeaders };
var GetAuthorizeSnapshotAccessRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizeSnapshotAccessRequest, _super);
    function GetAuthorizeSnapshotAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizeSnapshotAccessQueryParams)
    ], GetAuthorizeSnapshotAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAuthorizeSnapshotAccessHeaders)
    ], GetAuthorizeSnapshotAccessRequest.prototype, "headers", void 0);
    return GetAuthorizeSnapshotAccessRequest;
}(SpeakeasyBase));
export { GetAuthorizeSnapshotAccessRequest };
var GetAuthorizeSnapshotAccessResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizeSnapshotAccessResponse, _super);
    function GetAuthorizeSnapshotAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAuthorizeSnapshotAccessResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAuthorizeSnapshotAccessResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAuthorizeSnapshotAccessResponse.prototype, "statusCode", void 0);
    return GetAuthorizeSnapshotAccessResponse;
}(SpeakeasyBase));
export { GetAuthorizeSnapshotAccessResponse };
