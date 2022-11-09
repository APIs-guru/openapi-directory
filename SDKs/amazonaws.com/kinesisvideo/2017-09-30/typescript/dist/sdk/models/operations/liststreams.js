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
var ListStreamsQueryParams = /** @class */ (function (_super) {
    __extends(ListStreamsQueryParams, _super);
    function ListStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListStreamsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListStreamsQueryParams.prototype, "nextToken", void 0);
    return ListStreamsQueryParams;
}(SpeakeasyBase));
export { ListStreamsQueryParams };
var ListStreamsHeaders = /** @class */ (function (_super) {
    __extends(ListStreamsHeaders, _super);
    function ListStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListStreamsHeaders;
}(SpeakeasyBase));
export { ListStreamsHeaders };
// ListStreamsRequestBodyStreamNameCondition
/**
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix.
**/
var ListStreamsRequestBodyStreamNameCondition = /** @class */ (function (_super) {
    __extends(ListStreamsRequestBodyStreamNameCondition, _super);
    function ListStreamsRequestBodyStreamNameCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], ListStreamsRequestBodyStreamNameCondition.prototype, "comparisonOperator", void 0);
    __decorate([
        Metadata({ data: "json, name=ComparisonValue" }),
        __metadata("design:type", String)
    ], ListStreamsRequestBodyStreamNameCondition.prototype, "comparisonValue", void 0);
    return ListStreamsRequestBodyStreamNameCondition;
}(SpeakeasyBase));
export { ListStreamsRequestBodyStreamNameCondition };
var ListStreamsRequestBody = /** @class */ (function (_super) {
    __extends(ListStreamsRequestBody, _super);
    function ListStreamsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListStreamsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListStreamsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamNameCondition" }),
        __metadata("design:type", ListStreamsRequestBodyStreamNameCondition)
    ], ListStreamsRequestBody.prototype, "streamNameCondition", void 0);
    return ListStreamsRequestBody;
}(SpeakeasyBase));
export { ListStreamsRequestBody };
var ListStreamsRequest = /** @class */ (function (_super) {
    __extends(ListStreamsRequest, _super);
    function ListStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListStreamsQueryParams)
    ], ListStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListStreamsHeaders)
    ], ListStreamsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListStreamsRequestBody)
    ], ListStreamsRequest.prototype, "request", void 0);
    return ListStreamsRequest;
}(SpeakeasyBase));
export { ListStreamsRequest };
var ListStreamsResponse = /** @class */ (function (_super) {
    __extends(ListStreamsResponse, _super);
    function ListStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListStreamsResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListStreamsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListStreamsOutput)
    ], ListStreamsResponse.prototype, "listStreamsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListStreamsResponse.prototype, "statusCode", void 0);
    return ListStreamsResponse;
}(SpeakeasyBase));
export { ListStreamsResponse };
