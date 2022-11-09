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
var ListEnvironmentTemplateVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplateVersionsQueryParams, _super);
    function ListEnvironmentTemplateVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsQueryParams.prototype, "nextToken", void 0);
    return ListEnvironmentTemplateVersionsQueryParams;
}(SpeakeasyBase));
export { ListEnvironmentTemplateVersionsQueryParams };
export var ListEnvironmentTemplateVersionsXAmzTargetEnum;
(function (ListEnvironmentTemplateVersionsXAmzTargetEnum) {
    ListEnvironmentTemplateVersionsXAmzTargetEnum["AwsProton20200720ListEnvironmentTemplateVersions"] = "AwsProton20200720.ListEnvironmentTemplateVersions";
})(ListEnvironmentTemplateVersionsXAmzTargetEnum || (ListEnvironmentTemplateVersionsXAmzTargetEnum = {}));
var ListEnvironmentTemplateVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplateVersionsHeaders, _super);
    function ListEnvironmentTemplateVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsHeaders.prototype, "xAmzTarget", void 0);
    return ListEnvironmentTemplateVersionsHeaders;
}(SpeakeasyBase));
export { ListEnvironmentTemplateVersionsHeaders };
var ListEnvironmentTemplateVersionsRequest = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplateVersionsRequest, _super);
    function ListEnvironmentTemplateVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEnvironmentTemplateVersionsQueryParams)
    ], ListEnvironmentTemplateVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEnvironmentTemplateVersionsHeaders)
    ], ListEnvironmentTemplateVersionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListEnvironmentTemplateVersionsInput)
    ], ListEnvironmentTemplateVersionsRequest.prototype, "request", void 0);
    return ListEnvironmentTemplateVersionsRequest;
}(SpeakeasyBase));
export { ListEnvironmentTemplateVersionsRequest };
var ListEnvironmentTemplateVersionsResponse = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplateVersionsResponse, _super);
    function ListEnvironmentTemplateVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEnvironmentTemplateVersionsOutput)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "listEnvironmentTemplateVersionsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplateVersionsResponse.prototype, "validationException", void 0);
    return ListEnvironmentTemplateVersionsResponse;
}(SpeakeasyBase));
export { ListEnvironmentTemplateVersionsResponse };
