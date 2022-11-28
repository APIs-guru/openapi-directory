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
export var GetBacktrackDbClusterActionEnum;
(function (GetBacktrackDbClusterActionEnum) {
    GetBacktrackDbClusterActionEnum["BacktrackDbCluster"] = "BacktrackDBCluster";
})(GetBacktrackDbClusterActionEnum || (GetBacktrackDbClusterActionEnum = {}));
export var GetBacktrackDbClusterVersionEnum;
(function (GetBacktrackDbClusterVersionEnum) {
    GetBacktrackDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetBacktrackDbClusterVersionEnum || (GetBacktrackDbClusterVersionEnum = {}));
var GetBacktrackDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetBacktrackDbClusterQueryParams, _super);
    function GetBacktrackDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BacktrackTo" }),
        __metadata("design:type", Date)
    ], GetBacktrackDbClusterQueryParams.prototype, "backtrackTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetBacktrackDbClusterQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UseEarliestTimeOnPointInTimeUnavailable" }),
        __metadata("design:type", Boolean)
    ], GetBacktrackDbClusterQueryParams.prototype, "useEarliestTimeOnPointInTimeUnavailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterQueryParams.prototype, "version", void 0);
    return GetBacktrackDbClusterQueryParams;
}(SpeakeasyBase));
export { GetBacktrackDbClusterQueryParams };
var GetBacktrackDbClusterHeaders = /** @class */ (function (_super) {
    __extends(GetBacktrackDbClusterHeaders, _super);
    function GetBacktrackDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBacktrackDbClusterHeaders;
}(SpeakeasyBase));
export { GetBacktrackDbClusterHeaders };
var GetBacktrackDbClusterRequest = /** @class */ (function (_super) {
    __extends(GetBacktrackDbClusterRequest, _super);
    function GetBacktrackDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBacktrackDbClusterQueryParams)
    ], GetBacktrackDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBacktrackDbClusterHeaders)
    ], GetBacktrackDbClusterRequest.prototype, "headers", void 0);
    return GetBacktrackDbClusterRequest;
}(SpeakeasyBase));
export { GetBacktrackDbClusterRequest };
var GetBacktrackDbClusterResponse = /** @class */ (function (_super) {
    __extends(GetBacktrackDbClusterResponse, _super);
    function GetBacktrackDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBacktrackDbClusterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBacktrackDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBacktrackDbClusterResponse.prototype, "statusCode", void 0);
    return GetBacktrackDbClusterResponse;
}(SpeakeasyBase));
export { GetBacktrackDbClusterResponse };
