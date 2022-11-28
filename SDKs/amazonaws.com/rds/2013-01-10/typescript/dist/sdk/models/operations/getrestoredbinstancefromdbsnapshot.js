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
export var GetRestoreDbInstanceFromDbSnapshotActionEnum;
(function (GetRestoreDbInstanceFromDbSnapshotActionEnum) {
    GetRestoreDbInstanceFromDbSnapshotActionEnum["RestoreDbInstanceFromDbSnapshot"] = "RestoreDBInstanceFromDBSnapshot";
})(GetRestoreDbInstanceFromDbSnapshotActionEnum || (GetRestoreDbInstanceFromDbSnapshotActionEnum = {}));
export var GetRestoreDbInstanceFromDbSnapshotVersionEnum;
(function (GetRestoreDbInstanceFromDbSnapshotVersionEnum) {
    GetRestoreDbInstanceFromDbSnapshotVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetRestoreDbInstanceFromDbSnapshotVersionEnum || (GetRestoreDbInstanceFromDbSnapshotVersionEnum = {}));
var GetRestoreDbInstanceFromDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceFromDbSnapshotQueryParams, _super);
    function GetRestoreDbInstanceFromDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "dbName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotQueryParams.prototype, "version", void 0);
    return GetRestoreDbInstanceFromDbSnapshotQueryParams;
}(SpeakeasyBase));
export { GetRestoreDbInstanceFromDbSnapshotQueryParams };
var GetRestoreDbInstanceFromDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceFromDbSnapshotHeaders, _super);
    function GetRestoreDbInstanceFromDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRestoreDbInstanceFromDbSnapshotHeaders;
}(SpeakeasyBase));
export { GetRestoreDbInstanceFromDbSnapshotHeaders };
var GetRestoreDbInstanceFromDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceFromDbSnapshotRequest, _super);
    function GetRestoreDbInstanceFromDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreDbInstanceFromDbSnapshotQueryParams)
    ], GetRestoreDbInstanceFromDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreDbInstanceFromDbSnapshotHeaders)
    ], GetRestoreDbInstanceFromDbSnapshotRequest.prototype, "headers", void 0);
    return GetRestoreDbInstanceFromDbSnapshotRequest;
}(SpeakeasyBase));
export { GetRestoreDbInstanceFromDbSnapshotRequest };
var GetRestoreDbInstanceFromDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceFromDbSnapshotResponse, _super);
    function GetRestoreDbInstanceFromDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRestoreDbInstanceFromDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceFromDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceFromDbSnapshotResponse.prototype, "statusCode", void 0);
    return GetRestoreDbInstanceFromDbSnapshotResponse;
}(SpeakeasyBase));
export { GetRestoreDbInstanceFromDbSnapshotResponse };
