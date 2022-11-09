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
export var GetDeleteDbClusterSnapshotActionEnum;
(function (GetDeleteDbClusterSnapshotActionEnum) {
    GetDeleteDbClusterSnapshotActionEnum["DeleteDbClusterSnapshot"] = "DeleteDBClusterSnapshot";
})(GetDeleteDbClusterSnapshotActionEnum || (GetDeleteDbClusterSnapshotActionEnum = {}));
export var GetDeleteDbClusterSnapshotVersionEnum;
(function (GetDeleteDbClusterSnapshotVersionEnum) {
    GetDeleteDbClusterSnapshotVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteDbClusterSnapshotVersionEnum || (GetDeleteDbClusterSnapshotVersionEnum = {}));
var GetDeleteDbClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterSnapshotQueryParams, _super);
    function GetDeleteDbClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotQueryParams.prototype, "dbClusterSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotQueryParams.prototype, "version", void 0);
    return GetDeleteDbClusterSnapshotQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbClusterSnapshotQueryParams };
var GetDeleteDbClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterSnapshotHeaders, _super);
    function GetDeleteDbClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbClusterSnapshotHeaders;
}(SpeakeasyBase));
export { GetDeleteDbClusterSnapshotHeaders };
var GetDeleteDbClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterSnapshotRequest, _super);
    function GetDeleteDbClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbClusterSnapshotQueryParams)
    ], GetDeleteDbClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbClusterSnapshotHeaders)
    ], GetDeleteDbClusterSnapshotRequest.prototype, "headers", void 0);
    return GetDeleteDbClusterSnapshotRequest;
}(SpeakeasyBase));
export { GetDeleteDbClusterSnapshotRequest };
var GetDeleteDbClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterSnapshotResponse, _super);
    function GetDeleteDbClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteDbClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbClusterSnapshotResponse.prototype, "statusCode", void 0);
    return GetDeleteDbClusterSnapshotResponse;
}(SpeakeasyBase));
export { GetDeleteDbClusterSnapshotResponse };
