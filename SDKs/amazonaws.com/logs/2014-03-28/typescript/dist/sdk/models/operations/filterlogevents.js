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
var FilterLogEventsQueryParams = /** @class */ (function (_super) {
    __extends(FilterLogEventsQueryParams, _super);
    function FilterLogEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], FilterLogEventsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], FilterLogEventsQueryParams.prototype, "nextToken", void 0);
    return FilterLogEventsQueryParams;
}(SpeakeasyBase));
export { FilterLogEventsQueryParams };
export var FilterLogEventsXAmzTargetEnum;
(function (FilterLogEventsXAmzTargetEnum) {
    FilterLogEventsXAmzTargetEnum["Logs20140328FilterLogEvents"] = "Logs_20140328.FilterLogEvents";
})(FilterLogEventsXAmzTargetEnum || (FilterLogEventsXAmzTargetEnum = {}));
var FilterLogEventsHeaders = /** @class */ (function (_super) {
    __extends(FilterLogEventsHeaders, _super);
    function FilterLogEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], FilterLogEventsHeaders.prototype, "xAmzTarget", void 0);
    return FilterLogEventsHeaders;
}(SpeakeasyBase));
export { FilterLogEventsHeaders };
var FilterLogEventsRequest = /** @class */ (function (_super) {
    __extends(FilterLogEventsRequest, _super);
    function FilterLogEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FilterLogEventsQueryParams)
    ], FilterLogEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FilterLogEventsHeaders)
    ], FilterLogEventsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FilterLogEventsRequest)
    ], FilterLogEventsRequest.prototype, "request", void 0);
    return FilterLogEventsRequest;
}(SpeakeasyBase));
export { FilterLogEventsRequest };
var FilterLogEventsResponse = /** @class */ (function (_super) {
    __extends(FilterLogEventsResponse, _super);
    function FilterLogEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FilterLogEventsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FilterLogEventsResponse)
    ], FilterLogEventsResponse.prototype, "filterLogEventsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FilterLogEventsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FilterLogEventsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], FilterLogEventsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FilterLogEventsResponse.prototype, "statusCode", void 0);
    return FilterLogEventsResponse;
}(SpeakeasyBase));
export { FilterLogEventsResponse };
