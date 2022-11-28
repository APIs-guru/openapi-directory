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
export var GetModifyUsageLimitActionEnum;
(function (GetModifyUsageLimitActionEnum) {
    GetModifyUsageLimitActionEnum["ModifyUsageLimit"] = "ModifyUsageLimit";
})(GetModifyUsageLimitActionEnum || (GetModifyUsageLimitActionEnum = {}));
export var GetModifyUsageLimitBreachActionEnum;
(function (GetModifyUsageLimitBreachActionEnum) {
    GetModifyUsageLimitBreachActionEnum["Log"] = "log";
    GetModifyUsageLimitBreachActionEnum["EmitMetric"] = "emit-metric";
    GetModifyUsageLimitBreachActionEnum["Disable"] = "disable";
})(GetModifyUsageLimitBreachActionEnum || (GetModifyUsageLimitBreachActionEnum = {}));
export var GetModifyUsageLimitVersionEnum;
(function (GetModifyUsageLimitVersionEnum) {
    GetModifyUsageLimitVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyUsageLimitVersionEnum || (GetModifyUsageLimitVersionEnum = {}));
var GetModifyUsageLimitQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyUsageLimitQueryParams, _super);
    function GetModifyUsageLimitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Amount" }),
        __metadata("design:type", Number)
    ], GetModifyUsageLimitQueryParams.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BreachAction" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitQueryParams.prototype, "breachAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitQueryParams.prototype, "usageLimitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitQueryParams.prototype, "version", void 0);
    return GetModifyUsageLimitQueryParams;
}(SpeakeasyBase));
export { GetModifyUsageLimitQueryParams };
var GetModifyUsageLimitHeaders = /** @class */ (function (_super) {
    __extends(GetModifyUsageLimitHeaders, _super);
    function GetModifyUsageLimitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyUsageLimitHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyUsageLimitHeaders;
}(SpeakeasyBase));
export { GetModifyUsageLimitHeaders };
var GetModifyUsageLimitRequest = /** @class */ (function (_super) {
    __extends(GetModifyUsageLimitRequest, _super);
    function GetModifyUsageLimitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyUsageLimitQueryParams)
    ], GetModifyUsageLimitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyUsageLimitHeaders)
    ], GetModifyUsageLimitRequest.prototype, "headers", void 0);
    return GetModifyUsageLimitRequest;
}(SpeakeasyBase));
export { GetModifyUsageLimitRequest };
var GetModifyUsageLimitResponse = /** @class */ (function (_super) {
    __extends(GetModifyUsageLimitResponse, _super);
    function GetModifyUsageLimitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyUsageLimitResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyUsageLimitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyUsageLimitResponse.prototype, "statusCode", void 0);
    return GetModifyUsageLimitResponse;
}(SpeakeasyBase));
export { GetModifyUsageLimitResponse };
