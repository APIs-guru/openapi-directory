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
var ListOrganizationalUnitsForParentQueryParams = /** @class */ (function (_super) {
    __extends(ListOrganizationalUnitsForParentQueryParams, _super);
    function ListOrganizationalUnitsForParentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentQueryParams.prototype, "nextToken", void 0);
    return ListOrganizationalUnitsForParentQueryParams;
}(SpeakeasyBase));
export { ListOrganizationalUnitsForParentQueryParams };
export var ListOrganizationalUnitsForParentXAmzTargetEnum;
(function (ListOrganizationalUnitsForParentXAmzTargetEnum) {
    ListOrganizationalUnitsForParentXAmzTargetEnum["AwsOrganizationsV20161128ListOrganizationalUnitsForParent"] = "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent";
})(ListOrganizationalUnitsForParentXAmzTargetEnum || (ListOrganizationalUnitsForParentXAmzTargetEnum = {}));
var ListOrganizationalUnitsForParentHeaders = /** @class */ (function (_super) {
    __extends(ListOrganizationalUnitsForParentHeaders, _super);
    function ListOrganizationalUnitsForParentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentHeaders.prototype, "xAmzTarget", void 0);
    return ListOrganizationalUnitsForParentHeaders;
}(SpeakeasyBase));
export { ListOrganizationalUnitsForParentHeaders };
var ListOrganizationalUnitsForParentRequest = /** @class */ (function (_super) {
    __extends(ListOrganizationalUnitsForParentRequest, _super);
    function ListOrganizationalUnitsForParentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOrganizationalUnitsForParentQueryParams)
    ], ListOrganizationalUnitsForParentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListOrganizationalUnitsForParentHeaders)
    ], ListOrganizationalUnitsForParentRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOrganizationalUnitsForParentRequest)
    ], ListOrganizationalUnitsForParentRequest.prototype, "request", void 0);
    return ListOrganizationalUnitsForParentRequest;
}(SpeakeasyBase));
export { ListOrganizationalUnitsForParentRequest };
var ListOrganizationalUnitsForParentResponse = /** @class */ (function (_super) {
    __extends(ListOrganizationalUnitsForParentResponse, _super);
    function ListOrganizationalUnitsForParentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "awsOrganizationsNotInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListOrganizationalUnitsForParentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOrganizationalUnitsForParentResponse)
    ], ListOrganizationalUnitsForParentResponse.prototype, "listOrganizationalUnitsForParentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "parentNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListOrganizationalUnitsForParentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListOrganizationalUnitsForParentResponse.prototype, "tooManyRequestsException", void 0);
    return ListOrganizationalUnitsForParentResponse;
}(SpeakeasyBase));
export { ListOrganizationalUnitsForParentResponse };
