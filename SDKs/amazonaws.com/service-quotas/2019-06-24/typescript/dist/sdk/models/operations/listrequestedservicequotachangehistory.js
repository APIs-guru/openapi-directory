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
var ListRequestedServiceQuotaChangeHistoryQueryParams = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryQueryParams, _super);
    function ListRequestedServiceQuotaChangeHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryQueryParams.prototype, "nextToken", void 0);
    return ListRequestedServiceQuotaChangeHistoryQueryParams;
}(SpeakeasyBase));
export { ListRequestedServiceQuotaChangeHistoryQueryParams };
export var ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
(function (ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum) {
    ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum["ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory"] = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory";
})(ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum || (ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum = {}));
var ListRequestedServiceQuotaChangeHistoryHeaders = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryHeaders, _super);
    function ListRequestedServiceQuotaChangeHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryHeaders.prototype, "xAmzTarget", void 0);
    return ListRequestedServiceQuotaChangeHistoryHeaders;
}(SpeakeasyBase));
export { ListRequestedServiceQuotaChangeHistoryHeaders };
var ListRequestedServiceQuotaChangeHistoryRequest = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryRequest, _super);
    function ListRequestedServiceQuotaChangeHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRequestedServiceQuotaChangeHistoryQueryParams)
    ], ListRequestedServiceQuotaChangeHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRequestedServiceQuotaChangeHistoryHeaders)
    ], ListRequestedServiceQuotaChangeHistoryRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListRequestedServiceQuotaChangeHistoryRequest)
    ], ListRequestedServiceQuotaChangeHistoryRequest.prototype, "request", void 0);
    return ListRequestedServiceQuotaChangeHistoryRequest;
}(SpeakeasyBase));
export { ListRequestedServiceQuotaChangeHistoryRequest };
var ListRequestedServiceQuotaChangeHistoryResponse = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryResponse, _super);
    function ListRequestedServiceQuotaChangeHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRequestedServiceQuotaChangeHistoryResponse)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "listRequestedServiceQuotaChangeHistoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "noSuchResourceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRequestedServiceQuotaChangeHistoryResponse.prototype, "tooManyRequestsException", void 0);
    return ListRequestedServiceQuotaChangeHistoryResponse;
}(SpeakeasyBase));
export { ListRequestedServiceQuotaChangeHistoryResponse };
