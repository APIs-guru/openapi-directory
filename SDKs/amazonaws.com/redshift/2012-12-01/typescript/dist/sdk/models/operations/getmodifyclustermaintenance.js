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
export var GetModifyClusterMaintenanceActionEnum;
(function (GetModifyClusterMaintenanceActionEnum) {
    GetModifyClusterMaintenanceActionEnum["ModifyClusterMaintenance"] = "ModifyClusterMaintenance";
})(GetModifyClusterMaintenanceActionEnum || (GetModifyClusterMaintenanceActionEnum = {}));
export var GetModifyClusterMaintenanceVersionEnum;
(function (GetModifyClusterMaintenanceVersionEnum) {
    GetModifyClusterMaintenanceVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyClusterMaintenanceVersionEnum || (GetModifyClusterMaintenanceVersionEnum = {}));
var GetModifyClusterMaintenanceQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClusterMaintenanceQueryParams, _super);
    function GetModifyClusterMaintenanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenance" }),
        __metadata("design:type", Boolean)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "deferMaintenance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceDuration" }),
        __metadata("design:type", Number)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "deferMaintenanceDuration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceEndTime" }),
        __metadata("design:type", Date)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "deferMaintenanceEndTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "deferMaintenanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DeferMaintenanceStartTime" }),
        __metadata("design:type", Date)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "deferMaintenanceStartTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceQueryParams.prototype, "version", void 0);
    return GetModifyClusterMaintenanceQueryParams;
}(SpeakeasyBase));
export { GetModifyClusterMaintenanceQueryParams };
var GetModifyClusterMaintenanceHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClusterMaintenanceHeaders, _super);
    function GetModifyClusterMaintenanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClusterMaintenanceHeaders;
}(SpeakeasyBase));
export { GetModifyClusterMaintenanceHeaders };
var GetModifyClusterMaintenanceRequest = /** @class */ (function (_super) {
    __extends(GetModifyClusterMaintenanceRequest, _super);
    function GetModifyClusterMaintenanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterMaintenanceQueryParams)
    ], GetModifyClusterMaintenanceRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyClusterMaintenanceHeaders)
    ], GetModifyClusterMaintenanceRequest.prototype, "headers", void 0);
    return GetModifyClusterMaintenanceRequest;
}(SpeakeasyBase));
export { GetModifyClusterMaintenanceRequest };
var GetModifyClusterMaintenanceResponse = /** @class */ (function (_super) {
    __extends(GetModifyClusterMaintenanceResponse, _super);
    function GetModifyClusterMaintenanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClusterMaintenanceResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyClusterMaintenanceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyClusterMaintenanceResponse.prototype, "statusCode", void 0);
    return GetModifyClusterMaintenanceResponse;
}(SpeakeasyBase));
export { GetModifyClusterMaintenanceResponse };
