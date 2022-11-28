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
var ListLabelingJobsForWorkteamQueryParams = /** @class */ (function (_super) {
    __extends(ListLabelingJobsForWorkteamQueryParams, _super);
    function ListLabelingJobsForWorkteamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamQueryParams.prototype, "nextToken", void 0);
    return ListLabelingJobsForWorkteamQueryParams;
}(SpeakeasyBase));
export { ListLabelingJobsForWorkteamQueryParams };
export var ListLabelingJobsForWorkteamXAmzTargetEnum;
(function (ListLabelingJobsForWorkteamXAmzTargetEnum) {
    ListLabelingJobsForWorkteamXAmzTargetEnum["SageMakerListLabelingJobsForWorkteam"] = "SageMaker.ListLabelingJobsForWorkteam";
})(ListLabelingJobsForWorkteamXAmzTargetEnum || (ListLabelingJobsForWorkteamXAmzTargetEnum = {}));
var ListLabelingJobsForWorkteamHeaders = /** @class */ (function (_super) {
    __extends(ListLabelingJobsForWorkteamHeaders, _super);
    function ListLabelingJobsForWorkteamHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamHeaders.prototype, "xAmzTarget", void 0);
    return ListLabelingJobsForWorkteamHeaders;
}(SpeakeasyBase));
export { ListLabelingJobsForWorkteamHeaders };
var ListLabelingJobsForWorkteamRequest = /** @class */ (function (_super) {
    __extends(ListLabelingJobsForWorkteamRequest, _super);
    function ListLabelingJobsForWorkteamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLabelingJobsForWorkteamQueryParams)
    ], ListLabelingJobsForWorkteamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLabelingJobsForWorkteamHeaders)
    ], ListLabelingJobsForWorkteamRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListLabelingJobsForWorkteamRequest)
    ], ListLabelingJobsForWorkteamRequest.prototype, "request", void 0);
    return ListLabelingJobsForWorkteamRequest;
}(SpeakeasyBase));
export { ListLabelingJobsForWorkteamRequest };
var ListLabelingJobsForWorkteamResponse = /** @class */ (function (_super) {
    __extends(ListLabelingJobsForWorkteamResponse, _super);
    function ListLabelingJobsForWorkteamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLabelingJobsForWorkteamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLabelingJobsForWorkteamResponse)
    ], ListLabelingJobsForWorkteamResponse.prototype, "listLabelingJobsForWorkteamResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLabelingJobsForWorkteamResponse.prototype, "resourceNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLabelingJobsForWorkteamResponse.prototype, "statusCode", void 0);
    return ListLabelingJobsForWorkteamResponse;
}(SpeakeasyBase));
export { ListLabelingJobsForWorkteamResponse };
