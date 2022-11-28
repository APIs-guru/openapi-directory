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
var ListHiTsForQualificationTypeQueryParams = /** @class */ (function (_super) {
    __extends(ListHiTsForQualificationTypeQueryParams, _super);
    function ListHiTsForQualificationTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeQueryParams.prototype, "nextToken", void 0);
    return ListHiTsForQualificationTypeQueryParams;
}(SpeakeasyBase));
export { ListHiTsForQualificationTypeQueryParams };
export var ListHiTsForQualificationTypeXAmzTargetEnum;
(function (ListHiTsForQualificationTypeXAmzTargetEnum) {
    ListHiTsForQualificationTypeXAmzTargetEnum["MTurkRequesterServiceV20170117ListHiTsForQualificationType"] = "MTurkRequesterServiceV20170117.ListHITsForQualificationType";
})(ListHiTsForQualificationTypeXAmzTargetEnum || (ListHiTsForQualificationTypeXAmzTargetEnum = {}));
var ListHiTsForQualificationTypeHeaders = /** @class */ (function (_super) {
    __extends(ListHiTsForQualificationTypeHeaders, _super);
    function ListHiTsForQualificationTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeHeaders.prototype, "xAmzTarget", void 0);
    return ListHiTsForQualificationTypeHeaders;
}(SpeakeasyBase));
export { ListHiTsForQualificationTypeHeaders };
var ListHiTsForQualificationTypeRequest = /** @class */ (function (_super) {
    __extends(ListHiTsForQualificationTypeRequest, _super);
    function ListHiTsForQualificationTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHiTsForQualificationTypeQueryParams)
    ], ListHiTsForQualificationTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListHiTsForQualificationTypeHeaders)
    ], ListHiTsForQualificationTypeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListHiTsForQualificationTypeRequest)
    ], ListHiTsForQualificationTypeRequest.prototype, "request", void 0);
    return ListHiTsForQualificationTypeRequest;
}(SpeakeasyBase));
export { ListHiTsForQualificationTypeRequest };
var ListHiTsForQualificationTypeResponse = /** @class */ (function (_super) {
    __extends(ListHiTsForQualificationTypeResponse, _super);
    function ListHiTsForQualificationTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListHiTsForQualificationTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListHiTsForQualificationTypeResponse)
    ], ListHiTsForQualificationTypeResponse.prototype, "listHiTsForQualificationTypeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHiTsForQualificationTypeResponse.prototype, "requestError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListHiTsForQualificationTypeResponse.prototype, "serviceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListHiTsForQualificationTypeResponse.prototype, "statusCode", void 0);
    return ListHiTsForQualificationTypeResponse;
}(SpeakeasyBase));
export { ListHiTsForQualificationTypeResponse };
