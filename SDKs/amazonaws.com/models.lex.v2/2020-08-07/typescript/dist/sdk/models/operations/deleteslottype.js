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
var DeleteSlotTypePathParams = /** @class */ (function (_super) {
    __extends(DeleteSlotTypePathParams, _super);
    function DeleteSlotTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], DeleteSlotTypePathParams.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], DeleteSlotTypePathParams.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], DeleteSlotTypePathParams.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotTypeId" }),
        __metadata("design:type", String)
    ], DeleteSlotTypePathParams.prototype, "slotTypeId", void 0);
    return DeleteSlotTypePathParams;
}(SpeakeasyBase));
export { DeleteSlotTypePathParams };
var DeleteSlotTypeQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeQueryParams, _super);
    function DeleteSlotTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipResourceInUseCheck" }),
        __metadata("design:type", Boolean)
    ], DeleteSlotTypeQueryParams.prototype, "skipResourceInUseCheck", void 0);
    return DeleteSlotTypeQueryParams;
}(SpeakeasyBase));
export { DeleteSlotTypeQueryParams };
var DeleteSlotTypeHeaders = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeHeaders, _super);
    function DeleteSlotTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSlotTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteSlotTypeHeaders;
}(SpeakeasyBase));
export { DeleteSlotTypeHeaders };
var DeleteSlotTypeRequest = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeRequest, _super);
    function DeleteSlotTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSlotTypePathParams)
    ], DeleteSlotTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSlotTypeQueryParams)
    ], DeleteSlotTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSlotTypeHeaders)
    ], DeleteSlotTypeRequest.prototype, "headers", void 0);
    return DeleteSlotTypeRequest;
}(SpeakeasyBase));
export { DeleteSlotTypeRequest };
var DeleteSlotTypeResponse = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeResponse, _super);
    function DeleteSlotTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSlotTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSlotTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSlotTypeResponse.prototype, "validationException", void 0);
    return DeleteSlotTypeResponse;
}(SpeakeasyBase));
export { DeleteSlotTypeResponse };
