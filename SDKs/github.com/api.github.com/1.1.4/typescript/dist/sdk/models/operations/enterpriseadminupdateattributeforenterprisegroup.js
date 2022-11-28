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
var EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams.prototype, "scimGroupId", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams };
export var EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum;
(function (EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum) {
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["AddLower"] = "add";
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["AddMixed"] = "Add";
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["RemoveLower"] = "remove";
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["RemoveMixed"] = "Remove";
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["ReplaceLower"] = "replace";
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum["ReplaceMixed"] = "Replace";
})(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum || (EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = {}));
var EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations.prototype, "op", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations.prototype, "value", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations };
var EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operations", elemType: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations }),
        __metadata("design:type", Array)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody.prototype, "operations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody.prototype, "schemas", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody };
var EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest };
var EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse, _super);
    function EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimEnterpriseGroup)
    ], EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse.prototype, "scimEnterpriseGroup", void 0);
    return EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse;
}(SpeakeasyBase));
export { EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse };
