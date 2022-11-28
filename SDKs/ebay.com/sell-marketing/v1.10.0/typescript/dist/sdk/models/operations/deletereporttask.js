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
var DeleteReportTaskPathParams = /** @class */ (function (_super) {
    __extends(DeleteReportTaskPathParams, _super);
    function DeleteReportTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_task_id" }),
        __metadata("design:type", String)
    ], DeleteReportTaskPathParams.prototype, "reportTaskId", void 0);
    return DeleteReportTaskPathParams;
}(SpeakeasyBase));
export { DeleteReportTaskPathParams };
var DeleteReportTaskSecurity = /** @class */ (function (_super) {
    __extends(DeleteReportTaskSecurity, _super);
    function DeleteReportTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], DeleteReportTaskSecurity.prototype, "apiAuth", void 0);
    return DeleteReportTaskSecurity;
}(SpeakeasyBase));
export { DeleteReportTaskSecurity };
var DeleteReportTaskRequest = /** @class */ (function (_super) {
    __extends(DeleteReportTaskRequest, _super);
    function DeleteReportTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportTaskPathParams)
    ], DeleteReportTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteReportTaskSecurity)
    ], DeleteReportTaskRequest.prototype, "security", void 0);
    return DeleteReportTaskRequest;
}(SpeakeasyBase));
export { DeleteReportTaskRequest };
var DeleteReportTaskResponse = /** @class */ (function (_super) {
    __extends(DeleteReportTaskResponse, _super);
    function DeleteReportTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteReportTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteReportTaskResponse.prototype, "statusCode", void 0);
    return DeleteReportTaskResponse;
}(SpeakeasyBase));
export { DeleteReportTaskResponse };
