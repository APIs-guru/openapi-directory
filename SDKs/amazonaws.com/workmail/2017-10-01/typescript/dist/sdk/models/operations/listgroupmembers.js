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
var ListGroupMembersQueryParams = /** @class */ (function (_super) {
    __extends(ListGroupMembersQueryParams, _super);
    function ListGroupMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListGroupMembersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListGroupMembersQueryParams.prototype, "nextToken", void 0);
    return ListGroupMembersQueryParams;
}(SpeakeasyBase));
export { ListGroupMembersQueryParams };
export var ListGroupMembersXAmzTargetEnum;
(function (ListGroupMembersXAmzTargetEnum) {
    ListGroupMembersXAmzTargetEnum["WorkMailServiceListGroupMembers"] = "WorkMailService.ListGroupMembers";
})(ListGroupMembersXAmzTargetEnum || (ListGroupMembersXAmzTargetEnum = {}));
var ListGroupMembersHeaders = /** @class */ (function (_super) {
    __extends(ListGroupMembersHeaders, _super);
    function ListGroupMembersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListGroupMembersHeaders.prototype, "xAmzTarget", void 0);
    return ListGroupMembersHeaders;
}(SpeakeasyBase));
export { ListGroupMembersHeaders };
var ListGroupMembersRequest = /** @class */ (function (_super) {
    __extends(ListGroupMembersRequest, _super);
    function ListGroupMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListGroupMembersQueryParams)
    ], ListGroupMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListGroupMembersHeaders)
    ], ListGroupMembersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListGroupMembersRequest)
    ], ListGroupMembersRequest.prototype, "request", void 0);
    return ListGroupMembersRequest;
}(SpeakeasyBase));
export { ListGroupMembersRequest };
var ListGroupMembersResponse = /** @class */ (function (_super) {
    __extends(ListGroupMembersResponse, _super);
    function ListGroupMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListGroupMembersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupMembersResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupMembersResponse.prototype, "entityStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupMembersResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListGroupMembersResponse)
    ], ListGroupMembersResponse.prototype, "listGroupMembersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupMembersResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupMembersResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListGroupMembersResponse.prototype, "statusCode", void 0);
    return ListGroupMembersResponse;
}(SpeakeasyBase));
export { ListGroupMembersResponse };
