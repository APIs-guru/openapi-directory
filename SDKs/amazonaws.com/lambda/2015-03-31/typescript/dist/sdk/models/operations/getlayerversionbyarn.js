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
export var GetLayerVersionByArnFindEnum;
(function (GetLayerVersionByArnFindEnum) {
    GetLayerVersionByArnFindEnum["LayerVersion"] = "LayerVersion";
})(GetLayerVersionByArnFindEnum || (GetLayerVersionByArnFindEnum = {}));
var GetLayerVersionByArnQueryParams = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnQueryParams, _super);
    function GetLayerVersionByArnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Arn" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnQueryParams.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=find" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnQueryParams.prototype, "find", void 0);
    return GetLayerVersionByArnQueryParams;
}(SpeakeasyBase));
export { GetLayerVersionByArnQueryParams };
var GetLayerVersionByArnHeaders = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnHeaders, _super);
    function GetLayerVersionByArnHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLayerVersionByArnHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetLayerVersionByArnHeaders;
}(SpeakeasyBase));
export { GetLayerVersionByArnHeaders };
var GetLayerVersionByArnRequest = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnRequest, _super);
    function GetLayerVersionByArnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetLayerVersionByArnQueryParams)
    ], GetLayerVersionByArnRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetLayerVersionByArnHeaders)
    ], GetLayerVersionByArnRequest.prototype, "headers", void 0);
    return GetLayerVersionByArnRequest;
}(SpeakeasyBase));
export { GetLayerVersionByArnRequest };
var GetLayerVersionByArnResponse = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnResponse, _super);
    function GetLayerVersionByArnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetLayerVersionByArnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetLayerVersionResponse)
    ], GetLayerVersionByArnResponse.prototype, "getLayerVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionByArnResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionByArnResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionByArnResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetLayerVersionByArnResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetLayerVersionByArnResponse.prototype, "tooManyRequestsException", void 0);
    return GetLayerVersionByArnResponse;
}(SpeakeasyBase));
export { GetLayerVersionByArnResponse };
