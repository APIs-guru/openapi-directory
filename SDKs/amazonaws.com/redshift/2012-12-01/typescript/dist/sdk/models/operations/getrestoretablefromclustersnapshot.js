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
export var GetRestoreTableFromClusterSnapshotActionEnum;
(function (GetRestoreTableFromClusterSnapshotActionEnum) {
    GetRestoreTableFromClusterSnapshotActionEnum["RestoreTableFromClusterSnapshot"] = "RestoreTableFromClusterSnapshot";
})(GetRestoreTableFromClusterSnapshotActionEnum || (GetRestoreTableFromClusterSnapshotActionEnum = {}));
export var GetRestoreTableFromClusterSnapshotVersionEnum;
(function (GetRestoreTableFromClusterSnapshotVersionEnum) {
    GetRestoreTableFromClusterSnapshotVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetRestoreTableFromClusterSnapshotVersionEnum || (GetRestoreTableFromClusterSnapshotVersionEnum = {}));
var GetRestoreTableFromClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetRestoreTableFromClusterSnapshotQueryParams, _super);
    function GetRestoreTableFromClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableCaseSensitiveIdentifier" }),
        __metadata("design:type", Boolean)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "enableCaseSensitiveIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewTableName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "newTableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "snapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDatabaseName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "sourceDatabaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceSchemaName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "sourceSchemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceTableName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "sourceTableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDatabaseName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "targetDatabaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetSchemaName" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "targetSchemaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotQueryParams.prototype, "version", void 0);
    return GetRestoreTableFromClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { GetRestoreTableFromClusterSnapshotQueryParams };
var GetRestoreTableFromClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetRestoreTableFromClusterSnapshotHeaders, _super);
    function GetRestoreTableFromClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRestoreTableFromClusterSnapshotHeaders;
}(SpeakeasyBase));
export { GetRestoreTableFromClusterSnapshotHeaders };
var GetRestoreTableFromClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetRestoreTableFromClusterSnapshotRequest, _super);
    function GetRestoreTableFromClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreTableFromClusterSnapshotQueryParams)
    ], GetRestoreTableFromClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRestoreTableFromClusterSnapshotHeaders)
    ], GetRestoreTableFromClusterSnapshotRequest.prototype, "headers", void 0);
    return GetRestoreTableFromClusterSnapshotRequest;
}(SpeakeasyBase));
export { GetRestoreTableFromClusterSnapshotRequest };
var GetRestoreTableFromClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetRestoreTableFromClusterSnapshotResponse, _super);
    function GetRestoreTableFromClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRestoreTableFromClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRestoreTableFromClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRestoreTableFromClusterSnapshotResponse.prototype, "statusCode", void 0);
    return GetRestoreTableFromClusterSnapshotResponse;
}(SpeakeasyBase));
export { GetRestoreTableFromClusterSnapshotResponse };
