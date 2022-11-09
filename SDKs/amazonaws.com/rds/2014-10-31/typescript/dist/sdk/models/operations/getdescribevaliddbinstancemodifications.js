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
export var GetDescribeValidDbInstanceModificationsActionEnum;
(function (GetDescribeValidDbInstanceModificationsActionEnum) {
    GetDescribeValidDbInstanceModificationsActionEnum["DescribeValidDbInstanceModifications"] = "DescribeValidDBInstanceModifications";
})(GetDescribeValidDbInstanceModificationsActionEnum || (GetDescribeValidDbInstanceModificationsActionEnum = {}));
export var GetDescribeValidDbInstanceModificationsVersionEnum;
(function (GetDescribeValidDbInstanceModificationsVersionEnum) {
    GetDescribeValidDbInstanceModificationsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDescribeValidDbInstanceModificationsVersionEnum || (GetDescribeValidDbInstanceModificationsVersionEnum = {}));
var GetDescribeValidDbInstanceModificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeValidDbInstanceModificationsQueryParams, _super);
    function GetDescribeValidDbInstanceModificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsQueryParams.prototype, "version", void 0);
    return GetDescribeValidDbInstanceModificationsQueryParams;
}(SpeakeasyBase));
export { GetDescribeValidDbInstanceModificationsQueryParams };
var GetDescribeValidDbInstanceModificationsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeValidDbInstanceModificationsHeaders, _super);
    function GetDescribeValidDbInstanceModificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeValidDbInstanceModificationsHeaders;
}(SpeakeasyBase));
export { GetDescribeValidDbInstanceModificationsHeaders };
var GetDescribeValidDbInstanceModificationsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeValidDbInstanceModificationsRequest, _super);
    function GetDescribeValidDbInstanceModificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeValidDbInstanceModificationsQueryParams)
    ], GetDescribeValidDbInstanceModificationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeValidDbInstanceModificationsHeaders)
    ], GetDescribeValidDbInstanceModificationsRequest.prototype, "headers", void 0);
    return GetDescribeValidDbInstanceModificationsRequest;
}(SpeakeasyBase));
export { GetDescribeValidDbInstanceModificationsRequest };
var GetDescribeValidDbInstanceModificationsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeValidDbInstanceModificationsResponse, _super);
    function GetDescribeValidDbInstanceModificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeValidDbInstanceModificationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeValidDbInstanceModificationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeValidDbInstanceModificationsResponse.prototype, "statusCode", void 0);
    return GetDescribeValidDbInstanceModificationsResponse;
}(SpeakeasyBase));
export { GetDescribeValidDbInstanceModificationsResponse };
