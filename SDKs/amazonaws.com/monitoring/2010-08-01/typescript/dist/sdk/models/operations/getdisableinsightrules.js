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
export var GetDisableInsightRulesActionEnum;
(function (GetDisableInsightRulesActionEnum) {
    GetDisableInsightRulesActionEnum["DisableInsightRules"] = "DisableInsightRules";
})(GetDisableInsightRulesActionEnum || (GetDisableInsightRulesActionEnum = {}));
export var GetDisableInsightRulesVersionEnum;
(function (GetDisableInsightRulesVersionEnum) {
    GetDisableInsightRulesVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDisableInsightRulesVersionEnum || (GetDisableInsightRulesVersionEnum = {}));
var GetDisableInsightRulesQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableInsightRulesQueryParams, _super);
    function GetDisableInsightRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNames" }),
        __metadata("design:type", Array)
    ], GetDisableInsightRulesQueryParams.prototype, "ruleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesQueryParams.prototype, "version", void 0);
    return GetDisableInsightRulesQueryParams;
}(SpeakeasyBase));
export { GetDisableInsightRulesQueryParams };
var GetDisableInsightRulesHeaders = /** @class */ (function (_super) {
    __extends(GetDisableInsightRulesHeaders, _super);
    function GetDisableInsightRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableInsightRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableInsightRulesHeaders;
}(SpeakeasyBase));
export { GetDisableInsightRulesHeaders };
var GetDisableInsightRulesRequest = /** @class */ (function (_super) {
    __extends(GetDisableInsightRulesRequest, _super);
    function GetDisableInsightRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableInsightRulesQueryParams)
    ], GetDisableInsightRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableInsightRulesHeaders)
    ], GetDisableInsightRulesRequest.prototype, "headers", void 0);
    return GetDisableInsightRulesRequest;
}(SpeakeasyBase));
export { GetDisableInsightRulesRequest };
var GetDisableInsightRulesResponse = /** @class */ (function (_super) {
    __extends(GetDisableInsightRulesResponse, _super);
    function GetDisableInsightRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisableInsightRulesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableInsightRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableInsightRulesResponse.prototype, "statusCode", void 0);
    return GetDisableInsightRulesResponse;
}(SpeakeasyBase));
export { GetDisableInsightRulesResponse };
