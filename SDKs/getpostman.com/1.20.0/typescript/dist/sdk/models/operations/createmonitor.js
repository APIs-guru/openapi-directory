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
var CreateMonitorRequestBodyMonitorSchedule = /** @class */ (function (_super) {
    __extends(CreateMonitorRequestBodyMonitorSchedule, _super);
    function CreateMonitorRequestBodyMonitorSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cron" }),
        __metadata("design:type", String)
    ], CreateMonitorRequestBodyMonitorSchedule.prototype, "cron", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], CreateMonitorRequestBodyMonitorSchedule.prototype, "timezone", void 0);
    return CreateMonitorRequestBodyMonitorSchedule;
}(SpeakeasyBase));
export { CreateMonitorRequestBodyMonitorSchedule };
var CreateMonitorRequestBodyMonitor = /** @class */ (function (_super) {
    __extends(CreateMonitorRequestBodyMonitor, _super);
    function CreateMonitorRequestBodyMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], CreateMonitorRequestBodyMonitor.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], CreateMonitorRequestBodyMonitor.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateMonitorRequestBodyMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", CreateMonitorRequestBodyMonitorSchedule)
    ], CreateMonitorRequestBodyMonitor.prototype, "schedule", void 0);
    return CreateMonitorRequestBodyMonitor;
}(SpeakeasyBase));
export { CreateMonitorRequestBodyMonitor };
var CreateMonitorRequestBody = /** @class */ (function (_super) {
    __extends(CreateMonitorRequestBody, _super);
    function CreateMonitorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", CreateMonitorRequestBodyMonitor)
    ], CreateMonitorRequestBody.prototype, "monitor", void 0);
    return CreateMonitorRequestBody;
}(SpeakeasyBase));
export { CreateMonitorRequestBody };
var CreateMonitor200ApplicationJsonMonitor = /** @class */ (function (_super) {
    __extends(CreateMonitor200ApplicationJsonMonitor, _super);
    function CreateMonitor200ApplicationJsonMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateMonitor200ApplicationJsonMonitor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateMonitor200ApplicationJsonMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateMonitor200ApplicationJsonMonitor.prototype, "uid", void 0);
    return CreateMonitor200ApplicationJsonMonitor;
}(SpeakeasyBase));
export { CreateMonitor200ApplicationJsonMonitor };
var CreateMonitor200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateMonitor200ApplicationJson, _super);
    function CreateMonitor200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", CreateMonitor200ApplicationJsonMonitor)
    ], CreateMonitor200ApplicationJson.prototype, "monitor", void 0);
    return CreateMonitor200ApplicationJson;
}(SpeakeasyBase));
export { CreateMonitor200ApplicationJson };
var CreateMonitor400ApplicationJsonErrorDetails = /** @class */ (function (_super) {
    __extends(CreateMonitor400ApplicationJsonErrorDetails, _super);
    function CreateMonitor400ApplicationJsonErrorDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=param" }),
        __metadata("design:type", String)
    ], CreateMonitor400ApplicationJsonErrorDetails.prototype, "param", void 0);
    return CreateMonitor400ApplicationJsonErrorDetails;
}(SpeakeasyBase));
export { CreateMonitor400ApplicationJsonErrorDetails };
var CreateMonitor400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(CreateMonitor400ApplicationJsonError, _super);
    function CreateMonitor400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", CreateMonitor400ApplicationJsonErrorDetails)
    ], CreateMonitor400ApplicationJsonError.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateMonitor400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateMonitor400ApplicationJsonError.prototype, "name", void 0);
    return CreateMonitor400ApplicationJsonError;
}(SpeakeasyBase));
export { CreateMonitor400ApplicationJsonError };
var CreateMonitor400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateMonitor400ApplicationJson, _super);
    function CreateMonitor400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", CreateMonitor400ApplicationJsonError)
    ], CreateMonitor400ApplicationJson.prototype, "error", void 0);
    return CreateMonitor400ApplicationJson;
}(SpeakeasyBase));
export { CreateMonitor400ApplicationJson };
var CreateMonitorRequest = /** @class */ (function (_super) {
    __extends(CreateMonitorRequest, _super);
    function CreateMonitorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMonitorRequestBody)
    ], CreateMonitorRequest.prototype, "request", void 0);
    return CreateMonitorRequest;
}(SpeakeasyBase));
export { CreateMonitorRequest };
var CreateMonitorResponse = /** @class */ (function (_super) {
    __extends(CreateMonitorResponse, _super);
    function CreateMonitorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMonitorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMonitorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMonitor200ApplicationJson)
    ], CreateMonitorResponse.prototype, "createMonitor200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMonitor400ApplicationJson)
    ], CreateMonitorResponse.prototype, "createMonitor400ApplicationJsonObject", void 0);
    return CreateMonitorResponse;
}(SpeakeasyBase));
export { CreateMonitorResponse };
