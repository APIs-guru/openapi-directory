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
var ListWorkersWithQualificationTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListWorkersWithQualificationTypeQueryParams, _super);
    function ListWorkersWithQualificationTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeQueryParams.prototype, "nextToken", void 0);
    return ListWorkersWithQualificationTypeQueryParams;
}(SpeakeasyBase));
export { ListWorkersWithQualificationTypeQueryParams };
export var ListWorkersWithQualificationTypeXAmzTargetEnum;
(function (ListWorkersWithQualificationTypeXAmzTargetEnum) {
    ListWorkersWithQualificationTypeXAmzTargetEnum["MTurkRequesterServiceV20170117ListWorkersWithQualificationType"] = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType";
})(ListWorkersWithQualificationTypeXAmzTargetEnum || (ListWorkersWithQualificationTypeXAmzTargetEnum = {}));
var ListWorkersWithQualificationTypeHeaders = /** @class */ (function (_super) {
    __extends(ListWorkersWithQualificationTypeHeaders, _super);
    function ListWorkersWithQualificationTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeHeaders.prototype, "xAmzTarget", void 0);
    return ListWorkersWithQualificationTypeHeaders;
}(SpeakeasyBase));
export { ListWorkersWithQualificationTypeHeaders };
var ListWorkersWithQualificationTypeRequest = /** @class */ (function (_super) {
    __extends(ListWorkersWithQualificationTypeRequest, _super);
    function ListWorkersWithQualificationTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkersWithQualificationTypeQueryParams)
    ], ListWorkersWithQualificationTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListWorkersWithQualificationTypeHeaders)
    ], ListWorkersWithQualificationTypeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListWorkersWithQualificationTypeRequest)
    ], ListWorkersWithQualificationTypeRequest.prototype, "request", void 0);
    return ListWorkersWithQualificationTypeRequest;
}(SpeakeasyBase));
export { ListWorkersWithQualificationTypeRequest };
var ListWorkersWithQualificationTypeResponse = /** @class */ (function (_super) {
    __extends(ListWorkersWithQualificationTypeResponse, _super);
    function ListWorkersWithQualificationTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListWorkersWithQualificationTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListWorkersWithQualificationTypeResponse)
    ], ListWorkersWithQualificationTypeResponse.prototype, "listWorkersWithQualificationTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListWorkersWithQualificationTypeResponse.prototype, "requestError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListWorkersWithQualificationTypeResponse.prototype, "serviceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListWorkersWithQualificationTypeResponse.prototype, "statusCode", void 0);
    return ListWorkersWithQualificationTypeResponse;
}(SpeakeasyBase));
export { ListWorkersWithQualificationTypeResponse };
