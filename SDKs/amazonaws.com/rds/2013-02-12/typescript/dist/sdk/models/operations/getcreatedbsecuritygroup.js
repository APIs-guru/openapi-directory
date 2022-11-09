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
export var GetCreateDbSecurityGroupActionEnum;
(function (GetCreateDbSecurityGroupActionEnum) {
    GetCreateDbSecurityGroupActionEnum["CreateDbSecurityGroup"] = "CreateDBSecurityGroup";
})(GetCreateDbSecurityGroupActionEnum || (GetCreateDbSecurityGroupActionEnum = {}));
export var GetCreateDbSecurityGroupVersionEnum;
(function (GetCreateDbSecurityGroupVersionEnum) {
    GetCreateDbSecurityGroupVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetCreateDbSecurityGroupVersionEnum || (GetCreateDbSecurityGroupVersionEnum = {}));
var GetCreateDbSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDbSecurityGroupQueryParams, _super);
    function GetCreateDbSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupDescription" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupQueryParams.prototype, "dbSecurityGroupDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupQueryParams.prototype, "dbSecurityGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupQueryParams.prototype, "version", void 0);
    return GetCreateDbSecurityGroupQueryParams;
}(SpeakeasyBase));
export { GetCreateDbSecurityGroupQueryParams };
var GetCreateDbSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDbSecurityGroupHeaders, _super);
    function GetCreateDbSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDbSecurityGroupHeaders;
}(SpeakeasyBase));
export { GetCreateDbSecurityGroupHeaders };
var GetCreateDbSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(GetCreateDbSecurityGroupRequest, _super);
    function GetCreateDbSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDbSecurityGroupQueryParams)
    ], GetCreateDbSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateDbSecurityGroupHeaders)
    ], GetCreateDbSecurityGroupRequest.prototype, "headers", void 0);
    return GetCreateDbSecurityGroupRequest;
}(SpeakeasyBase));
export { GetCreateDbSecurityGroupRequest };
var GetCreateDbSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(GetCreateDbSecurityGroupResponse, _super);
    function GetCreateDbSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDbSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateDbSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateDbSecurityGroupResponse.prototype, "statusCode", void 0);
    return GetCreateDbSecurityGroupResponse;
}(SpeakeasyBase));
export { GetCreateDbSecurityGroupResponse };
