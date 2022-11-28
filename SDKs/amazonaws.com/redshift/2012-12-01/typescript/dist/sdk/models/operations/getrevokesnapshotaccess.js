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
export var GetRevokeSnapshotAccessActionEnum;
(function (GetRevokeSnapshotAccessActionEnum) {
    GetRevokeSnapshotAccessActionEnum["RevokeSnapshotAccess"] = "RevokeSnapshotAccess";
})(GetRevokeSnapshotAccessActionEnum || (GetRevokeSnapshotAccessActionEnum = {}));
export var GetRevokeSnapshotAccessVersionEnum;
(function (GetRevokeSnapshotAccessVersionEnum) {
    GetRevokeSnapshotAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetRevokeSnapshotAccessVersionEnum || (GetRevokeSnapshotAccessVersionEnum = {}));
var GetRevokeSnapshotAccessQueryParams = /** @class */ (function (_super) {
    __extends(GetRevokeSnapshotAccessQueryParams, _super);
    function GetRevokeSnapshotAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountWithRestoreAccess" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessQueryParams.prototype, "accountWithRestoreAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessQueryParams.prototype, "snapshotClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessQueryParams.prototype, "snapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessQueryParams.prototype, "version", void 0);
    return GetRevokeSnapshotAccessQueryParams;
}(SpeakeasyBase));
export { GetRevokeSnapshotAccessQueryParams };
var GetRevokeSnapshotAccessHeaders = /** @class */ (function (_super) {
    __extends(GetRevokeSnapshotAccessHeaders, _super);
    function GetRevokeSnapshotAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRevokeSnapshotAccessHeaders;
}(SpeakeasyBase));
export { GetRevokeSnapshotAccessHeaders };
var GetRevokeSnapshotAccessRequest = /** @class */ (function (_super) {
    __extends(GetRevokeSnapshotAccessRequest, _super);
    function GetRevokeSnapshotAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevokeSnapshotAccessQueryParams)
    ], GetRevokeSnapshotAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRevokeSnapshotAccessHeaders)
    ], GetRevokeSnapshotAccessRequest.prototype, "headers", void 0);
    return GetRevokeSnapshotAccessRequest;
}(SpeakeasyBase));
export { GetRevokeSnapshotAccessRequest };
var GetRevokeSnapshotAccessResponse = /** @class */ (function (_super) {
    __extends(GetRevokeSnapshotAccessResponse, _super);
    function GetRevokeSnapshotAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRevokeSnapshotAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRevokeSnapshotAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRevokeSnapshotAccessResponse.prototype, "statusCode", void 0);
    return GetRevokeSnapshotAccessResponse;
}(SpeakeasyBase));
export { GetRevokeSnapshotAccessResponse };
