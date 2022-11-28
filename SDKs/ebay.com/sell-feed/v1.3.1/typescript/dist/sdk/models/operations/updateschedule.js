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
var UpdateSchedulePathParams = /** @class */ (function (_super) {
    __extends(UpdateSchedulePathParams, _super);
    function UpdateSchedulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_id" }),
        __metadata("design:type", String)
    ], UpdateSchedulePathParams.prototype, "scheduleId", void 0);
    return UpdateSchedulePathParams;
}(SpeakeasyBase));
export { UpdateSchedulePathParams };
var UpdateScheduleSecurity = /** @class */ (function (_super) {
    __extends(UpdateScheduleSecurity, _super);
    function UpdateScheduleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], UpdateScheduleSecurity.prototype, "apiAuth", void 0);
    return UpdateScheduleSecurity;
}(SpeakeasyBase));
export { UpdateScheduleSecurity };
var UpdateScheduleRequest = /** @class */ (function (_super) {
    __extends(UpdateScheduleRequest, _super);
    function UpdateScheduleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSchedulePathParams)
    ], UpdateScheduleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateUserScheduleRequest)
    ], UpdateScheduleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScheduleSecurity)
    ], UpdateScheduleRequest.prototype, "security", void 0);
    return UpdateScheduleRequest;
}(SpeakeasyBase));
export { UpdateScheduleRequest };
var UpdateScheduleResponse = /** @class */ (function (_super) {
    __extends(UpdateScheduleResponse, _super);
    function UpdateScheduleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateScheduleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateScheduleResponse.prototype, "statusCode", void 0);
    return UpdateScheduleResponse;
}(SpeakeasyBase));
export { UpdateScheduleResponse };
