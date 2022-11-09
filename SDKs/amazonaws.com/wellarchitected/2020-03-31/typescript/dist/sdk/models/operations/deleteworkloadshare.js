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
var DeleteWorkloadSharePathParams = /** @class */ (function (_super) {
    __extends(DeleteWorkloadSharePathParams, _super);
    function DeleteWorkloadSharePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ShareId" }),
        __metadata("design:type", String)
    ], DeleteWorkloadSharePathParams.prototype, "shareId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], DeleteWorkloadSharePathParams.prototype, "workloadId", void 0);
    return DeleteWorkloadSharePathParams;
}(SpeakeasyBase));
export { DeleteWorkloadSharePathParams };
var DeleteWorkloadShareQueryParams = /** @class */ (function (_super) {
    __extends(DeleteWorkloadShareQueryParams, _super);
    function DeleteWorkloadShareQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareQueryParams.prototype, "clientRequestToken", void 0);
    return DeleteWorkloadShareQueryParams;
}(SpeakeasyBase));
export { DeleteWorkloadShareQueryParams };
var DeleteWorkloadShareHeaders = /** @class */ (function (_super) {
    __extends(DeleteWorkloadShareHeaders, _super);
    function DeleteWorkloadShareHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteWorkloadShareHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteWorkloadShareHeaders;
}(SpeakeasyBase));
export { DeleteWorkloadShareHeaders };
var DeleteWorkloadShareRequest = /** @class */ (function (_super) {
    __extends(DeleteWorkloadShareRequest, _super);
    function DeleteWorkloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkloadSharePathParams)
    ], DeleteWorkloadShareRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkloadShareQueryParams)
    ], DeleteWorkloadShareRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkloadShareHeaders)
    ], DeleteWorkloadShareRequest.prototype, "headers", void 0);
    return DeleteWorkloadShareRequest;
}(SpeakeasyBase));
export { DeleteWorkloadShareRequest };
var DeleteWorkloadShareResponse = /** @class */ (function (_super) {
    __extends(DeleteWorkloadShareResponse, _super);
    function DeleteWorkloadShareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkloadShareResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteWorkloadShareResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteWorkloadShareResponse.prototype, "validationException", void 0);
    return DeleteWorkloadShareResponse;
}(SpeakeasyBase));
export { DeleteWorkloadShareResponse };
