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
export var GetCopyDbSnapshotActionEnum;
(function (GetCopyDbSnapshotActionEnum) {
    GetCopyDbSnapshotActionEnum["CopyDbSnapshot"] = "CopyDBSnapshot";
})(GetCopyDbSnapshotActionEnum || (GetCopyDbSnapshotActionEnum = {}));
export var GetCopyDbSnapshotVersionEnum;
(function (GetCopyDbSnapshotVersionEnum) {
    GetCopyDbSnapshotVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetCopyDbSnapshotVersionEnum || (GetCopyDbSnapshotVersionEnum = {}));
var GetCopyDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetCopyDbSnapshotQueryParams, _super);
    function GetCopyDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotQueryParams.prototype, "sourceDbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetDBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotQueryParams.prototype, "targetDbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotQueryParams.prototype, "version", void 0);
    return GetCopyDbSnapshotQueryParams;
}(SpeakeasyBase));
export { GetCopyDbSnapshotQueryParams };
var GetCopyDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetCopyDbSnapshotHeaders, _super);
    function GetCopyDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCopyDbSnapshotHeaders;
}(SpeakeasyBase));
export { GetCopyDbSnapshotHeaders };
var GetCopyDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetCopyDbSnapshotRequest, _super);
    function GetCopyDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCopyDbSnapshotQueryParams)
    ], GetCopyDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCopyDbSnapshotHeaders)
    ], GetCopyDbSnapshotRequest.prototype, "headers", void 0);
    return GetCopyDbSnapshotRequest;
}(SpeakeasyBase));
export { GetCopyDbSnapshotRequest };
var GetCopyDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetCopyDbSnapshotResponse, _super);
    function GetCopyDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCopyDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCopyDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCopyDbSnapshotResponse.prototype, "statusCode", void 0);
    return GetCopyDbSnapshotResponse;
}(SpeakeasyBase));
export { GetCopyDbSnapshotResponse };
