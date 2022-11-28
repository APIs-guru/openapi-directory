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
var AddScheduledTasksPathParams = /** @class */ (function (_super) {
    __extends(AddScheduledTasksPathParams, _super);
    function AddScheduledTasksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], AddScheduledTasksPathParams.prototype, "domainName", void 0);
    return AddScheduledTasksPathParams;
}(SpeakeasyBase));
export { AddScheduledTasksPathParams };
var AddScheduledTasksQueryParams = /** @class */ (function (_super) {
    __extends(AddScheduledTasksQueryParams, _super);
    function AddScheduledTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], AddScheduledTasksQueryParams.prototype, "domainName", void 0);
    return AddScheduledTasksQueryParams;
}(SpeakeasyBase));
export { AddScheduledTasksQueryParams };
var AddScheduledTasksRequest = /** @class */ (function (_super) {
    __extends(AddScheduledTasksRequest, _super);
    function AddScheduledTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddScheduledTasksPathParams)
    ], AddScheduledTasksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddScheduledTasksQueryParams)
    ], AddScheduledTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScheduledTask)
    ], AddScheduledTasksRequest.prototype, "request", void 0);
    return AddScheduledTasksRequest;
}(SpeakeasyBase));
export { AddScheduledTasksRequest };
var AddScheduledTasksResponse = /** @class */ (function (_super) {
    __extends(AddScheduledTasksResponse, _super);
    function AddScheduledTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddScheduledTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddScheduledTasksResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddScheduledTasksResponse.prototype, "statusCode", void 0);
    return AddScheduledTasksResponse;
}(SpeakeasyBase));
export { AddScheduledTasksResponse };
