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
var ListOutpostsQueryParams = /** @class */ (function (_super) {
    __extends(ListOutpostsQueryParams, _super);
    function ListOutpostsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneFilter" }),
        __metadata("design:type", Array)
    ], ListOutpostsQueryParams.prototype, "availabilityZoneFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneIdFilter" }),
        __metadata("design:type", Array)
    ], ListOutpostsQueryParams.prototype, "availabilityZoneIdFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LifeCycleStatusFilter" }),
        __metadata("design:type", Array)
    ], ListOutpostsQueryParams.prototype, "lifeCycleStatusFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListOutpostsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListOutpostsQueryParams.prototype, "nextToken", void 0);
    return ListOutpostsQueryParams;
}(SpeakeasyBase));
export { ListOutpostsQueryParams };
var ListOutpostsHeaders = /** @class */ (function (_super) {
    __extends(ListOutpostsHeaders, _super);
    function ListOutpostsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOutpostsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListOutpostsHeaders;
}(SpeakeasyBase));
export { ListOutpostsHeaders };
var ListOutpostsRequest = /** @class */ (function (_super) {
    __extends(ListOutpostsRequest, _super);
    function ListOutpostsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutpostsQueryParams)
    ], ListOutpostsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutpostsHeaders)
    ], ListOutpostsRequest.prototype, "headers", void 0);
    return ListOutpostsRequest;
}(SpeakeasyBase));
export { ListOutpostsRequest };
var ListOutpostsResponse = /** @class */ (function (_super) {
    __extends(ListOutpostsResponse, _super);
    function ListOutpostsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListOutpostsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOutpostsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListOutpostsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOutpostsOutput)
    ], ListOutpostsResponse.prototype, "listOutpostsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListOutpostsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListOutpostsResponse.prototype, "validationException", void 0);
    return ListOutpostsResponse;
}(SpeakeasyBase));
export { ListOutpostsResponse };
