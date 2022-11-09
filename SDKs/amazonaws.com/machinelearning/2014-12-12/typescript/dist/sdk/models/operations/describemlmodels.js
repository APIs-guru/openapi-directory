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
var DescribeMlModelsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeMlModelsQueryParams, _super);
    function DescribeMlModelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeMlModelsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeMlModelsQueryParams.prototype, "nextToken", void 0);
    return DescribeMlModelsQueryParams;
}(SpeakeasyBase));
export { DescribeMlModelsQueryParams };
export var DescribeMlModelsXAmzTargetEnum;
(function (DescribeMlModelsXAmzTargetEnum) {
    DescribeMlModelsXAmzTargetEnum["AmazonMl20141212DescribeMlModels"] = "AmazonML_20141212.DescribeMLModels";
})(DescribeMlModelsXAmzTargetEnum || (DescribeMlModelsXAmzTargetEnum = {}));
var DescribeMlModelsHeaders = /** @class */ (function (_super) {
    __extends(DescribeMlModelsHeaders, _super);
    function DescribeMlModelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMlModelsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMlModelsHeaders;
}(SpeakeasyBase));
export { DescribeMlModelsHeaders };
var DescribeMlModelsRequest = /** @class */ (function (_super) {
    __extends(DescribeMlModelsRequest, _super);
    function DescribeMlModelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeMlModelsQueryParams)
    ], DescribeMlModelsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeMlModelsHeaders)
    ], DescribeMlModelsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMlModelsInput)
    ], DescribeMlModelsRequest.prototype, "request", void 0);
    return DescribeMlModelsRequest;
}(SpeakeasyBase));
export { DescribeMlModelsRequest };
var DescribeMlModelsResponse = /** @class */ (function (_super) {
    __extends(DescribeMlModelsResponse, _super);
    function DescribeMlModelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeMlModelsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeMlModelsOutput)
    ], DescribeMlModelsResponse.prototype, "describeMlModelsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMlModelsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMlModelsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeMlModelsResponse.prototype, "statusCode", void 0);
    return DescribeMlModelsResponse;
}(SpeakeasyBase));
export { DescribeMlModelsResponse };
