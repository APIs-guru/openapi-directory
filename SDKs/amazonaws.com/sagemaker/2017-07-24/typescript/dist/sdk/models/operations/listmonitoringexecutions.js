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
var ListMonitoringExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsQueryParams, _super);
    function ListMonitoringExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsQueryParams.prototype, "nextToken", void 0);
    return ListMonitoringExecutionsQueryParams;
}(SpeakeasyBase));
export { ListMonitoringExecutionsQueryParams };
export var ListMonitoringExecutionsXAmzTargetEnum;
(function (ListMonitoringExecutionsXAmzTargetEnum) {
    ListMonitoringExecutionsXAmzTargetEnum["SageMakerListMonitoringExecutions"] = "SageMaker.ListMonitoringExecutions";
})(ListMonitoringExecutionsXAmzTargetEnum || (ListMonitoringExecutionsXAmzTargetEnum = {}));
var ListMonitoringExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsHeaders, _super);
    function ListMonitoringExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return ListMonitoringExecutionsHeaders;
}(SpeakeasyBase));
export { ListMonitoringExecutionsHeaders };
var ListMonitoringExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsRequest, _super);
    function ListMonitoringExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMonitoringExecutionsQueryParams)
    ], ListMonitoringExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMonitoringExecutionsHeaders)
    ], ListMonitoringExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListMonitoringExecutionsRequest)
    ], ListMonitoringExecutionsRequest.prototype, "request", void 0);
    return ListMonitoringExecutionsRequest;
}(SpeakeasyBase));
export { ListMonitoringExecutionsRequest };
var ListMonitoringExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsResponse, _super);
    function ListMonitoringExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMonitoringExecutionsResponse)
    ], ListMonitoringExecutionsResponse.prototype, "listMonitoringExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMonitoringExecutionsResponse.prototype, "statusCode", void 0);
    return ListMonitoringExecutionsResponse;
}(SpeakeasyBase));
export { ListMonitoringExecutionsResponse };
