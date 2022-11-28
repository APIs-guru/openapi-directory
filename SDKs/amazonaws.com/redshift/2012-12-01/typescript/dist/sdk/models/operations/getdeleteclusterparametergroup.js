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
export var GetDeleteClusterParameterGroupActionEnum;
(function (GetDeleteClusterParameterGroupActionEnum) {
    GetDeleteClusterParameterGroupActionEnum["DeleteClusterParameterGroup"] = "DeleteClusterParameterGroup";
})(GetDeleteClusterParameterGroupActionEnum || (GetDeleteClusterParameterGroupActionEnum = {}));
export var GetDeleteClusterParameterGroupVersionEnum;
(function (GetDeleteClusterParameterGroupVersionEnum) {
    GetDeleteClusterParameterGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeleteClusterParameterGroupVersionEnum || (GetDeleteClusterParameterGroupVersionEnum = {}));
var GetDeleteClusterParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteClusterParameterGroupQueryParams, _super);
    function GetDeleteClusterParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupQueryParams.prototype, "parameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupQueryParams.prototype, "version", void 0);
    return GetDeleteClusterParameterGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteClusterParameterGroupQueryParams };
var GetDeleteClusterParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteClusterParameterGroupHeaders, _super);
    function GetDeleteClusterParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteClusterParameterGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteClusterParameterGroupHeaders };
var GetDeleteClusterParameterGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteClusterParameterGroupRequest, _super);
    function GetDeleteClusterParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClusterParameterGroupQueryParams)
    ], GetDeleteClusterParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteClusterParameterGroupHeaders)
    ], GetDeleteClusterParameterGroupRequest.prototype, "headers", void 0);
    return GetDeleteClusterParameterGroupRequest;
}(SpeakeasyBase));
export { GetDeleteClusterParameterGroupRequest };
var GetDeleteClusterParameterGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteClusterParameterGroupResponse, _super);
    function GetDeleteClusterParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteClusterParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteClusterParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteClusterParameterGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteClusterParameterGroupResponse;
}(SpeakeasyBase));
export { GetDeleteClusterParameterGroupResponse };
