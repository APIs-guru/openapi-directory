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
export var GetCreateDbInstanceActionEnum;
(function (GetCreateDbInstanceActionEnum) {
    GetCreateDbInstanceActionEnum["CreateDbInstance"] = "CreateDBInstance";
})(GetCreateDbInstanceActionEnum || (GetCreateDbInstanceActionEnum = {}));
export var GetCreateDbInstanceVersionEnum;
(function (GetCreateDbInstanceVersionEnum) {
    GetCreateDbInstanceVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetCreateDbInstanceVersionEnum || (GetCreateDbInstanceVersionEnum = {}));
var GetCreateDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceQueryParams, _super);
    function GetCreateDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceQueryParams.prototype, "allocatedStorage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetCreateDbInstanceQueryParams.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=BackupRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceQueryParams.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CharacterSetName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "characterSetName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "dbName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "dbParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroups" }),
        __metadata("design:type", Array)
    ], GetCreateDbInstanceQueryParams.prototype, "dbSecurityGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceQueryParams.prototype, "iops", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "licenseModel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "masterUserPassword", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MasterUsername" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "masterUsername", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], GetCreateDbInstanceQueryParams.prototype, "multiAz", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceQueryParams.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PreferredBackupWindow" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "preferredBackupWindow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetCreateDbInstanceQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], GetCreateDbInstanceQueryParams.prototype, "vpcSecurityGroupIds", void 0);
    return GetCreateDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetCreateDbInstanceQueryParams };
var GetCreateDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceHeaders, _super);
    function GetCreateDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDbInstanceHeaders;
}(SpeakeasyBase));
export { GetCreateDbInstanceHeaders };
var GetCreateDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceRequest, _super);
    function GetCreateDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDbInstanceQueryParams)
    ], GetCreateDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDbInstanceHeaders)
    ], GetCreateDbInstanceRequest.prototype, "headers", void 0);
    return GetCreateDbInstanceRequest;
}(SpeakeasyBase));
export { GetCreateDbInstanceRequest };
var GetCreateDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceResponse, _super);
    function GetCreateDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceResponse.prototype, "statusCode", void 0);
    return GetCreateDbInstanceResponse;
}(SpeakeasyBase));
export { GetCreateDbInstanceResponse };
