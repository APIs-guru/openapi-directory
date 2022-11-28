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
var ListAssignmentsForHitQueryParams = /** @class */ (function (_super) {
    __extends(ListAssignmentsForHitQueryParams, _super);
    function ListAssignmentsForHitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitQueryParams.prototype, "nextToken", void 0);
    return ListAssignmentsForHitQueryParams;
}(SpeakeasyBase));
export { ListAssignmentsForHitQueryParams };
export var ListAssignmentsForHitxAmzTargetEnum;
(function (ListAssignmentsForHitxAmzTargetEnum) {
    ListAssignmentsForHitxAmzTargetEnum["MTurkRequesterServiceV20170117ListAssignmentsForHit"] = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT";
})(ListAssignmentsForHitxAmzTargetEnum || (ListAssignmentsForHitxAmzTargetEnum = {}));
var ListAssignmentsForHitHeaders = /** @class */ (function (_super) {
    __extends(ListAssignmentsForHitHeaders, _super);
    function ListAssignmentsForHitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListAssignmentsForHitHeaders.prototype, "xAmzTarget", void 0);
    return ListAssignmentsForHitHeaders;
}(SpeakeasyBase));
export { ListAssignmentsForHitHeaders };
var ListAssignmentsForHitRequest = /** @class */ (function (_super) {
    __extends(ListAssignmentsForHitRequest, _super);
    function ListAssignmentsForHitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssignmentsForHitQueryParams)
    ], ListAssignmentsForHitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAssignmentsForHitHeaders)
    ], ListAssignmentsForHitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListAssignmentsForHitRequest)
    ], ListAssignmentsForHitRequest.prototype, "request", void 0);
    return ListAssignmentsForHitRequest;
}(SpeakeasyBase));
export { ListAssignmentsForHitRequest };
var ListAssignmentsForHitResponse = /** @class */ (function (_super) {
    __extends(ListAssignmentsForHitResponse, _super);
    function ListAssignmentsForHitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAssignmentsForHitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAssignmentsForHitResponse)
    ], ListAssignmentsForHitResponse.prototype, "listAssignmentsForHitResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssignmentsForHitResponse.prototype, "requestError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListAssignmentsForHitResponse.prototype, "serviceFault", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAssignmentsForHitResponse.prototype, "statusCode", void 0);
    return ListAssignmentsForHitResponse;
}(SpeakeasyBase));
export { ListAssignmentsForHitResponse };
