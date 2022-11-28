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
var UpdateMonitorPathParams = /** @class */ (function (_super) {
    __extends(UpdateMonitorPathParams, _super);
    function UpdateMonitorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" }),
        __metadata("design:type", String)
    ], UpdateMonitorPathParams.prototype, "monitorUid", void 0);
    return UpdateMonitorPathParams;
}(SpeakeasyBase));
export { UpdateMonitorPathParams };
var UpdateMonitorRequestBodyMonitorSchedule = /** @class */ (function (_super) {
    __extends(UpdateMonitorRequestBodyMonitorSchedule, _super);
    function UpdateMonitorRequestBodyMonitorSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cron" }),
        __metadata("design:type", String)
    ], UpdateMonitorRequestBodyMonitorSchedule.prototype, "cron", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateMonitorRequestBodyMonitorSchedule.prototype, "timezone", void 0);
    return UpdateMonitorRequestBodyMonitorSchedule;
}(SpeakeasyBase));
export { UpdateMonitorRequestBodyMonitorSchedule };
var UpdateMonitorRequestBodyMonitor = /** @class */ (function (_super) {
    __extends(UpdateMonitorRequestBodyMonitor, _super);
    function UpdateMonitorRequestBodyMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMonitorRequestBodyMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", UpdateMonitorRequestBodyMonitorSchedule)
    ], UpdateMonitorRequestBodyMonitor.prototype, "schedule", void 0);
    return UpdateMonitorRequestBodyMonitor;
}(SpeakeasyBase));
export { UpdateMonitorRequestBodyMonitor };
var UpdateMonitorRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMonitorRequestBody, _super);
    function UpdateMonitorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", UpdateMonitorRequestBodyMonitor)
    ], UpdateMonitorRequestBody.prototype, "monitor", void 0);
    return UpdateMonitorRequestBody;
}(SpeakeasyBase));
export { UpdateMonitorRequestBody };
var UpdateMonitor200ApplicationJsonMonitor = /** @class */ (function (_super) {
    __extends(UpdateMonitor200ApplicationJsonMonitor, _super);
    function UpdateMonitor200ApplicationJsonMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateMonitor200ApplicationJsonMonitor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateMonitor200ApplicationJsonMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateMonitor200ApplicationJsonMonitor.prototype, "uid", void 0);
    return UpdateMonitor200ApplicationJsonMonitor;
}(SpeakeasyBase));
export { UpdateMonitor200ApplicationJsonMonitor };
var UpdateMonitor200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateMonitor200ApplicationJson, _super);
    function UpdateMonitor200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", UpdateMonitor200ApplicationJsonMonitor)
    ], UpdateMonitor200ApplicationJson.prototype, "monitor", void 0);
    return UpdateMonitor200ApplicationJson;
}(SpeakeasyBase));
export { UpdateMonitor200ApplicationJson };
var UpdateMonitorRequest = /** @class */ (function (_super) {
    __extends(UpdateMonitorRequest, _super);
    function UpdateMonitorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMonitorPathParams)
    ], UpdateMonitorRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMonitorRequestBody)
    ], UpdateMonitorRequest.prototype, "request", void 0);
    return UpdateMonitorRequest;
}(SpeakeasyBase));
export { UpdateMonitorRequest };
var UpdateMonitorResponse = /** @class */ (function (_super) {
    __extends(UpdateMonitorResponse, _super);
    function UpdateMonitorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMonitorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMonitorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMonitor200ApplicationJson)
    ], UpdateMonitorResponse.prototype, "updateMonitor200ApplicationJsonObject", void 0);
    return UpdateMonitorResponse;
}(SpeakeasyBase));
export { UpdateMonitorResponse };
