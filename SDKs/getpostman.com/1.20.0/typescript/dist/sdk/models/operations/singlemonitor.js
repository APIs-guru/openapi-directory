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
var SingleMonitorPathParams = /** @class */ (function (_super) {
    __extends(SingleMonitorPathParams, _super);
    function SingleMonitorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" }),
        __metadata("design:type", String)
    ], SingleMonitorPathParams.prototype, "monitorUid", void 0);
    return SingleMonitorPathParams;
}(SpeakeasyBase));
export { SingleMonitorPathParams };
var SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions, _super);
    function SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Number)
    ], SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions.prototype, "total", void 0);
    return SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions };
var SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests, _super);
    function SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests.prototype, "total", void 0);
    return SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests };
var SingleMonitor200ApplicationJsonMonitorLastRunStats = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorLastRunStats, _super);
    function SingleMonitor200ApplicationJsonMonitorLastRunStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assertions" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions)
    ], SingleMonitor200ApplicationJsonMonitorLastRunStats.prototype, "assertions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requests" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests)
    ], SingleMonitor200ApplicationJsonMonitorLastRunStats.prototype, "requests", void 0);
    return SingleMonitor200ApplicationJsonMonitorLastRunStats;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorLastRunStats };
var SingleMonitor200ApplicationJsonMonitorLastRun = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorLastRun, _super);
    function SingleMonitor200ApplicationJsonMonitorLastRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finishedAt" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorLastRun.prototype, "finishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedAt" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorLastRun.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorLastRunStats)
    ], SingleMonitor200ApplicationJsonMonitorLastRun.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorLastRun.prototype, "status", void 0);
    return SingleMonitor200ApplicationJsonMonitorLastRun;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorLastRun };
var SingleMonitor200ApplicationJsonMonitorNotificationsOnError = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorNotificationsOnError, _super);
    function SingleMonitor200ApplicationJsonMonitorNotificationsOnError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorNotificationsOnError.prototype, "email", void 0);
    return SingleMonitor200ApplicationJsonMonitorNotificationsOnError;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorNotificationsOnError };
var SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure, _super);
    function SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure.prototype, "email", void 0);
    return SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure };
var SingleMonitor200ApplicationJsonMonitorNotifications = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorNotifications, _super);
    function SingleMonitor200ApplicationJsonMonitorNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onError", elemType: SingleMonitor200ApplicationJsonMonitorNotificationsOnError }),
        __metadata("design:type", Array)
    ], SingleMonitor200ApplicationJsonMonitorNotifications.prototype, "onError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onFailure", elemType: SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure }),
        __metadata("design:type", Array)
    ], SingleMonitor200ApplicationJsonMonitorNotifications.prototype, "onFailure", void 0);
    return SingleMonitor200ApplicationJsonMonitorNotifications;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorNotifications };
var SingleMonitor200ApplicationJsonMonitorOptions = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorOptions, _super);
    function SingleMonitor200ApplicationJsonMonitorOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followRedirects" }),
        __metadata("design:type", Boolean)
    ], SingleMonitor200ApplicationJsonMonitorOptions.prototype, "followRedirects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestDelay" }),
        __metadata("design:type", Number)
    ], SingleMonitor200ApplicationJsonMonitorOptions.prototype, "requestDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestTimeout" }),
        __metadata("design:type", Number)
    ], SingleMonitor200ApplicationJsonMonitorOptions.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strictSSL" }),
        __metadata("design:type", Boolean)
    ], SingleMonitor200ApplicationJsonMonitorOptions.prototype, "strictSsl", void 0);
    return SingleMonitor200ApplicationJsonMonitorOptions;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorOptions };
var SingleMonitor200ApplicationJsonMonitorSchedule = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitorSchedule, _super);
    function SingleMonitor200ApplicationJsonMonitorSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cron" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorSchedule.prototype, "cron", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextRun" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorSchedule.prototype, "nextRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitorSchedule.prototype, "timezone", void 0);
    return SingleMonitor200ApplicationJsonMonitorSchedule;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitorSchedule };
var SingleMonitor200ApplicationJsonMonitor = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJsonMonitor, _super);
    function SingleMonitor200ApplicationJsonMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionUid" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "collectionUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distribution" }),
        __metadata("design:type", Array)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "distribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentUid" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "environmentUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRun" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorLastRun)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "lastRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorNotifications)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorOptions)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitorSchedule)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], SingleMonitor200ApplicationJsonMonitor.prototype, "uid", void 0);
    return SingleMonitor200ApplicationJsonMonitor;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJsonMonitor };
var SingleMonitor200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleMonitor200ApplicationJson, _super);
    function SingleMonitor200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", SingleMonitor200ApplicationJsonMonitor)
    ], SingleMonitor200ApplicationJson.prototype, "monitor", void 0);
    return SingleMonitor200ApplicationJson;
}(SpeakeasyBase));
export { SingleMonitor200ApplicationJson };
var SingleMonitor404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(SingleMonitor404ApplicationJsonError, _super);
    function SingleMonitor404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SingleMonitor404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleMonitor404ApplicationJsonError.prototype, "name", void 0);
    return SingleMonitor404ApplicationJsonError;
}(SpeakeasyBase));
export { SingleMonitor404ApplicationJsonError };
var SingleMonitor404ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleMonitor404ApplicationJson, _super);
    function SingleMonitor404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", SingleMonitor404ApplicationJsonError)
    ], SingleMonitor404ApplicationJson.prototype, "error", void 0);
    return SingleMonitor404ApplicationJson;
}(SpeakeasyBase));
export { SingleMonitor404ApplicationJson };
var SingleMonitorRequest = /** @class */ (function (_super) {
    __extends(SingleMonitorRequest, _super);
    function SingleMonitorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleMonitorPathParams)
    ], SingleMonitorRequest.prototype, "pathParams", void 0);
    return SingleMonitorRequest;
}(SpeakeasyBase));
export { SingleMonitorRequest };
var SingleMonitorResponse = /** @class */ (function (_super) {
    __extends(SingleMonitorResponse, _super);
    function SingleMonitorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleMonitorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleMonitorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleMonitor200ApplicationJson)
    ], SingleMonitorResponse.prototype, "singleMonitor200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleMonitor404ApplicationJson)
    ], SingleMonitorResponse.prototype, "singleMonitor404ApplicationJsonObject", void 0);
    return SingleMonitorResponse;
}(SpeakeasyBase));
export { SingleMonitorResponse };
