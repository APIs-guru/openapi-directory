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
var ListResourceDataSyncQueryParams = /** @class */ (function (_super) {
    __extends(ListResourceDataSyncQueryParams, _super);
    function ListResourceDataSyncQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncQueryParams.prototype, "nextToken", void 0);
    return ListResourceDataSyncQueryParams;
}(SpeakeasyBase));
export { ListResourceDataSyncQueryParams };
export var ListResourceDataSyncXAmzTargetEnum;
(function (ListResourceDataSyncXAmzTargetEnum) {
    ListResourceDataSyncXAmzTargetEnum["AmazonSsmListResourceDataSync"] = "AmazonSSM.ListResourceDataSync";
})(ListResourceDataSyncXAmzTargetEnum || (ListResourceDataSyncXAmzTargetEnum = {}));
var ListResourceDataSyncHeaders = /** @class */ (function (_super) {
    __extends(ListResourceDataSyncHeaders, _super);
    function ListResourceDataSyncHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListResourceDataSyncHeaders.prototype, "xAmzTarget", void 0);
    return ListResourceDataSyncHeaders;
}(SpeakeasyBase));
export { ListResourceDataSyncHeaders };
var ListResourceDataSyncRequest = /** @class */ (function (_super) {
    __extends(ListResourceDataSyncRequest, _super);
    function ListResourceDataSyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListResourceDataSyncQueryParams)
    ], ListResourceDataSyncRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListResourceDataSyncHeaders)
    ], ListResourceDataSyncRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListResourceDataSyncRequest)
    ], ListResourceDataSyncRequest.prototype, "request", void 0);
    return ListResourceDataSyncRequest;
}(SpeakeasyBase));
export { ListResourceDataSyncRequest };
var ListResourceDataSyncResponse = /** @class */ (function (_super) {
    __extends(ListResourceDataSyncResponse, _super);
    function ListResourceDataSyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListResourceDataSyncResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListResourceDataSyncResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListResourceDataSyncResponse.prototype, "invalidNextToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResourceDataSyncResult)
    ], ListResourceDataSyncResponse.prototype, "listResourceDataSyncResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListResourceDataSyncResponse.prototype, "resourceDataSyncInvalidConfigurationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListResourceDataSyncResponse.prototype, "statusCode", void 0);
    return ListResourceDataSyncResponse;
}(SpeakeasyBase));
export { ListResourceDataSyncResponse };
