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
var ListAssociatedRoute53HealthChecksPathParams = /** @class */ (function (_super) {
    __extends(ListAssociatedRoute53HealthChecksPathParams, _super);
    function ListAssociatedRoute53HealthChecksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoutingControlArn" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksPathParams.prototype, "routingControlArn", void 0);
    return ListAssociatedRoute53HealthChecksPathParams;
}(SpeakeasyBase));
export { ListAssociatedRoute53HealthChecksPathParams };
var ListAssociatedRoute53HealthChecksQueryParams = /** @class */ (function (_super) {
    __extends(ListAssociatedRoute53HealthChecksQueryParams, _super);
    function ListAssociatedRoute53HealthChecksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAssociatedRoute53HealthChecksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksQueryParams.prototype, "nextToken", void 0);
    return ListAssociatedRoute53HealthChecksQueryParams;
}(SpeakeasyBase));
export { ListAssociatedRoute53HealthChecksQueryParams };
var ListAssociatedRoute53HealthChecksHeaders = /** @class */ (function (_super) {
    __extends(ListAssociatedRoute53HealthChecksHeaders, _super);
    function ListAssociatedRoute53HealthChecksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAssociatedRoute53HealthChecksHeaders;
}(SpeakeasyBase));
export { ListAssociatedRoute53HealthChecksHeaders };
var ListAssociatedRoute53HealthChecksRequest = /** @class */ (function (_super) {
    __extends(ListAssociatedRoute53HealthChecksRequest, _super);
    function ListAssociatedRoute53HealthChecksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedRoute53HealthChecksPathParams)
    ], ListAssociatedRoute53HealthChecksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedRoute53HealthChecksQueryParams)
    ], ListAssociatedRoute53HealthChecksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssociatedRoute53HealthChecksHeaders)
    ], ListAssociatedRoute53HealthChecksRequest.prototype, "headers", void 0);
    return ListAssociatedRoute53HealthChecksRequest;
}(SpeakeasyBase));
export { ListAssociatedRoute53HealthChecksRequest };
var ListAssociatedRoute53HealthChecksResponse = /** @class */ (function (_super) {
    __extends(ListAssociatedRoute53HealthChecksResponse, _super);
    function ListAssociatedRoute53HealthChecksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssociatedRoute53HealthChecksResponse)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "listAssociatedRoute53HealthChecksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssociatedRoute53HealthChecksResponse.prototype, "validationException", void 0);
    return ListAssociatedRoute53HealthChecksResponse;
}(SpeakeasyBase));
export { ListAssociatedRoute53HealthChecksResponse };
