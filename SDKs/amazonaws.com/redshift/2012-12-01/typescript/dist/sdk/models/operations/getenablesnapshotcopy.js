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
export var GetEnableSnapshotCopyActionEnum;
(function (GetEnableSnapshotCopyActionEnum) {
    GetEnableSnapshotCopyActionEnum["EnableSnapshotCopy"] = "EnableSnapshotCopy";
})(GetEnableSnapshotCopyActionEnum || (GetEnableSnapshotCopyActionEnum = {}));
export var GetEnableSnapshotCopyVersionEnum;
(function (GetEnableSnapshotCopyVersionEnum) {
    GetEnableSnapshotCopyVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetEnableSnapshotCopyVersionEnum || (GetEnableSnapshotCopyVersionEnum = {}));
var GetEnableSnapshotCopyQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableSnapshotCopyQueryParams, _super);
    function GetEnableSnapshotCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DestinationRegion" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyQueryParams.prototype, "destinationRegion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetEnableSnapshotCopyQueryParams.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetEnableSnapshotCopyQueryParams.prototype, "retentionPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotCopyGrantName" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyQueryParams.prototype, "snapshotCopyGrantName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyQueryParams.prototype, "version", void 0);
    return GetEnableSnapshotCopyQueryParams;
}(SpeakeasyBase));
export { GetEnableSnapshotCopyQueryParams };
var GetEnableSnapshotCopyHeaders = /** @class */ (function (_super) {
    __extends(GetEnableSnapshotCopyHeaders, _super);
    function GetEnableSnapshotCopyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableSnapshotCopyHeaders;
}(SpeakeasyBase));
export { GetEnableSnapshotCopyHeaders };
var GetEnableSnapshotCopyRequest = /** @class */ (function (_super) {
    __extends(GetEnableSnapshotCopyRequest, _super);
    function GetEnableSnapshotCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableSnapshotCopyQueryParams)
    ], GetEnableSnapshotCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableSnapshotCopyHeaders)
    ], GetEnableSnapshotCopyRequest.prototype, "headers", void 0);
    return GetEnableSnapshotCopyRequest;
}(SpeakeasyBase));
export { GetEnableSnapshotCopyRequest };
var GetEnableSnapshotCopyResponse = /** @class */ (function (_super) {
    __extends(GetEnableSnapshotCopyResponse, _super);
    function GetEnableSnapshotCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetEnableSnapshotCopyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEnableSnapshotCopyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEnableSnapshotCopyResponse.prototype, "statusCode", void 0);
    return GetEnableSnapshotCopyResponse;
}(SpeakeasyBase));
export { GetEnableSnapshotCopyResponse };
