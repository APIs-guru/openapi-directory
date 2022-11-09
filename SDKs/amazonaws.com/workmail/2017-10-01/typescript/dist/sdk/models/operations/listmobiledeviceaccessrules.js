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
import * as shared from "../shared";
export var ListMobileDeviceAccessRulesXAmzTargetEnum;
(function (ListMobileDeviceAccessRulesXAmzTargetEnum) {
    ListMobileDeviceAccessRulesXAmzTargetEnum["WorkMailServiceListMobileDeviceAccessRules"] = "WorkMailService.ListMobileDeviceAccessRules";
})(ListMobileDeviceAccessRulesXAmzTargetEnum || (ListMobileDeviceAccessRulesXAmzTargetEnum = {}));
var ListMobileDeviceAccessRulesHeaders = /** @class */ (function (_super) {
    __extends(ListMobileDeviceAccessRulesHeaders, _super);
    function ListMobileDeviceAccessRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesHeaders.prototype, "xAmzTarget", void 0);
    return ListMobileDeviceAccessRulesHeaders;
}(SpeakeasyBase));
export { ListMobileDeviceAccessRulesHeaders };
var ListMobileDeviceAccessRulesRequest = /** @class */ (function (_super) {
    __extends(ListMobileDeviceAccessRulesRequest, _super);
    function ListMobileDeviceAccessRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListMobileDeviceAccessRulesHeaders)
    ], ListMobileDeviceAccessRulesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListMobileDeviceAccessRulesRequest)
    ], ListMobileDeviceAccessRulesRequest.prototype, "request", void 0);
    return ListMobileDeviceAccessRulesRequest;
}(SpeakeasyBase));
export { ListMobileDeviceAccessRulesRequest };
var ListMobileDeviceAccessRulesResponse = /** @class */ (function (_super) {
    __extends(ListMobileDeviceAccessRulesResponse, _super);
    function ListMobileDeviceAccessRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMobileDeviceAccessRulesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMobileDeviceAccessRulesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListMobileDeviceAccessRulesResponse)
    ], ListMobileDeviceAccessRulesResponse.prototype, "listMobileDeviceAccessRulesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMobileDeviceAccessRulesResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMobileDeviceAccessRulesResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMobileDeviceAccessRulesResponse.prototype, "statusCode", void 0);
    return ListMobileDeviceAccessRulesResponse;
}(SpeakeasyBase));
export { ListMobileDeviceAccessRulesResponse };
