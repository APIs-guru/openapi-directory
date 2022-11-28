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
export var GetModifyClusterSnapshotActionEnum;
(function (GetModifyClusterSnapshotActionEnum) {
    GetModifyClusterSnapshotActionEnum["ModifyClusterSnapshot"] = "ModifyClusterSnapshot";
})(GetModifyClusterSnapshotActionEnum || (GetModifyClusterSnapshotActionEnum = {}));
export var GetModifyClusterSnapshotVersionEnum;
(function (GetModifyClusterSnapshotVersionEnum) {
    GetModifyClusterSnapshotVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyClusterSnapshotVersionEnum || (GetModifyClusterSnapshotVersionEnum = {}));
var GetModifyClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClusterSnapshotQueryParams, _super);
    function GetModifyClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterSnapshotQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], GetModifyClusterSnapshotQueryParams.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotQueryParams.prototype, "snapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotQueryParams.prototype, "version", void 0);
    return GetModifyClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { GetModifyClusterSnapshotQueryParams };
var GetModifyClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClusterSnapshotHeaders, _super);
    function GetModifyClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClusterSnapshotHeaders;
}(SpeakeasyBase));
export { GetModifyClusterSnapshotHeaders };
var GetModifyClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetModifyClusterSnapshotRequest, _super);
    function GetModifyClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyClusterSnapshotQueryParams)
    ], GetModifyClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyClusterSnapshotHeaders)
    ], GetModifyClusterSnapshotRequest.prototype, "headers", void 0);
    return GetModifyClusterSnapshotRequest;
}(SpeakeasyBase));
export { GetModifyClusterSnapshotRequest };
var GetModifyClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetModifyClusterSnapshotResponse, _super);
    function GetModifyClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyClusterSnapshotResponse.prototype, "statusCode", void 0);
    return GetModifyClusterSnapshotResponse;
}(SpeakeasyBase));
export { GetModifyClusterSnapshotResponse };
