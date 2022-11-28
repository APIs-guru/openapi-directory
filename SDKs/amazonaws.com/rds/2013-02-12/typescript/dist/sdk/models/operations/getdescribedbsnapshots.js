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
export var GetDescribeDbSnapshotsActionEnum;
(function (GetDescribeDbSnapshotsActionEnum) {
    GetDescribeDbSnapshotsActionEnum["DescribeDbSnapshots"] = "DescribeDBSnapshots";
})(GetDescribeDbSnapshotsActionEnum || (GetDescribeDbSnapshotsActionEnum = {}));
export var GetDescribeDbSnapshotsVersionEnum;
(function (GetDescribeDbSnapshotsVersionEnum) {
    GetDescribeDbSnapshotsVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeDbSnapshotsVersionEnum || (GetDescribeDbSnapshotsVersionEnum = {}));
var GetDescribeDbSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotsQueryParams, _super);
    function GetDescribeDbSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotType" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "snapshotType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsQueryParams.prototype, "version", void 0);
    return GetDescribeDbSnapshotsQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotsQueryParams };
var GetDescribeDbSnapshotsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotsHeaders, _super);
    function GetDescribeDbSnapshotsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbSnapshotsHeaders;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotsHeaders };
var GetDescribeDbSnapshotsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotsRequest, _super);
    function GetDescribeDbSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSnapshotsQueryParams)
    ], GetDescribeDbSnapshotsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSnapshotsHeaders)
    ], GetDescribeDbSnapshotsRequest.prototype, "headers", void 0);
    return GetDescribeDbSnapshotsRequest;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotsRequest };
var GetDescribeDbSnapshotsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotsResponse, _super);
    function GetDescribeDbSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbSnapshotsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbSnapshotsResponse.prototype, "statusCode", void 0);
    return GetDescribeDbSnapshotsResponse;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotsResponse };
