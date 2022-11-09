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
export var GetDeleteInsightRulesActionEnum;
(function (GetDeleteInsightRulesActionEnum) {
    GetDeleteInsightRulesActionEnum["DeleteInsightRules"] = "DeleteInsightRules";
})(GetDeleteInsightRulesActionEnum || (GetDeleteInsightRulesActionEnum = {}));
export var GetDeleteInsightRulesVersionEnum;
(function (GetDeleteInsightRulesVersionEnum) {
    GetDeleteInsightRulesVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDeleteInsightRulesVersionEnum || (GetDeleteInsightRulesVersionEnum = {}));
var GetDeleteInsightRulesQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteInsightRulesQueryParams, _super);
    function GetDeleteInsightRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RuleNames" }),
        __metadata("design:type", Array)
    ], GetDeleteInsightRulesQueryParams.prototype, "ruleNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesQueryParams.prototype, "version", void 0);
    return GetDeleteInsightRulesQueryParams;
}(SpeakeasyBase));
export { GetDeleteInsightRulesQueryParams };
var GetDeleteInsightRulesHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteInsightRulesHeaders, _super);
    function GetDeleteInsightRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteInsightRulesHeaders;
}(SpeakeasyBase));
export { GetDeleteInsightRulesHeaders };
var GetDeleteInsightRulesRequest = /** @class */ (function (_super) {
    __extends(GetDeleteInsightRulesRequest, _super);
    function GetDeleteInsightRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteInsightRulesQueryParams)
    ], GetDeleteInsightRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteInsightRulesHeaders)
    ], GetDeleteInsightRulesRequest.prototype, "headers", void 0);
    return GetDeleteInsightRulesRequest;
}(SpeakeasyBase));
export { GetDeleteInsightRulesRequest };
var GetDeleteInsightRulesResponse = /** @class */ (function (_super) {
    __extends(GetDeleteInsightRulesResponse, _super);
    function GetDeleteInsightRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteInsightRulesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteInsightRulesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteInsightRulesResponse.prototype, "statusCode", void 0);
    return GetDeleteInsightRulesResponse;
}(SpeakeasyBase));
export { GetDeleteInsightRulesResponse };
