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
export var GetRemoveRoleFromDbInstanceActionEnum;
(function (GetRemoveRoleFromDbInstanceActionEnum) {
    GetRemoveRoleFromDbInstanceActionEnum["RemoveRoleFromDbInstance"] = "RemoveRoleFromDBInstance";
})(GetRemoveRoleFromDbInstanceActionEnum || (GetRemoveRoleFromDbInstanceActionEnum = {}));
export var GetRemoveRoleFromDbInstanceVersionEnum;
(function (GetRemoveRoleFromDbInstanceVersionEnum) {
    GetRemoveRoleFromDbInstanceVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetRemoveRoleFromDbInstanceVersionEnum || (GetRemoveRoleFromDbInstanceVersionEnum = {}));
var GetRemoveRoleFromDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromDbInstanceQueryParams, _super);
    function GetRemoveRoleFromDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FeatureName" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceQueryParams.prototype, "featureName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleArn" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceQueryParams.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceQueryParams.prototype, "version", void 0);
    return GetRemoveRoleFromDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetRemoveRoleFromDbInstanceQueryParams };
var GetRemoveRoleFromDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromDbInstanceHeaders, _super);
    function GetRemoveRoleFromDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemoveRoleFromDbInstanceHeaders;
}(SpeakeasyBase));
export { GetRemoveRoleFromDbInstanceHeaders };
var GetRemoveRoleFromDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromDbInstanceRequest, _super);
    function GetRemoveRoleFromDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveRoleFromDbInstanceQueryParams)
    ], GetRemoveRoleFromDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveRoleFromDbInstanceHeaders)
    ], GetRemoveRoleFromDbInstanceRequest.prototype, "headers", void 0);
    return GetRemoveRoleFromDbInstanceRequest;
}(SpeakeasyBase));
export { GetRemoveRoleFromDbInstanceRequest };
var GetRemoveRoleFromDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromDbInstanceResponse, _super);
    function GetRemoveRoleFromDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRemoveRoleFromDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveRoleFromDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveRoleFromDbInstanceResponse.prototype, "statusCode", void 0);
    return GetRemoveRoleFromDbInstanceResponse;
}(SpeakeasyBase));
export { GetRemoveRoleFromDbInstanceResponse };
