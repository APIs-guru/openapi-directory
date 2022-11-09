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
export var GetDescribeDbSnapshotAttributesActionEnum;
(function (GetDescribeDbSnapshotAttributesActionEnum) {
    GetDescribeDbSnapshotAttributesActionEnum["DescribeDbSnapshotAttributes"] = "DescribeDBSnapshotAttributes";
})(GetDescribeDbSnapshotAttributesActionEnum || (GetDescribeDbSnapshotAttributesActionEnum = {}));
export var GetDescribeDbSnapshotAttributesVersionEnum;
(function (GetDescribeDbSnapshotAttributesVersionEnum) {
    GetDescribeDbSnapshotAttributesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDescribeDbSnapshotAttributesVersionEnum || (GetDescribeDbSnapshotAttributesVersionEnum = {}));
var GetDescribeDbSnapshotAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotAttributesQueryParams, _super);
    function GetDescribeDbSnapshotAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesQueryParams.prototype, "version", void 0);
    return GetDescribeDbSnapshotAttributesQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotAttributesQueryParams };
var GetDescribeDbSnapshotAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotAttributesHeaders, _super);
    function GetDescribeDbSnapshotAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbSnapshotAttributesHeaders;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotAttributesHeaders };
var GetDescribeDbSnapshotAttributesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotAttributesRequest, _super);
    function GetDescribeDbSnapshotAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbSnapshotAttributesQueryParams)
    ], GetDescribeDbSnapshotAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDbSnapshotAttributesHeaders)
    ], GetDescribeDbSnapshotAttributesRequest.prototype, "headers", void 0);
    return GetDescribeDbSnapshotAttributesRequest;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotAttributesRequest };
var GetDescribeDbSnapshotAttributesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbSnapshotAttributesResponse, _super);
    function GetDescribeDbSnapshotAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbSnapshotAttributesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeDbSnapshotAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbSnapshotAttributesResponse.prototype, "statusCode", void 0);
    return GetDescribeDbSnapshotAttributesResponse;
}(SpeakeasyBase));
export { GetDescribeDbSnapshotAttributesResponse };
