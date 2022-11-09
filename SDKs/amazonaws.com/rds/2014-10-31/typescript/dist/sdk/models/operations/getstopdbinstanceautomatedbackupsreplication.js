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
export var GetStopDbInstanceAutomatedBackupsReplicationActionEnum;
(function (GetStopDbInstanceAutomatedBackupsReplicationActionEnum) {
    GetStopDbInstanceAutomatedBackupsReplicationActionEnum["StopDbInstanceAutomatedBackupsReplication"] = "StopDBInstanceAutomatedBackupsReplication";
})(GetStopDbInstanceAutomatedBackupsReplicationActionEnum || (GetStopDbInstanceAutomatedBackupsReplicationActionEnum = {}));
export var GetStopDbInstanceAutomatedBackupsReplicationVersionEnum;
(function (GetStopDbInstanceAutomatedBackupsReplicationVersionEnum) {
    GetStopDbInstanceAutomatedBackupsReplicationVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStopDbInstanceAutomatedBackupsReplicationVersionEnum || (GetStopDbInstanceAutomatedBackupsReplicationVersionEnum = {}));
var GetStopDbInstanceAutomatedBackupsReplicationQueryParams = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceAutomatedBackupsReplicationQueryParams, _super);
    function GetStopDbInstanceAutomatedBackupsReplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceArn" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "sourceDbInstanceArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationQueryParams.prototype, "version", void 0);
    return GetStopDbInstanceAutomatedBackupsReplicationQueryParams;
}(SpeakeasyBase));
export { GetStopDbInstanceAutomatedBackupsReplicationQueryParams };
var GetStopDbInstanceAutomatedBackupsReplicationHeaders = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceAutomatedBackupsReplicationHeaders, _super);
    function GetStopDbInstanceAutomatedBackupsReplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStopDbInstanceAutomatedBackupsReplicationHeaders;
}(SpeakeasyBase));
export { GetStopDbInstanceAutomatedBackupsReplicationHeaders };
var GetStopDbInstanceAutomatedBackupsReplicationRequest = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceAutomatedBackupsReplicationRequest, _super);
    function GetStopDbInstanceAutomatedBackupsReplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStopDbInstanceAutomatedBackupsReplicationQueryParams)
    ], GetStopDbInstanceAutomatedBackupsReplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStopDbInstanceAutomatedBackupsReplicationHeaders)
    ], GetStopDbInstanceAutomatedBackupsReplicationRequest.prototype, "headers", void 0);
    return GetStopDbInstanceAutomatedBackupsReplicationRequest;
}(SpeakeasyBase));
export { GetStopDbInstanceAutomatedBackupsReplicationRequest };
var GetStopDbInstanceAutomatedBackupsReplicationResponse = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceAutomatedBackupsReplicationResponse, _super);
    function GetStopDbInstanceAutomatedBackupsReplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStopDbInstanceAutomatedBackupsReplicationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStopDbInstanceAutomatedBackupsReplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStopDbInstanceAutomatedBackupsReplicationResponse.prototype, "statusCode", void 0);
    return GetStopDbInstanceAutomatedBackupsReplicationResponse;
}(SpeakeasyBase));
export { GetStopDbInstanceAutomatedBackupsReplicationResponse };
