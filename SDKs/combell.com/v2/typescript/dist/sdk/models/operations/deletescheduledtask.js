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
var DeleteScheduledTaskPathParams = /** @class */ (function (_super) {
    __extends(DeleteScheduledTaskPathParams, _super);
    function DeleteScheduledTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], DeleteScheduledTaskPathParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledTaskId" }),
        __metadata("design:type", String)
    ], DeleteScheduledTaskPathParams.prototype, "scheduledTaskId", void 0);
    return DeleteScheduledTaskPathParams;
}(SpeakeasyBase));
export { DeleteScheduledTaskPathParams };
var DeleteScheduledTaskQueryParams = /** @class */ (function (_super) {
    __extends(DeleteScheduledTaskQueryParams, _super);
    function DeleteScheduledTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], DeleteScheduledTaskQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scheduled_task_id" }),
        __metadata("design:type", String)
    ], DeleteScheduledTaskQueryParams.prototype, "scheduledTaskId", void 0);
    return DeleteScheduledTaskQueryParams;
}(SpeakeasyBase));
export { DeleteScheduledTaskQueryParams };
var DeleteScheduledTaskRequest = /** @class */ (function (_super) {
    __extends(DeleteScheduledTaskRequest, _super);
    function DeleteScheduledTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteScheduledTaskPathParams)
    ], DeleteScheduledTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteScheduledTaskQueryParams)
    ], DeleteScheduledTaskRequest.prototype, "queryParams", void 0);
    return DeleteScheduledTaskRequest;
}(SpeakeasyBase));
export { DeleteScheduledTaskRequest };
var DeleteScheduledTaskResponse = /** @class */ (function (_super) {
    __extends(DeleteScheduledTaskResponse, _super);
    function DeleteScheduledTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteScheduledTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteScheduledTaskResponse.prototype, "statusCode", void 0);
    return DeleteScheduledTaskResponse;
}(SpeakeasyBase));
export { DeleteScheduledTaskResponse };
