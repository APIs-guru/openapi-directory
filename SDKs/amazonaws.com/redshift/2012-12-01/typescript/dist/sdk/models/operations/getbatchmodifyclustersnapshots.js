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
export var GetBatchModifyClusterSnapshotsActionEnum;
(function (GetBatchModifyClusterSnapshotsActionEnum) {
    GetBatchModifyClusterSnapshotsActionEnum["BatchModifyClusterSnapshots"] = "BatchModifyClusterSnapshots";
})(GetBatchModifyClusterSnapshotsActionEnum || (GetBatchModifyClusterSnapshotsActionEnum = {}));
export var GetBatchModifyClusterSnapshotsVersionEnum;
(function (GetBatchModifyClusterSnapshotsVersionEnum) {
    GetBatchModifyClusterSnapshotsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetBatchModifyClusterSnapshotsVersionEnum || (GetBatchModifyClusterSnapshotsVersionEnum = {}));
var GetBatchModifyClusterSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(GetBatchModifyClusterSnapshotsQueryParams, _super);
    function GetBatchModifyClusterSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetBatchModifyClusterSnapshotsQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetBatchModifyClusterSnapshotsQueryParams.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifierList" }),
        __metadata("design:type", Array)
    ], GetBatchModifyClusterSnapshotsQueryParams.prototype, "snapshotIdentifierList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsQueryParams.prototype, "version", void 0);
    return GetBatchModifyClusterSnapshotsQueryParams;
}(SpeakeasyBase));
export { GetBatchModifyClusterSnapshotsQueryParams };
var GetBatchModifyClusterSnapshotsHeaders = /** @class */ (function (_super) {
    __extends(GetBatchModifyClusterSnapshotsHeaders, _super);
    function GetBatchModifyClusterSnapshotsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBatchModifyClusterSnapshotsHeaders;
}(SpeakeasyBase));
export { GetBatchModifyClusterSnapshotsHeaders };
var GetBatchModifyClusterSnapshotsRequest = /** @class */ (function (_super) {
    __extends(GetBatchModifyClusterSnapshotsRequest, _super);
    function GetBatchModifyClusterSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchModifyClusterSnapshotsQueryParams)
    ], GetBatchModifyClusterSnapshotsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBatchModifyClusterSnapshotsHeaders)
    ], GetBatchModifyClusterSnapshotsRequest.prototype, "headers", void 0);
    return GetBatchModifyClusterSnapshotsRequest;
}(SpeakeasyBase));
export { GetBatchModifyClusterSnapshotsRequest };
var GetBatchModifyClusterSnapshotsResponse = /** @class */ (function (_super) {
    __extends(GetBatchModifyClusterSnapshotsResponse, _super);
    function GetBatchModifyClusterSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBatchModifyClusterSnapshotsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBatchModifyClusterSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBatchModifyClusterSnapshotsResponse.prototype, "statusCode", void 0);
    return GetBatchModifyClusterSnapshotsResponse;
}(SpeakeasyBase));
export { GetBatchModifyClusterSnapshotsResponse };
