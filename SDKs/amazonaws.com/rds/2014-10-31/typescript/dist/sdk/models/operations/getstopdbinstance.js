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
export var GetStopDbInstanceActionEnum;
(function (GetStopDbInstanceActionEnum) {
    GetStopDbInstanceActionEnum["StopDbInstance"] = "StopDBInstance";
})(GetStopDbInstanceActionEnum || (GetStopDbInstanceActionEnum = {}));
export var GetStopDbInstanceVersionEnum;
(function (GetStopDbInstanceVersionEnum) {
    GetStopDbInstanceVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetStopDbInstanceVersionEnum || (GetStopDbInstanceVersionEnum = {}));
var GetStopDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceQueryParams, _super);
    function GetStopDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceQueryParams.prototype, "version", void 0);
    return GetStopDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetStopDbInstanceQueryParams };
var GetStopDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceHeaders, _super);
    function GetStopDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStopDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetStopDbInstanceHeaders;
}(SpeakeasyBase));
export { GetStopDbInstanceHeaders };
var GetStopDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceRequest, _super);
    function GetStopDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStopDbInstanceQueryParams)
    ], GetStopDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStopDbInstanceHeaders)
    ], GetStopDbInstanceRequest.prototype, "headers", void 0);
    return GetStopDbInstanceRequest;
}(SpeakeasyBase));
export { GetStopDbInstanceRequest };
var GetStopDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetStopDbInstanceResponse, _super);
    function GetStopDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStopDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStopDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStopDbInstanceResponse.prototype, "statusCode", void 0);
    return GetStopDbInstanceResponse;
}(SpeakeasyBase));
export { GetStopDbInstanceResponse };
