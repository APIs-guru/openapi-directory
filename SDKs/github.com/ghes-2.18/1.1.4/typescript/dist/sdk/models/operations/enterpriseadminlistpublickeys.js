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
export var EnterpriseAdminListPublicKeysSortEnum;
(function (EnterpriseAdminListPublicKeysSortEnum) {
    EnterpriseAdminListPublicKeysSortEnum["Created"] = "created";
    EnterpriseAdminListPublicKeysSortEnum["Updated"] = "updated";
    EnterpriseAdminListPublicKeysSortEnum["Accessed"] = "accessed";
})(EnterpriseAdminListPublicKeysSortEnum || (EnterpriseAdminListPublicKeysSortEnum = {}));
var EnterpriseAdminListPublicKeysQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPublicKeysQueryParams, _super);
    function EnterpriseAdminListPublicKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPublicKeysQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPublicKeysQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPublicKeysQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPublicKeysQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListPublicKeysQueryParams.prototype, "sort", void 0);
    return EnterpriseAdminListPublicKeysQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListPublicKeysQueryParams };
var EnterpriseAdminListPublicKeysRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPublicKeysRequest, _super);
    function EnterpriseAdminListPublicKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListPublicKeysQueryParams)
    ], EnterpriseAdminListPublicKeysRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListPublicKeysRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListPublicKeysRequest };
var EnterpriseAdminListPublicKeysResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListPublicKeysResponse, _super);
    function EnterpriseAdminListPublicKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListPublicKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], EnterpriseAdminListPublicKeysResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListPublicKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EnterprisePublicKey }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListPublicKeysResponse.prototype, "enterprisePublicKeys", void 0);
    return EnterpriseAdminListPublicKeysResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListPublicKeysResponse };
