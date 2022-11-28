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
var GetScheduledTaskPathParams = /** @class */ (function (_super) {
    __extends(GetScheduledTaskPathParams, _super);
    function GetScheduledTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], GetScheduledTaskPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" }),
        __metadata("design:type", String)
    ], GetScheduledTaskPathParams.prototype, "scheduledTaskId", void 0);
    return GetScheduledTaskPathParams;
}(SpeakeasyBase));
export { GetScheduledTaskPathParams };
var GetScheduledTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetScheduledTaskQueryParams, _super);
    function GetScheduledTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], GetScheduledTaskQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" }),
        __metadata("design:type", String)
    ], GetScheduledTaskQueryParams.prototype, "scheduledTaskId", void 0);
    return GetScheduledTaskQueryParams;
}(SpeakeasyBase));
export { GetScheduledTaskQueryParams };
var GetScheduledTaskRequest = /** @class */ (function (_super) {
    __extends(GetScheduledTaskRequest, _super);
    function GetScheduledTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScheduledTaskPathParams)
    ], GetScheduledTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetScheduledTaskQueryParams)
    ], GetScheduledTaskRequest.prototype, "queryParams", void 0);
    return GetScheduledTaskRequest;
}(SpeakeasyBase));
export { GetScheduledTaskRequest };
var GetScheduledTaskResponse = /** @class */ (function (_super) {
    __extends(GetScheduledTaskResponse, _super);
    function GetScheduledTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetScheduledTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScheduledTask)
    ], GetScheduledTaskResponse.prototype, "scheduledTask", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetScheduledTaskResponse.prototype, "statusCode", void 0);
    return GetScheduledTaskResponse;
}(SpeakeasyBase));
export { GetScheduledTaskResponse };
