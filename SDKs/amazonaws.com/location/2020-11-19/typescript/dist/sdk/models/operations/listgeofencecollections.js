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
var ListGeofenceCollectionsQueryParams = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsQueryParams, _super);
    function ListGeofenceCollectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsQueryParams.prototype, "nextToken", void 0);
    return ListGeofenceCollectionsQueryParams;
}(SpeakeasyBase));
export { ListGeofenceCollectionsQueryParams };
var ListGeofenceCollectionsHeaders = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsHeaders, _super);
    function ListGeofenceCollectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListGeofenceCollectionsHeaders;
}(SpeakeasyBase));
export { ListGeofenceCollectionsHeaders };
var ListGeofenceCollectionsRequestBody = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsRequestBody, _super);
    function ListGeofenceCollectionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListGeofenceCollectionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsRequestBody.prototype, "nextToken", void 0);
    return ListGeofenceCollectionsRequestBody;
}(SpeakeasyBase));
export { ListGeofenceCollectionsRequestBody };
var ListGeofenceCollectionsRequest = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsRequest, _super);
    function ListGeofenceCollectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListGeofenceCollectionsQueryParams)
    ], ListGeofenceCollectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListGeofenceCollectionsHeaders)
    ], ListGeofenceCollectionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListGeofenceCollectionsRequestBody)
    ], ListGeofenceCollectionsRequest.prototype, "request", void 0);
    return ListGeofenceCollectionsRequest;
}(SpeakeasyBase));
export { ListGeofenceCollectionsRequest };
var ListGeofenceCollectionsResponse = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsResponse, _super);
    function ListGeofenceCollectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGeofenceCollectionsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListGeofenceCollectionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGeofenceCollectionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListGeofenceCollectionsResponse)
    ], ListGeofenceCollectionsResponse.prototype, "listGeofenceCollectionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListGeofenceCollectionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGeofenceCollectionsResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGeofenceCollectionsResponse.prototype, "validationException", void 0);
    return ListGeofenceCollectionsResponse;
}(SpeakeasyBase));
export { ListGeofenceCollectionsResponse };
