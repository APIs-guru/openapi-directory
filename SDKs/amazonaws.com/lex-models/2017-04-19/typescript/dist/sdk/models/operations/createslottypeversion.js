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
var CreateSlotTypeVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionPathParams, _super);
    function CreateSlotTypeVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionPathParams.prototype, "name", void 0);
    return CreateSlotTypeVersionPathParams;
}(SpeakeasyBase));
export { CreateSlotTypeVersionPathParams };
var CreateSlotTypeVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionHeaders, _super);
    function CreateSlotTypeVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSlotTypeVersionHeaders;
}(SpeakeasyBase));
export { CreateSlotTypeVersionHeaders };
var CreateSlotTypeVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionRequestBody, _super);
    function CreateSlotTypeVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionRequestBody.prototype, "checksum", void 0);
    return CreateSlotTypeVersionRequestBody;
}(SpeakeasyBase));
export { CreateSlotTypeVersionRequestBody };
var CreateSlotTypeVersionRequest = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionRequest, _super);
    function CreateSlotTypeVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotTypeVersionPathParams)
    ], CreateSlotTypeVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSlotTypeVersionHeaders)
    ], CreateSlotTypeVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSlotTypeVersionRequestBody)
    ], CreateSlotTypeVersionRequest.prototype, "request", void 0);
    return CreateSlotTypeVersionRequest;
}(SpeakeasyBase));
export { CreateSlotTypeVersionRequest };
var CreateSlotTypeVersionResponse = /** @class */ (function (_super) {
    __extends(CreateSlotTypeVersionResponse, _super);
    function CreateSlotTypeVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSlotTypeVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSlotTypeVersionResponse)
    ], CreateSlotTypeVersionResponse.prototype, "createSlotTypeVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSlotTypeVersionResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSlotTypeVersionResponse.prototype, "statusCode", void 0);
    return CreateSlotTypeVersionResponse;
}(SpeakeasyBase));
export { CreateSlotTypeVersionResponse };
