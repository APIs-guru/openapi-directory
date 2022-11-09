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
export var GetModifySnapshotCopyRetentionPeriodActionEnum;
(function (GetModifySnapshotCopyRetentionPeriodActionEnum) {
    GetModifySnapshotCopyRetentionPeriodActionEnum["ModifySnapshotCopyRetentionPeriod"] = "ModifySnapshotCopyRetentionPeriod";
})(GetModifySnapshotCopyRetentionPeriodActionEnum || (GetModifySnapshotCopyRetentionPeriodActionEnum = {}));
export var GetModifySnapshotCopyRetentionPeriodVersionEnum;
(function (GetModifySnapshotCopyRetentionPeriodVersionEnum) {
    GetModifySnapshotCopyRetentionPeriodVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifySnapshotCopyRetentionPeriodVersionEnum || (GetModifySnapshotCopyRetentionPeriodVersionEnum = {}));
var GetModifySnapshotCopyRetentionPeriodQueryParams = /** @class */ (function (_super) {
    __extends(GetModifySnapshotCopyRetentionPeriodQueryParams, _super);
    function GetModifySnapshotCopyRetentionPeriodQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Manual" }),
        __metadata("design:type", Boolean)
    ], GetModifySnapshotCopyRetentionPeriodQueryParams.prototype, "manual", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifySnapshotCopyRetentionPeriodQueryParams.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodQueryParams.prototype, "version", void 0);
    return GetModifySnapshotCopyRetentionPeriodQueryParams;
}(SpeakeasyBase));
export { GetModifySnapshotCopyRetentionPeriodQueryParams };
var GetModifySnapshotCopyRetentionPeriodHeaders = /** @class */ (function (_super) {
    __extends(GetModifySnapshotCopyRetentionPeriodHeaders, _super);
    function GetModifySnapshotCopyRetentionPeriodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifySnapshotCopyRetentionPeriodHeaders;
}(SpeakeasyBase));
export { GetModifySnapshotCopyRetentionPeriodHeaders };
var GetModifySnapshotCopyRetentionPeriodRequest = /** @class */ (function (_super) {
    __extends(GetModifySnapshotCopyRetentionPeriodRequest, _super);
    function GetModifySnapshotCopyRetentionPeriodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifySnapshotCopyRetentionPeriodQueryParams)
    ], GetModifySnapshotCopyRetentionPeriodRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifySnapshotCopyRetentionPeriodHeaders)
    ], GetModifySnapshotCopyRetentionPeriodRequest.prototype, "headers", void 0);
    return GetModifySnapshotCopyRetentionPeriodRequest;
}(SpeakeasyBase));
export { GetModifySnapshotCopyRetentionPeriodRequest };
var GetModifySnapshotCopyRetentionPeriodResponse = /** @class */ (function (_super) {
    __extends(GetModifySnapshotCopyRetentionPeriodResponse, _super);
    function GetModifySnapshotCopyRetentionPeriodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifySnapshotCopyRetentionPeriodResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifySnapshotCopyRetentionPeriodResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifySnapshotCopyRetentionPeriodResponse.prototype, "statusCode", void 0);
    return GetModifySnapshotCopyRetentionPeriodResponse;
}(SpeakeasyBase));
export { GetModifySnapshotCopyRetentionPeriodResponse };
