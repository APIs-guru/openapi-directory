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
var RequestPendingAssignmentsQueryParams = /** @class */ (function (_super) {
    __extends(RequestPendingAssignmentsQueryParams, _super);
    function RequestPendingAssignmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestPendingAssignmentsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestPendingAssignmentsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestPendingAssignmentsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], RequestPendingAssignmentsQueryParams.prototype, "sort", void 0);
    return RequestPendingAssignmentsQueryParams;
}(SpeakeasyBase));
export { RequestPendingAssignmentsQueryParams };
var RequestPendingAssignmentsHeaders = /** @class */ (function (_super) {
    __extends(RequestPendingAssignmentsHeaders, _super);
    function RequestPendingAssignmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestPendingAssignmentsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestPendingAssignmentsHeaders;
}(SpeakeasyBase));
export { RequestPendingAssignmentsHeaders };
var RequestPendingAssignmentsRequest = /** @class */ (function (_super) {
    __extends(RequestPendingAssignmentsRequest, _super);
    function RequestPendingAssignmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestPendingAssignmentsQueryParams)
    ], RequestPendingAssignmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestPendingAssignmentsHeaders)
    ], RequestPendingAssignmentsRequest.prototype, "headers", void 0);
    return RequestPendingAssignmentsRequest;
}(SpeakeasyBase));
export { RequestPendingAssignmentsRequest };
var RequestPendingAssignmentsResponse = /** @class */ (function (_super) {
    __extends(RequestPendingAssignmentsResponse, _super);
    function RequestPendingAssignmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestPendingAssignmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestPendingAssignmentsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PendingAssignmentList)
    ], RequestPendingAssignmentsResponse.prototype, "pendingAssignmentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestPendingAssignmentsResponse.prototype, "statusCode", void 0);
    return RequestPendingAssignmentsResponse;
}(SpeakeasyBase));
export { RequestPendingAssignmentsResponse };
