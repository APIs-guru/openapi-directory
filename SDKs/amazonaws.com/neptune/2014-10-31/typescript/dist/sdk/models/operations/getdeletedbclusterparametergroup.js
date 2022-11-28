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
export var GetDeleteDbClusterParameterGroupActionEnum;
(function (GetDeleteDbClusterParameterGroupActionEnum) {
    GetDeleteDbClusterParameterGroupActionEnum["DeleteDbClusterParameterGroup"] = "DeleteDBClusterParameterGroup";
})(GetDeleteDbClusterParameterGroupActionEnum || (GetDeleteDbClusterParameterGroupActionEnum = {}));
export var GetDeleteDbClusterParameterGroupVersionEnum;
(function (GetDeleteDbClusterParameterGroupVersionEnum) {
    GetDeleteDbClusterParameterGroupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteDbClusterParameterGroupVersionEnum || (GetDeleteDbClusterParameterGroupVersionEnum = {}));
var GetDeleteDbClusterParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterParameterGroupQueryParams, _super);
    function GetDeleteDbClusterParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupQueryParams.prototype, "dbClusterParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupQueryParams.prototype, "version", void 0);
    return GetDeleteDbClusterParameterGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteDbClusterParameterGroupQueryParams };
var GetDeleteDbClusterParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterParameterGroupHeaders, _super);
    function GetDeleteDbClusterParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbClusterParameterGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteDbClusterParameterGroupHeaders };
var GetDeleteDbClusterParameterGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterParameterGroupRequest, _super);
    function GetDeleteDbClusterParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteDbClusterParameterGroupQueryParams)
    ], GetDeleteDbClusterParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteDbClusterParameterGroupHeaders)
    ], GetDeleteDbClusterParameterGroupRequest.prototype, "headers", void 0);
    return GetDeleteDbClusterParameterGroupRequest;
}(SpeakeasyBase));
export { GetDeleteDbClusterParameterGroupRequest };
var GetDeleteDbClusterParameterGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbClusterParameterGroupResponse, _super);
    function GetDeleteDbClusterParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbClusterParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteDbClusterParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteDbClusterParameterGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteDbClusterParameterGroupResponse;
}(SpeakeasyBase));
export { GetDeleteDbClusterParameterGroupResponse };
