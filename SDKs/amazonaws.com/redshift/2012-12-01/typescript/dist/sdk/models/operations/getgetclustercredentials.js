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
export var GetGetClusterCredentialsActionEnum;
(function (GetGetClusterCredentialsActionEnum) {
    GetGetClusterCredentialsActionEnum["GetClusterCredentials"] = "GetClusterCredentials";
})(GetGetClusterCredentialsActionEnum || (GetGetClusterCredentialsActionEnum = {}));
export var GetGetClusterCredentialsVersionEnum;
(function (GetGetClusterCredentialsVersionEnum) {
    GetGetClusterCredentialsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetGetClusterCredentialsVersionEnum || (GetGetClusterCredentialsVersionEnum = {}));
var GetGetClusterCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetClusterCredentialsQueryParams, _super);
    function GetGetClusterCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoCreate" }),
        __metadata("design:type", Boolean)
    ], GetGetClusterCredentialsQueryParams.prototype, "autoCreate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DbGroups" }),
        __metadata("design:type", Array)
    ], GetGetClusterCredentialsQueryParams.prototype, "dbGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DbName" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsQueryParams.prototype, "dbName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DbUser" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsQueryParams.prototype, "dbUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" }),
        __metadata("design:type", Number)
    ], GetGetClusterCredentialsQueryParams.prototype, "durationSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsQueryParams.prototype, "version", void 0);
    return GetGetClusterCredentialsQueryParams;
}(SpeakeasyBase));
export { GetGetClusterCredentialsQueryParams };
var GetGetClusterCredentialsHeaders = /** @class */ (function (_super) {
    __extends(GetGetClusterCredentialsHeaders, _super);
    function GetGetClusterCredentialsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetClusterCredentialsHeaders;
}(SpeakeasyBase));
export { GetGetClusterCredentialsHeaders };
var GetGetClusterCredentialsRequest = /** @class */ (function (_super) {
    __extends(GetGetClusterCredentialsRequest, _super);
    function GetGetClusterCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetClusterCredentialsQueryParams)
    ], GetGetClusterCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetClusterCredentialsHeaders)
    ], GetGetClusterCredentialsRequest.prototype, "headers", void 0);
    return GetGetClusterCredentialsRequest;
}(SpeakeasyBase));
export { GetGetClusterCredentialsRequest };
var GetGetClusterCredentialsResponse = /** @class */ (function (_super) {
    __extends(GetGetClusterCredentialsResponse, _super);
    function GetGetClusterCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetClusterCredentialsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetClusterCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetClusterCredentialsResponse.prototype, "statusCode", void 0);
    return GetGetClusterCredentialsResponse;
}(SpeakeasyBase));
export { GetGetClusterCredentialsResponse };
