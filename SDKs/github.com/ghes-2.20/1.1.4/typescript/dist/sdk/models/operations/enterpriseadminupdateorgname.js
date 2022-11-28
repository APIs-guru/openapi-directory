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
var EnterpriseAdminUpdateOrgNamePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateOrgNamePathParams, _super);
    function EnterpriseAdminUpdateOrgNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateOrgNamePathParams.prototype, "org", void 0);
    return EnterpriseAdminUpdateOrgNamePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateOrgNamePathParams };
var EnterpriseAdminUpdateOrgNameRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateOrgNameRequestBody, _super);
    function EnterpriseAdminUpdateOrgNameRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateOrgNameRequestBody.prototype, "login", void 0);
    return EnterpriseAdminUpdateOrgNameRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateOrgNameRequestBody };
var EnterpriseAdminUpdateOrgName202ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateOrgName202ApplicationJson, _super);
    function EnterpriseAdminUpdateOrgName202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateOrgName202ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateOrgName202ApplicationJson.prototype, "url", void 0);
    return EnterpriseAdminUpdateOrgName202ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateOrgName202ApplicationJson };
var EnterpriseAdminUpdateOrgNameRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateOrgNameRequest, _super);
    function EnterpriseAdminUpdateOrgNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateOrgNamePathParams)
    ], EnterpriseAdminUpdateOrgNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdateOrgNameRequestBody)
    ], EnterpriseAdminUpdateOrgNameRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdateOrgNameRequest;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateOrgNameRequest };
var EnterpriseAdminUpdateOrgNameResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateOrgNameResponse, _super);
    function EnterpriseAdminUpdateOrgNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateOrgNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdateOrgNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateOrgName202ApplicationJson)
    ], EnterpriseAdminUpdateOrgNameResponse.prototype, "enterpriseAdminUpdateOrgName202ApplicationJsonObject", void 0);
    return EnterpriseAdminUpdateOrgNameResponse;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateOrgNameResponse };
