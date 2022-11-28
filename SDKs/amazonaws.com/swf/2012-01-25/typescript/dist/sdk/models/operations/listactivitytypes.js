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
var ListActivityTypesQueryParams = /** @class */ (function (_super) {
    __extends(ListActivityTypesQueryParams, _super);
    function ListActivityTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" }),
        __metadata("design:type", String)
    ], ListActivityTypesQueryParams.prototype, "maximumPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListActivityTypesQueryParams.prototype, "nextPageToken", void 0);
    return ListActivityTypesQueryParams;
}(SpeakeasyBase));
export { ListActivityTypesQueryParams };
export var ListActivityTypesXAmzTargetEnum;
(function (ListActivityTypesXAmzTargetEnum) {
    ListActivityTypesXAmzTargetEnum["SimpleWorkflowServiceListActivityTypes"] = "SimpleWorkflowService.ListActivityTypes";
})(ListActivityTypesXAmzTargetEnum || (ListActivityTypesXAmzTargetEnum = {}));
var ListActivityTypesHeaders = /** @class */ (function (_super) {
    __extends(ListActivityTypesHeaders, _super);
    function ListActivityTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListActivityTypesHeaders.prototype, "xAmzTarget", void 0);
    return ListActivityTypesHeaders;
}(SpeakeasyBase));
export { ListActivityTypesHeaders };
var ListActivityTypesRequest = /** @class */ (function (_super) {
    __extends(ListActivityTypesRequest, _super);
    function ListActivityTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListActivityTypesQueryParams)
    ], ListActivityTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListActivityTypesHeaders)
    ], ListActivityTypesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListActivityTypesInput)
    ], ListActivityTypesRequest.prototype, "request", void 0);
    return ListActivityTypesRequest;
}(SpeakeasyBase));
export { ListActivityTypesRequest };
var ListActivityTypesResponse = /** @class */ (function (_super) {
    __extends(ListActivityTypesResponse, _super);
    function ListActivityTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ActivityTypeInfos)
    ], ListActivityTypesResponse.prototype, "activityTypeInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListActivityTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActivityTypesResponse.prototype, "operationNotPermittedFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListActivityTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListActivityTypesResponse.prototype, "unknownResourceFault", void 0);
    return ListActivityTypesResponse;
}(SpeakeasyBase));
export { ListActivityTypesResponse };
