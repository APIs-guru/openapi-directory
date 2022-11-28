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
import * as shared from "../shared";
var EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams, _super);
    function EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams };
var EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams, _super);
    function EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams.prototype, "perPage", void 0);
    return EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams };
var EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson, _super);
    function EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners", elemType: shared.RunnerNoLabels }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson.prototype, "runners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson.prototype, "totalCount", void 0);
    return EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson };
var EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, _super);
    function EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest };
var EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse, _super);
    function EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson)
    ], EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse.prototype, "enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject", void 0);
    return EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse };
