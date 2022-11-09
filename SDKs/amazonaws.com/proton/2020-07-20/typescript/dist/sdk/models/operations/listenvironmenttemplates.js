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
var ListEnvironmentTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplatesQueryParams, _super);
    function ListEnvironmentTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesQueryParams.prototype, "nextToken", void 0);
    return ListEnvironmentTemplatesQueryParams;
}(SpeakeasyBase));
export { ListEnvironmentTemplatesQueryParams };
export var ListEnvironmentTemplatesXAmzTargetEnum;
(function (ListEnvironmentTemplatesXAmzTargetEnum) {
    ListEnvironmentTemplatesXAmzTargetEnum["AwsProton20200720ListEnvironmentTemplates"] = "AwsProton20200720.ListEnvironmentTemplates";
})(ListEnvironmentTemplatesXAmzTargetEnum || (ListEnvironmentTemplatesXAmzTargetEnum = {}));
var ListEnvironmentTemplatesHeaders = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplatesHeaders, _super);
    function ListEnvironmentTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesHeaders.prototype, "xAmzTarget", void 0);
    return ListEnvironmentTemplatesHeaders;
}(SpeakeasyBase));
export { ListEnvironmentTemplatesHeaders };
var ListEnvironmentTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplatesRequest, _super);
    function ListEnvironmentTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEnvironmentTemplatesQueryParams)
    ], ListEnvironmentTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEnvironmentTemplatesHeaders)
    ], ListEnvironmentTemplatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListEnvironmentTemplatesInput)
    ], ListEnvironmentTemplatesRequest.prototype, "request", void 0);
    return ListEnvironmentTemplatesRequest;
}(SpeakeasyBase));
export { ListEnvironmentTemplatesRequest };
var ListEnvironmentTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListEnvironmentTemplatesResponse, _super);
    function ListEnvironmentTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplatesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEnvironmentTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplatesResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEnvironmentTemplatesOutput)
    ], ListEnvironmentTemplatesResponse.prototype, "listEnvironmentTemplatesOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEnvironmentTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplatesResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEnvironmentTemplatesResponse.prototype, "validationException", void 0);
    return ListEnvironmentTemplatesResponse;
}(SpeakeasyBase));
export { ListEnvironmentTemplatesResponse };
