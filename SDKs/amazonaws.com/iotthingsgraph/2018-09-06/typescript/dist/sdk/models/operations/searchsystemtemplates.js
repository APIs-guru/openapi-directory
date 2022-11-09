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
var SearchSystemTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(SearchSystemTemplatesQueryParams, _super);
    function SearchSystemTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesQueryParams.prototype, "nextToken", void 0);
    return SearchSystemTemplatesQueryParams;
}(SpeakeasyBase));
export { SearchSystemTemplatesQueryParams };
export var SearchSystemTemplatesXAmzTargetEnum;
(function (SearchSystemTemplatesXAmzTargetEnum) {
    SearchSystemTemplatesXAmzTargetEnum["IotThingsGraphFrontEndServiceSearchSystemTemplates"] = "IotThingsGraphFrontEndService.SearchSystemTemplates";
})(SearchSystemTemplatesXAmzTargetEnum || (SearchSystemTemplatesXAmzTargetEnum = {}));
var SearchSystemTemplatesHeaders = /** @class */ (function (_super) {
    __extends(SearchSystemTemplatesHeaders, _super);
    function SearchSystemTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], SearchSystemTemplatesHeaders.prototype, "xAmzTarget", void 0);
    return SearchSystemTemplatesHeaders;
}(SpeakeasyBase));
export { SearchSystemTemplatesHeaders };
var SearchSystemTemplatesRequest = /** @class */ (function (_super) {
    __extends(SearchSystemTemplatesRequest, _super);
    function SearchSystemTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchSystemTemplatesQueryParams)
    ], SearchSystemTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SearchSystemTemplatesHeaders)
    ], SearchSystemTemplatesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchSystemTemplatesRequest)
    ], SearchSystemTemplatesRequest.prototype, "request", void 0);
    return SearchSystemTemplatesRequest;
}(SpeakeasyBase));
export { SearchSystemTemplatesRequest };
var SearchSystemTemplatesResponse = /** @class */ (function (_super) {
    __extends(SearchSystemTemplatesResponse, _super);
    function SearchSystemTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchSystemTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchSystemTemplatesResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchSystemTemplatesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchSystemTemplatesResponse)
    ], SearchSystemTemplatesResponse.prototype, "searchSystemTemplatesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchSystemTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], SearchSystemTemplatesResponse.prototype, "throttlingException", void 0);
    return SearchSystemTemplatesResponse;
}(SpeakeasyBase));
export { SearchSystemTemplatesResponse };
