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
var DisassociateAttributeGroupPathParams = /** @class */ (function (_super) {
    __extends(DisassociateAttributeGroupPathParams, _super);
    function DisassociateAttributeGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=application" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupPathParams.prototype, "application", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attributeGroup" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupPathParams.prototype, "attributeGroup", void 0);
    return DisassociateAttributeGroupPathParams;
}(SpeakeasyBase));
export { DisassociateAttributeGroupPathParams };
var DisassociateAttributeGroupHeaders = /** @class */ (function (_super) {
    __extends(DisassociateAttributeGroupHeaders, _super);
    function DisassociateAttributeGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateAttributeGroupHeaders;
}(SpeakeasyBase));
export { DisassociateAttributeGroupHeaders };
var DisassociateAttributeGroupRequest = /** @class */ (function (_super) {
    __extends(DisassociateAttributeGroupRequest, _super);
    function DisassociateAttributeGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateAttributeGroupPathParams)
    ], DisassociateAttributeGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateAttributeGroupHeaders)
    ], DisassociateAttributeGroupRequest.prototype, "headers", void 0);
    return DisassociateAttributeGroupRequest;
}(SpeakeasyBase));
export { DisassociateAttributeGroupRequest };
var DisassociateAttributeGroupResponse = /** @class */ (function (_super) {
    __extends(DisassociateAttributeGroupResponse, _super);
    function DisassociateAttributeGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateAttributeGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateAttributeGroupResponse)
    ], DisassociateAttributeGroupResponse.prototype, "disassociateAttributeGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateAttributeGroupResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateAttributeGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateAttributeGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateAttributeGroupResponse.prototype, "validationException", void 0);
    return DisassociateAttributeGroupResponse;
}(SpeakeasyBase));
export { DisassociateAttributeGroupResponse };
