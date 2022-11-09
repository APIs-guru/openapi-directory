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
export var GetStartDbInstanceAutomatedBackupsReplicationActionEnum;
(function (GetStartDbInstanceAutomatedBackupsReplicationActionEnum) {
    GetStartDbInstanceAutomatedBackupsReplicationActionEnum["StartDbInstanceAutomatedBackupsReplication"] = "StartDBInstanceAutomatedBackupsReplication";
})(GetStartDbInstanceAutomatedBackupsReplicationActionEnum || (GetStartDbInstanceAutomatedBackupsReplicationActionEnum = {}));
export var GetStartDbInstanceAutomatedBackupsReplicationVersionEnum;
(function (GetStartDbInstanceAutomatedBackupsReplicationVersionEnum) {
    GetStartDbInstanceAutomatedBackupsReplicationVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStartDbInstanceAutomatedBackupsReplicationVersionEnum || (GetStartDbInstanceAutomatedBackupsReplicationVersionEnum = {}));
var GetStartDbInstanceAutomatedBackupsReplicationQueryParams = /** @class */ (function (_super) {
    __extends(GetStartDbInstanceAutomatedBackupsReplicationQueryParams, _super);
    function GetStartDbInstanceAutomatedBackupsReplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PreSignedUrl" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "preSignedUrl", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "sourceDbInstanceArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "version", void 0);
    return GetStartDbInstanceAutomatedBackupsReplicationQueryParams;
}(SpeakeasyBase));
export { GetStartDbInstanceAutomatedBackupsReplicationQueryParams };
var GetStartDbInstanceAutomatedBackupsReplicationHeaders = /** @class */ (function (_super) {
    __extends(GetStartDbInstanceAutomatedBackupsReplicationHeaders, _super);
    function GetStartDbInstanceAutomatedBackupsReplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStartDbInstanceAutomatedBackupsReplicationHeaders;
}(SpeakeasyBase));
export { GetStartDbInstanceAutomatedBackupsReplicationHeaders };
var GetStartDbInstanceAutomatedBackupsReplicationRequest = /** @class */ (function (_super) {
    __extends(GetStartDbInstanceAutomatedBackupsReplicationRequest, _super);
    function GetStartDbInstanceAutomatedBackupsReplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStartDbInstanceAutomatedBackupsReplicationQueryParams)
    ], GetStartDbInstanceAutomatedBackupsReplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStartDbInstanceAutomatedBackupsReplicationHeaders)
    ], GetStartDbInstanceAutomatedBackupsReplicationRequest.prototype, "headers", void 0);
    return GetStartDbInstanceAutomatedBackupsReplicationRequest;
}(SpeakeasyBase));
export { GetStartDbInstanceAutomatedBackupsReplicationRequest };
var GetStartDbInstanceAutomatedBackupsReplicationResponse = /** @class */ (function (_super) {
    __extends(GetStartDbInstanceAutomatedBackupsReplicationResponse, _super);
    function GetStartDbInstanceAutomatedBackupsReplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStartDbInstanceAutomatedBackupsReplicationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStartDbInstanceAutomatedBackupsReplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStartDbInstanceAutomatedBackupsReplicationResponse.prototype, "statusCode", void 0);
    return GetStartDbInstanceAutomatedBackupsReplicationResponse;
}(SpeakeasyBase));
export { GetStartDbInstanceAutomatedBackupsReplicationResponse };
