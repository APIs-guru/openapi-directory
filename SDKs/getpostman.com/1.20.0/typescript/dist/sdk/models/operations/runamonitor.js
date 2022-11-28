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
var RunAMonitorPathParams = /** @class */ (function (_super) {
    __extends(RunAMonitorPathParams, _super);
    function RunAMonitorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" }),
        __metadata("design:type", String)
    ], RunAMonitorPathParams.prototype, "monitorUid", void 0);
    return RunAMonitorPathParams;
}(SpeakeasyBase));
export { RunAMonitorPathParams };
var RunAMonitor200ApplicationJsonRunExecutionsItem = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsItem, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsItem.prototype, "name", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsItem;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsItem };
var RunAMonitor200ApplicationJsonRunExecutionsRequestBody = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsRequestBody, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLength" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestBody.prototype, "contentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestBody.prototype, "mode", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsRequestBody;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsRequestBody };
var RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accept" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders.prototype, "accept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accept-encoding" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders.prototype, "acceptEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-length" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders.prototype, "contentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders.prototype, "contentType", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders };
var RunAMonitor200ApplicationJsonRunExecutionsRequest = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsRequest, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsRequestBody)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequest.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequest.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsRequest.prototype, "url", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsRequest;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsRequest };
var RunAMonitor200ApplicationJsonRunExecutionsResponseBody = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsResponseBody, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLength" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseBody.prototype, "contentLength", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsResponseBody;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsResponseBody };
var RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders.prototype, "connection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-encoding" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders.prototype, "contentEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer-encoding" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders.prototype, "transferEncoding", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders };
var RunAMonitor200ApplicationJsonRunExecutionsResponse = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutionsResponse, _super);
    function RunAMonitor200ApplicationJsonRunExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsResponseBody)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponse.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseSize" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponse.prototype, "responseSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseTime" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutionsResponse.prototype, "responseTime", void 0);
    return RunAMonitor200ApplicationJsonRunExecutionsResponse;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutionsResponse };
var RunAMonitor200ApplicationJsonRunExecutions = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunExecutions, _super);
    function RunAMonitor200ApplicationJsonRunExecutions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunExecutions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsItem)
    ], RunAMonitor200ApplicationJsonRunExecutions.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsRequest)
    ], RunAMonitor200ApplicationJsonRunExecutions.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunExecutionsResponse)
    ], RunAMonitor200ApplicationJsonRunExecutions.prototype, "response", void 0);
    return RunAMonitor200ApplicationJsonRunExecutions;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunExecutions };
var RunAMonitor200ApplicationJsonRunFailuresAssertion = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunFailuresAssertion, _super);
    function RunAMonitor200ApplicationJsonRunFailuresAssertion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status code is 400" }),
        __metadata("design:type", Boolean)
    ], RunAMonitor200ApplicationJsonRunFailuresAssertion.prototype, "statusCodeIs400", void 0);
    return RunAMonitor200ApplicationJsonRunFailuresAssertion;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunFailuresAssertion };
var RunAMonitor200ApplicationJsonRunFailures = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunFailures, _super);
    function RunAMonitor200ApplicationJsonRunFailures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assertion" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunFailuresAssertion)
    ], RunAMonitor200ApplicationJsonRunFailures.prototype, "assertion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionId" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunFailures.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunFailures.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunFailures.prototype, "name", void 0);
    return RunAMonitor200ApplicationJsonRunFailures;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunFailures };
var RunAMonitor200ApplicationJsonRunInfo = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunInfo, _super);
    function RunAMonitor200ApplicationJsonRunInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionUid" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "collectionUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finishedAt" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "finishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitorId" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "monitorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startedAt" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], RunAMonitor200ApplicationJsonRunInfo.prototype, "status", void 0);
    return RunAMonitor200ApplicationJsonRunInfo;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunInfo };
var RunAMonitor200ApplicationJsonRunStatsAssertions = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunStatsAssertions, _super);
    function RunAMonitor200ApplicationJsonRunStatsAssertions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunStatsAssertions.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunStatsAssertions.prototype, "total", void 0);
    return RunAMonitor200ApplicationJsonRunStatsAssertions;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunStatsAssertions };
var RunAMonitor200ApplicationJsonRunStatsRequests = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunStatsRequests, _super);
    function RunAMonitor200ApplicationJsonRunStatsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunStatsRequests.prototype, "failed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], RunAMonitor200ApplicationJsonRunStatsRequests.prototype, "total", void 0);
    return RunAMonitor200ApplicationJsonRunStatsRequests;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunStatsRequests };
var RunAMonitor200ApplicationJsonRunStats = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRunStats, _super);
    function RunAMonitor200ApplicationJsonRunStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assertions" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunStatsAssertions)
    ], RunAMonitor200ApplicationJsonRunStats.prototype, "assertions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requests" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunStatsRequests)
    ], RunAMonitor200ApplicationJsonRunStats.prototype, "requests", void 0);
    return RunAMonitor200ApplicationJsonRunStats;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRunStats };
var RunAMonitor200ApplicationJsonRun = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJsonRun, _super);
    function RunAMonitor200ApplicationJsonRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executions", elemType: RunAMonitor200ApplicationJsonRunExecutions }),
        __metadata("design:type", Array)
    ], RunAMonitor200ApplicationJsonRun.prototype, "executions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failures", elemType: RunAMonitor200ApplicationJsonRunFailures }),
        __metadata("design:type", Array)
    ], RunAMonitor200ApplicationJsonRun.prototype, "failures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunInfo)
    ], RunAMonitor200ApplicationJsonRun.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRunStats)
    ], RunAMonitor200ApplicationJsonRun.prototype, "stats", void 0);
    return RunAMonitor200ApplicationJsonRun;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJsonRun };
var RunAMonitor200ApplicationJson = /** @class */ (function (_super) {
    __extends(RunAMonitor200ApplicationJson, _super);
    function RunAMonitor200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run" }),
        __metadata("design:type", RunAMonitor200ApplicationJsonRun)
    ], RunAMonitor200ApplicationJson.prototype, "run", void 0);
    return RunAMonitor200ApplicationJson;
}(SpeakeasyBase));
export { RunAMonitor200ApplicationJson };
var RunAMonitorRequest = /** @class */ (function (_super) {
    __extends(RunAMonitorRequest, _super);
    function RunAMonitorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunAMonitorPathParams)
    ], RunAMonitorRequest.prototype, "pathParams", void 0);
    return RunAMonitorRequest;
}(SpeakeasyBase));
export { RunAMonitorRequest };
var RunAMonitorResponse = /** @class */ (function (_super) {
    __extends(RunAMonitorResponse, _super);
    function RunAMonitorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunAMonitorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunAMonitorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunAMonitor200ApplicationJson)
    ], RunAMonitorResponse.prototype, "runAMonitor200ApplicationJsonObject", void 0);
    return RunAMonitorResponse;
}(SpeakeasyBase));
export { RunAMonitorResponse };
