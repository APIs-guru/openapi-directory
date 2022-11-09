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
export var GetRuleGroupXAmzTargetEnum;
(function (GetRuleGroupXAmzTargetEnum) {
    GetRuleGroupXAmzTargetEnum["AwswafRegional20161128GetRuleGroup"] = "AWSWAF_Regional_20161128.GetRuleGroup";
})(GetRuleGroupXAmzTargetEnum || (GetRuleGroupXAmzTargetEnum = {}));
var GetRuleGroupHeaders = /** @class */ (function (_super) {
    __extends(GetRuleGroupHeaders, _super);
    function GetRuleGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetRuleGroupHeaders.prototype, "xAmzTarget", void 0);
    return GetRuleGroupHeaders;
}(SpeakeasyBase));
export { GetRuleGroupHeaders };
var GetRuleGroupRequest = /** @class */ (function (_super) {
    __extends(GetRuleGroupRequest, _super);
    function GetRuleGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRuleGroupHeaders)
    ], GetRuleGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetRuleGroupRequest)
    ], GetRuleGroupRequest.prototype, "request", void 0);
    return GetRuleGroupRequest;
}(SpeakeasyBase));
export { GetRuleGroupRequest };
var GetRuleGroupResponse = /** @class */ (function (_super) {
    __extends(GetRuleGroupResponse, _super);
    function GetRuleGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRuleGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetRuleGroupResponse)
    ], GetRuleGroupResponse.prototype, "getRuleGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRuleGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRuleGroupResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRuleGroupResponse.prototype, "wafNonexistentItemException", void 0);
    return GetRuleGroupResponse;
}(SpeakeasyBase));
export { GetRuleGroupResponse };
