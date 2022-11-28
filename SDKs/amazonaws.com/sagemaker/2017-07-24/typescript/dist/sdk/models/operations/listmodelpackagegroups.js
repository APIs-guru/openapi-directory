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
var ListModelPackageGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListModelPackageGroupsQueryParams, _super);
    function ListModelPackageGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsQueryParams.prototype, "nextToken", void 0);
    return ListModelPackageGroupsQueryParams;
}(SpeakeasyBase));
export { ListModelPackageGroupsQueryParams };
export var ListModelPackageGroupsXAmzTargetEnum;
(function (ListModelPackageGroupsXAmzTargetEnum) {
    ListModelPackageGroupsXAmzTargetEnum["SageMakerListModelPackageGroups"] = "SageMaker.ListModelPackageGroups";
})(ListModelPackageGroupsXAmzTargetEnum || (ListModelPackageGroupsXAmzTargetEnum = {}));
var ListModelPackageGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListModelPackageGroupsHeaders, _super);
    function ListModelPackageGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListModelPackageGroupsHeaders.prototype, "xAmzTarget", void 0);
    return ListModelPackageGroupsHeaders;
}(SpeakeasyBase));
export { ListModelPackageGroupsHeaders };
var ListModelPackageGroupsRequest = /** @class */ (function (_super) {
    __extends(ListModelPackageGroupsRequest, _super);
    function ListModelPackageGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListModelPackageGroupsQueryParams)
    ], ListModelPackageGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListModelPackageGroupsHeaders)
    ], ListModelPackageGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListModelPackageGroupsInput)
    ], ListModelPackageGroupsRequest.prototype, "request", void 0);
    return ListModelPackageGroupsRequest;
}(SpeakeasyBase));
export { ListModelPackageGroupsRequest };
var ListModelPackageGroupsResponse = /** @class */ (function (_super) {
    __extends(ListModelPackageGroupsResponse, _super);
    function ListModelPackageGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListModelPackageGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListModelPackageGroupsOutput)
    ], ListModelPackageGroupsResponse.prototype, "listModelPackageGroupsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListModelPackageGroupsResponse.prototype, "statusCode", void 0);
    return ListModelPackageGroupsResponse;
}(SpeakeasyBase));
export { ListModelPackageGroupsResponse };
