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
var ListRuleGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListRuleGroupsQueryParams, _super);
    function ListRuleGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListRuleGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListRuleGroupsQueryParams.prototype, "nextToken", void 0);
    return ListRuleGroupsQueryParams;
}(SpeakeasyBase));
export { ListRuleGroupsQueryParams };
export var ListRuleGroupsXAmzTargetEnum;
(function (ListRuleGroupsXAmzTargetEnum) {
    ListRuleGroupsXAmzTargetEnum["NetworkFirewall20201112ListRuleGroups"] = "NetworkFirewall_20201112.ListRuleGroups";
})(ListRuleGroupsXAmzTargetEnum || (ListRuleGroupsXAmzTargetEnum = {}));
var ListRuleGroupsHeaders = /** @class */ (function (_super) {
    __extends(ListRuleGroupsHeaders, _super);
    function ListRuleGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListRuleGroupsHeaders.prototype, "xAmzTarget", void 0);
    return ListRuleGroupsHeaders;
}(SpeakeasyBase));
export { ListRuleGroupsHeaders };
var ListRuleGroupsRequest = /** @class */ (function (_super) {
    __extends(ListRuleGroupsRequest, _super);
    function ListRuleGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRuleGroupsQueryParams)
    ], ListRuleGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRuleGroupsHeaders)
    ], ListRuleGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListRuleGroupsRequest)
    ], ListRuleGroupsRequest.prototype, "request", void 0);
    return ListRuleGroupsRequest;
}(SpeakeasyBase));
export { ListRuleGroupsRequest };
var ListRuleGroupsResponse = /** @class */ (function (_super) {
    __extends(ListRuleGroupsResponse, _super);
    function ListRuleGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRuleGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRuleGroupsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRuleGroupsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRuleGroupsResponse)
    ], ListRuleGroupsResponse.prototype, "listRuleGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRuleGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListRuleGroupsResponse.prototype, "throttlingException", void 0);
    return ListRuleGroupsResponse;
}(SpeakeasyBase));
export { ListRuleGroupsResponse };
