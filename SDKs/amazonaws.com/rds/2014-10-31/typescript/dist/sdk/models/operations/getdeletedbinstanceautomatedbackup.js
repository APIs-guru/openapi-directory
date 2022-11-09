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
export var GetDeleteDbInstanceAutomatedBackupActionEnum;
(function (GetDeleteDbInstanceAutomatedBackupActionEnum) {
    GetDeleteDbInstanceAutomatedBackupActionEnum["DeleteDbInstanceAutomatedBackup"] = "DeleteDBInstanceAutomatedBackup";
})(GetDeleteDbInstanceAutomatedBackupActionEnum || (GetDeleteDbInstanceAutomatedBackupActionEnum = {}));
export var GetDeleteDbInstanceAutomatedBackupVersionEnum;
(function (GetDeleteDbInstanceAutomatedBackupVersionEnum) {
    GetDeleteDbInstanceAutomatedBackupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteDbInstanceAutomatedBackupVersionEnum || (GetDeleteDbInstanceAutomatedBackupVersionEnum = {}));
var GetDeleteDbInstanceAutomatedBackupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceAutomatedBackupQueryParams, _super);
    function GetDeleteDbInstanceAutomatedBackupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceAutomatedBackupsArn" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupQueryParams.prototype, "dbInstanceAutomatedBackupsArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DbiResourceId" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupQueryParams.prototype, "dbiResourceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupQueryParams.prototype, "version", void 0);
    return GetDeleteDbInstanceAutomatedBackupQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbInstanceAutomatedBackupQueryParams };
var GetDeleteDbInstanceAutomatedBackupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceAutomatedBackupHeaders, _super);
    function GetDeleteDbInstanceAutomatedBackupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbInstanceAutomatedBackupHeaders;
}(SpeakeasyBase));
export { GetDeleteDbInstanceAutomatedBackupHeaders };
var GetDeleteDbInstanceAutomatedBackupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceAutomatedBackupRequest, _super);
    function GetDeleteDbInstanceAutomatedBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbInstanceAutomatedBackupQueryParams)
    ], GetDeleteDbInstanceAutomatedBackupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbInstanceAutomatedBackupHeaders)
    ], GetDeleteDbInstanceAutomatedBackupRequest.prototype, "headers", void 0);
    return GetDeleteDbInstanceAutomatedBackupRequest;
}(SpeakeasyBase));
export { GetDeleteDbInstanceAutomatedBackupRequest };
var GetDeleteDbInstanceAutomatedBackupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceAutomatedBackupResponse, _super);
    function GetDeleteDbInstanceAutomatedBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbInstanceAutomatedBackupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceAutomatedBackupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbInstanceAutomatedBackupResponse.prototype, "statusCode", void 0);
    return GetDeleteDbInstanceAutomatedBackupResponse;
}(SpeakeasyBase));
export { GetDeleteDbInstanceAutomatedBackupResponse };
