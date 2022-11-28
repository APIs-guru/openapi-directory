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
var ConfigureScheduledTaskPathParams = /** @class */ (function (_super) {
    __extends(ConfigureScheduledTaskPathParams, _super);
    function ConfigureScheduledTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], ConfigureScheduledTaskPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" }),
        __metadata("design:type", String)
    ], ConfigureScheduledTaskPathParams.prototype, "scheduledTaskId", void 0);
    return ConfigureScheduledTaskPathParams;
}(SpeakeasyBase));
export { ConfigureScheduledTaskPathParams };
var ConfigureScheduledTaskQueryParams = /** @class */ (function (_super) {
    __extends(ConfigureScheduledTaskQueryParams, _super);
    function ConfigureScheduledTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], ConfigureScheduledTaskQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" }),
        __metadata("design:type", String)
    ], ConfigureScheduledTaskQueryParams.prototype, "scheduledTaskId", void 0);
    return ConfigureScheduledTaskQueryParams;
}(SpeakeasyBase));
export { ConfigureScheduledTaskQueryParams };
var ConfigureScheduledTaskRequest = /** @class */ (function (_super) {
    __extends(ConfigureScheduledTaskRequest, _super);
    function ConfigureScheduledTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureScheduledTaskPathParams)
    ], ConfigureScheduledTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureScheduledTaskQueryParams)
    ], ConfigureScheduledTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ScheduledTask)
    ], ConfigureScheduledTaskRequest.prototype, "request", void 0);
    return ConfigureScheduledTaskRequest;
}(SpeakeasyBase));
export { ConfigureScheduledTaskRequest };
var ConfigureScheduledTaskResponse = /** @class */ (function (_super) {
    __extends(ConfigureScheduledTaskResponse, _super);
    function ConfigureScheduledTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfigureScheduledTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfigureScheduledTaskResponse.prototype, "statusCode", void 0);
    return ConfigureScheduledTaskResponse;
}(SpeakeasyBase));
export { ConfigureScheduledTaskResponse };
