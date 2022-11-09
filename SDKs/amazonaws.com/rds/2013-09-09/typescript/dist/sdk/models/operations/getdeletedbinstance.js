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
export var GetDeleteDbInstanceActionEnum;
(function (GetDeleteDbInstanceActionEnum) {
    GetDeleteDbInstanceActionEnum["DeleteDbInstance"] = "DeleteDBInstance";
})(GetDeleteDbInstanceActionEnum || (GetDeleteDbInstanceActionEnum = {}));
export var GetDeleteDbInstanceVersionEnum;
(function (GetDeleteDbInstanceVersionEnum) {
    GetDeleteDbInstanceVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(GetDeleteDbInstanceVersionEnum || (GetDeleteDbInstanceVersionEnum = {}));
var GetDeleteDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceQueryParams, _super);
    function GetDeleteDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FinalDBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceQueryParams.prototype, "finalDbSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SkipFinalSnapshot" }),
        __metadata("design:type", Boolean)
    ], GetDeleteDbInstanceQueryParams.prototype, "skipFinalSnapshot", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceQueryParams.prototype, "version", void 0);
    return GetDeleteDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbInstanceQueryParams };
var GetDeleteDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceHeaders, _super);
    function GetDeleteDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbInstanceHeaders;
}(SpeakeasyBase));
export { GetDeleteDbInstanceHeaders };
var GetDeleteDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceRequest, _super);
    function GetDeleteDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbInstanceQueryParams)
    ], GetDeleteDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteDbInstanceHeaders)
    ], GetDeleteDbInstanceRequest.prototype, "headers", void 0);
    return GetDeleteDbInstanceRequest;
}(SpeakeasyBase));
export { GetDeleteDbInstanceRequest };
var GetDeleteDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbInstanceResponse, _super);
    function GetDeleteDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbInstanceResponse.prototype, "statusCode", void 0);
    return GetDeleteDbInstanceResponse;
}(SpeakeasyBase));
export { GetDeleteDbInstanceResponse };
