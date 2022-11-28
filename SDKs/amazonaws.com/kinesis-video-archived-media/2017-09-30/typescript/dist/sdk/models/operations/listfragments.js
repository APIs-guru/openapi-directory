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
var ListFragmentsQueryParams = /** @class */ (function (_super) {
    __extends(ListFragmentsQueryParams, _super);
    function ListFragmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListFragmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListFragmentsQueryParams.prototype, "nextToken", void 0);
    return ListFragmentsQueryParams;
}(SpeakeasyBase));
export { ListFragmentsQueryParams };
var ListFragmentsHeaders = /** @class */ (function (_super) {
    __extends(ListFragmentsHeaders, _super);
    function ListFragmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListFragmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListFragmentsHeaders;
}(SpeakeasyBase));
export { ListFragmentsHeaders };
// ListFragmentsRequestBodyFragmentSelector
/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
**/
var ListFragmentsRequestBodyFragmentSelector = /** @class */ (function (_super) {
    __extends(ListFragmentsRequestBodyFragmentSelector, _super);
    function ListFragmentsRequestBodyFragmentSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FragmentSelectorType" }),
        __metadata("design:type", String)
    ], ListFragmentsRequestBodyFragmentSelector.prototype, "fragmentSelectorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimestampRange" }),
        __metadata("design:type", shared.TimestampRange)
    ], ListFragmentsRequestBodyFragmentSelector.prototype, "timestampRange", void 0);
    return ListFragmentsRequestBodyFragmentSelector;
}(SpeakeasyBase));
export { ListFragmentsRequestBodyFragmentSelector };
var ListFragmentsRequestBody = /** @class */ (function (_super) {
    __extends(ListFragmentsRequestBody, _super);
    function ListFragmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FragmentSelector" }),
        __metadata("design:type", ListFragmentsRequestBodyFragmentSelector)
    ], ListFragmentsRequestBody.prototype, "fragmentSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListFragmentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListFragmentsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], ListFragmentsRequestBody.prototype, "streamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], ListFragmentsRequestBody.prototype, "streamName", void 0);
    return ListFragmentsRequestBody;
}(SpeakeasyBase));
export { ListFragmentsRequestBody };
var ListFragmentsRequest = /** @class */ (function (_super) {
    __extends(ListFragmentsRequest, _super);
    function ListFragmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFragmentsQueryParams)
    ], ListFragmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListFragmentsHeaders)
    ], ListFragmentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListFragmentsRequestBody)
    ], ListFragmentsRequest.prototype, "request", void 0);
    return ListFragmentsRequest;
}(SpeakeasyBase));
export { ListFragmentsRequest };
var ListFragmentsResponse = /** @class */ (function (_super) {
    __extends(ListFragmentsResponse, _super);
    function ListFragmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFragmentsResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListFragmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFragmentsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFragmentsOutput)
    ], ListFragmentsResponse.prototype, "listFragmentsOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFragmentsResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListFragmentsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListFragmentsResponse.prototype, "statusCode", void 0);
    return ListFragmentsResponse;
}(SpeakeasyBase));
export { ListFragmentsResponse };
