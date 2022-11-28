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
export var GetDisableSnapshotCopyActionEnum;
(function (GetDisableSnapshotCopyActionEnum) {
    GetDisableSnapshotCopyActionEnum["DisableSnapshotCopy"] = "DisableSnapshotCopy";
})(GetDisableSnapshotCopyActionEnum || (GetDisableSnapshotCopyActionEnum = {}));
export var GetDisableSnapshotCopyVersionEnum;
(function (GetDisableSnapshotCopyVersionEnum) {
    GetDisableSnapshotCopyVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDisableSnapshotCopyVersionEnum || (GetDisableSnapshotCopyVersionEnum = {}));
var GetDisableSnapshotCopyQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableSnapshotCopyQueryParams, _super);
    function GetDisableSnapshotCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyQueryParams.prototype, "version", void 0);
    return GetDisableSnapshotCopyQueryParams;
}(SpeakeasyBase));
export { GetDisableSnapshotCopyQueryParams };
var GetDisableSnapshotCopyHeaders = /** @class */ (function (_super) {
    __extends(GetDisableSnapshotCopyHeaders, _super);
    function GetDisableSnapshotCopyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableSnapshotCopyHeaders;
}(SpeakeasyBase));
export { GetDisableSnapshotCopyHeaders };
var GetDisableSnapshotCopyRequest = /** @class */ (function (_super) {
    __extends(GetDisableSnapshotCopyRequest, _super);
    function GetDisableSnapshotCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableSnapshotCopyQueryParams)
    ], GetDisableSnapshotCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableSnapshotCopyHeaders)
    ], GetDisableSnapshotCopyRequest.prototype, "headers", void 0);
    return GetDisableSnapshotCopyRequest;
}(SpeakeasyBase));
export { GetDisableSnapshotCopyRequest };
var GetDisableSnapshotCopyResponse = /** @class */ (function (_super) {
    __extends(GetDisableSnapshotCopyResponse, _super);
    function GetDisableSnapshotCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableSnapshotCopyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableSnapshotCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableSnapshotCopyResponse.prototype, "statusCode", void 0);
    return GetDisableSnapshotCopyResponse;
}(SpeakeasyBase));
export { GetDisableSnapshotCopyResponse };
