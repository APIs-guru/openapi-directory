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
export var GetDeleteOptionGroupActionEnum;
(function (GetDeleteOptionGroupActionEnum) {
    GetDeleteOptionGroupActionEnum["DeleteOptionGroup"] = "DeleteOptionGroup";
})(GetDeleteOptionGroupActionEnum || (GetDeleteOptionGroupActionEnum = {}));
export var GetDeleteOptionGroupVersionEnum;
(function (GetDeleteOptionGroupVersionEnum) {
    GetDeleteOptionGroupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetDeleteOptionGroupVersionEnum || (GetDeleteOptionGroupVersionEnum = {}));
var GetDeleteOptionGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteOptionGroupQueryParams, _super);
    function GetDeleteOptionGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupQueryParams.prototype, "version", void 0);
    return GetDeleteOptionGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteOptionGroupQueryParams };
var GetDeleteOptionGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteOptionGroupHeaders, _super);
    function GetDeleteOptionGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteOptionGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteOptionGroupHeaders };
var GetDeleteOptionGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteOptionGroupRequest, _super);
    function GetDeleteOptionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteOptionGroupQueryParams)
    ], GetDeleteOptionGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteOptionGroupHeaders)
    ], GetDeleteOptionGroupRequest.prototype, "headers", void 0);
    return GetDeleteOptionGroupRequest;
}(SpeakeasyBase));
export { GetDeleteOptionGroupRequest };
var GetDeleteOptionGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteOptionGroupResponse, _super);
    function GetDeleteOptionGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteOptionGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteOptionGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteOptionGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteOptionGroupResponse;
}(SpeakeasyBase));
export { GetDeleteOptionGroupResponse };
