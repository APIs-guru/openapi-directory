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
export var GetRestoreDbInstanceToPointInTimeActionEnum;
(function (GetRestoreDbInstanceToPointInTimeActionEnum) {
    GetRestoreDbInstanceToPointInTimeActionEnum["RestoreDbInstanceToPointInTime"] = "RestoreDBInstanceToPointInTime";
})(GetRestoreDbInstanceToPointInTimeActionEnum || (GetRestoreDbInstanceToPointInTimeActionEnum = {}));
export var GetRestoreDbInstanceToPointInTimeVersionEnum;
(function (GetRestoreDbInstanceToPointInTimeVersionEnum) {
    GetRestoreDbInstanceToPointInTimeVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetRestoreDbInstanceToPointInTimeVersionEnum || (GetRestoreDbInstanceToPointInTimeVersionEnum = {}));
var GetRestoreDbInstanceToPointInTimeQueryParams = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceToPointInTimeQueryParams, _super);
    function GetRestoreDbInstanceToPointInTimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "dbName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RestoreTime" }),
        __metadata("design:type", Date)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "restoreTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "sourceDbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "targetDbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UseLatestRestorableTime" }),
        __metadata("design:type", Boolean)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "useLatestRestorableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeQueryParams.prototype, "version", void 0);
    return GetRestoreDbInstanceToPointInTimeQueryParams;
}(SpeakeasyBase));
export { GetRestoreDbInstanceToPointInTimeQueryParams };
var GetRestoreDbInstanceToPointInTimeHeaders = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceToPointInTimeHeaders, _super);
    function GetRestoreDbInstanceToPointInTimeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRestoreDbInstanceToPointInTimeHeaders;
}(SpeakeasyBase));
export { GetRestoreDbInstanceToPointInTimeHeaders };
var GetRestoreDbInstanceToPointInTimeRequest = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceToPointInTimeRequest, _super);
    function GetRestoreDbInstanceToPointInTimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreDbInstanceToPointInTimeQueryParams)
    ], GetRestoreDbInstanceToPointInTimeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreDbInstanceToPointInTimeHeaders)
    ], GetRestoreDbInstanceToPointInTimeRequest.prototype, "headers", void 0);
    return GetRestoreDbInstanceToPointInTimeRequest;
}(SpeakeasyBase));
export { GetRestoreDbInstanceToPointInTimeRequest };
var GetRestoreDbInstanceToPointInTimeResponse = /** @class */ (function (_super) {
    __extends(GetRestoreDbInstanceToPointInTimeResponse, _super);
    function GetRestoreDbInstanceToPointInTimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRestoreDbInstanceToPointInTimeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRestoreDbInstanceToPointInTimeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRestoreDbInstanceToPointInTimeResponse.prototype, "statusCode", void 0);
    return GetRestoreDbInstanceToPointInTimeResponse;
}(SpeakeasyBase));
export { GetRestoreDbInstanceToPointInTimeResponse };
