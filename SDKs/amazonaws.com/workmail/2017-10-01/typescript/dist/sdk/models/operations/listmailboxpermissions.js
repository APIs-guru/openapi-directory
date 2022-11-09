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
var ListMailboxPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ListMailboxPermissionsQueryParams, _super);
    function ListMailboxPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsQueryParams.prototype, "nextToken", void 0);
    return ListMailboxPermissionsQueryParams;
}(SpeakeasyBase));
export { ListMailboxPermissionsQueryParams };
export var ListMailboxPermissionsXAmzTargetEnum;
(function (ListMailboxPermissionsXAmzTargetEnum) {
    ListMailboxPermissionsXAmzTargetEnum["WorkMailServiceListMailboxPermissions"] = "WorkMailService.ListMailboxPermissions";
})(ListMailboxPermissionsXAmzTargetEnum || (ListMailboxPermissionsXAmzTargetEnum = {}));
var ListMailboxPermissionsHeaders = /** @class */ (function (_super) {
    __extends(ListMailboxPermissionsHeaders, _super);
    function ListMailboxPermissionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListMailboxPermissionsHeaders.prototype, "xAmzTarget", void 0);
    return ListMailboxPermissionsHeaders;
}(SpeakeasyBase));
export { ListMailboxPermissionsHeaders };
var ListMailboxPermissionsRequest = /** @class */ (function (_super) {
    __extends(ListMailboxPermissionsRequest, _super);
    function ListMailboxPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListMailboxPermissionsQueryParams)
    ], ListMailboxPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListMailboxPermissionsHeaders)
    ], ListMailboxPermissionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListMailboxPermissionsRequest)
    ], ListMailboxPermissionsRequest.prototype, "request", void 0);
    return ListMailboxPermissionsRequest;
}(SpeakeasyBase));
export { ListMailboxPermissionsRequest };
var ListMailboxPermissionsResponse = /** @class */ (function (_super) {
    __extends(ListMailboxPermissionsResponse, _super);
    function ListMailboxPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListMailboxPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMailboxPermissionsResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMailboxPermissionsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListMailboxPermissionsResponse)
    ], ListMailboxPermissionsResponse.prototype, "listMailboxPermissionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMailboxPermissionsResponse.prototype, "organizationNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListMailboxPermissionsResponse.prototype, "organizationStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListMailboxPermissionsResponse.prototype, "statusCode", void 0);
    return ListMailboxPermissionsResponse;
}(SpeakeasyBase));
export { ListMailboxPermissionsResponse };
