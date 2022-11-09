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
export var GetAddRoleToDbInstanceActionEnum;
(function (GetAddRoleToDbInstanceActionEnum) {
    GetAddRoleToDbInstanceActionEnum["AddRoleToDbInstance"] = "AddRoleToDBInstance";
})(GetAddRoleToDbInstanceActionEnum || (GetAddRoleToDbInstanceActionEnum = {}));
export var GetAddRoleToDbInstanceVersionEnum;
(function (GetAddRoleToDbInstanceVersionEnum) {
    GetAddRoleToDbInstanceVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetAddRoleToDbInstanceVersionEnum || (GetAddRoleToDbInstanceVersionEnum = {}));
var GetAddRoleToDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbInstanceQueryParams, _super);
    function GetAddRoleToDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FeatureName" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceQueryParams.prototype, "featureName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleArn" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceQueryParams.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceQueryParams.prototype, "version", void 0);
    return GetAddRoleToDbInstanceQueryParams;
}(SpeakeasyBase));
export { GetAddRoleToDbInstanceQueryParams };
var GetAddRoleToDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbInstanceHeaders, _super);
    function GetAddRoleToDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddRoleToDbInstanceHeaders;
}(SpeakeasyBase));
export { GetAddRoleToDbInstanceHeaders };
var GetAddRoleToDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbInstanceRequest, _super);
    function GetAddRoleToDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToDbInstanceQueryParams)
    ], GetAddRoleToDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToDbInstanceHeaders)
    ], GetAddRoleToDbInstanceRequest.prototype, "headers", void 0);
    return GetAddRoleToDbInstanceRequest;
}(SpeakeasyBase));
export { GetAddRoleToDbInstanceRequest };
var GetAddRoleToDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetAddRoleToDbInstanceResponse, _super);
    function GetAddRoleToDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddRoleToDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAddRoleToDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAddRoleToDbInstanceResponse.prototype, "statusCode", void 0);
    return GetAddRoleToDbInstanceResponse;
}(SpeakeasyBase));
export { GetAddRoleToDbInstanceResponse };
