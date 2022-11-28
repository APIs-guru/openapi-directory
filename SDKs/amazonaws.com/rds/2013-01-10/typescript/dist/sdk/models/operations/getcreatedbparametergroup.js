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
export var GetCreateDbParameterGroupActionEnum;
(function (GetCreateDbParameterGroupActionEnum) {
    GetCreateDbParameterGroupActionEnum["CreateDbParameterGroup"] = "CreateDBParameterGroup";
})(GetCreateDbParameterGroupActionEnum || (GetCreateDbParameterGroupActionEnum = {}));
export var GetCreateDbParameterGroupVersionEnum;
(function (GetCreateDbParameterGroupVersionEnum) {
    GetCreateDbParameterGroupVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetCreateDbParameterGroupVersionEnum || (GetCreateDbParameterGroupVersionEnum = {}));
var GetCreateDbParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDbParameterGroupQueryParams, _super);
    function GetCreateDbParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupQueryParams.prototype, "dbParameterGroupFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupQueryParams.prototype, "dbParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupQueryParams.prototype, "version", void 0);
    return GetCreateDbParameterGroupQueryParams;
}(SpeakeasyBase));
export { GetCreateDbParameterGroupQueryParams };
var GetCreateDbParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDbParameterGroupHeaders, _super);
    function GetCreateDbParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDbParameterGroupHeaders;
}(SpeakeasyBase));
export { GetCreateDbParameterGroupHeaders };
var GetCreateDbParameterGroupRequest = /** @class */ (function (_super) {
    __extends(GetCreateDbParameterGroupRequest, _super);
    function GetCreateDbParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDbParameterGroupQueryParams)
    ], GetCreateDbParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateDbParameterGroupHeaders)
    ], GetCreateDbParameterGroupRequest.prototype, "headers", void 0);
    return GetCreateDbParameterGroupRequest;
}(SpeakeasyBase));
export { GetCreateDbParameterGroupRequest };
var GetCreateDbParameterGroupResponse = /** @class */ (function (_super) {
    __extends(GetCreateDbParameterGroupResponse, _super);
    function GetCreateDbParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDbParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateDbParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateDbParameterGroupResponse.prototype, "statusCode", void 0);
    return GetCreateDbParameterGroupResponse;
}(SpeakeasyBase));
export { GetCreateDbParameterGroupResponse };
