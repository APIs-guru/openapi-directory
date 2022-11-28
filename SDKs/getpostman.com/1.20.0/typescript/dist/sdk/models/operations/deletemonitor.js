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
var DeleteMonitorPathParams = /** @class */ (function (_super) {
    __extends(DeleteMonitorPathParams, _super);
    function DeleteMonitorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=monitor_uid" }),
        __metadata("design:type", String)
    ], DeleteMonitorPathParams.prototype, "monitorUid", void 0);
    return DeleteMonitorPathParams;
}(SpeakeasyBase));
export { DeleteMonitorPathParams };
var DeleteMonitor200ApplicationJsonMonitor = /** @class */ (function (_super) {
    __extends(DeleteMonitor200ApplicationJsonMonitor, _super);
    function DeleteMonitor200ApplicationJsonMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteMonitor200ApplicationJsonMonitor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DeleteMonitor200ApplicationJsonMonitor.prototype, "uid", void 0);
    return DeleteMonitor200ApplicationJsonMonitor;
}(SpeakeasyBase));
export { DeleteMonitor200ApplicationJsonMonitor };
var DeleteMonitor200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteMonitor200ApplicationJson, _super);
    function DeleteMonitor200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", DeleteMonitor200ApplicationJsonMonitor)
    ], DeleteMonitor200ApplicationJson.prototype, "monitor", void 0);
    return DeleteMonitor200ApplicationJson;
}(SpeakeasyBase));
export { DeleteMonitor200ApplicationJson };
var DeleteMonitor404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(DeleteMonitor404ApplicationJsonError, _super);
    function DeleteMonitor404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteMonitor404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeleteMonitor404ApplicationJsonError.prototype, "name", void 0);
    return DeleteMonitor404ApplicationJsonError;
}(SpeakeasyBase));
export { DeleteMonitor404ApplicationJsonError };
var DeleteMonitor404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteMonitor404ApplicationJson, _super);
    function DeleteMonitor404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", DeleteMonitor404ApplicationJsonError)
    ], DeleteMonitor404ApplicationJson.prototype, "error", void 0);
    return DeleteMonitor404ApplicationJson;
}(SpeakeasyBase));
export { DeleteMonitor404ApplicationJson };
var DeleteMonitorRequest = /** @class */ (function (_super) {
    __extends(DeleteMonitorRequest, _super);
    function DeleteMonitorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMonitorPathParams)
    ], DeleteMonitorRequest.prototype, "pathParams", void 0);
    return DeleteMonitorRequest;
}(SpeakeasyBase));
export { DeleteMonitorRequest };
var DeleteMonitorResponse = /** @class */ (function (_super) {
    __extends(DeleteMonitorResponse, _super);
    function DeleteMonitorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMonitorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMonitorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMonitor200ApplicationJson)
    ], DeleteMonitorResponse.prototype, "deleteMonitor200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMonitor404ApplicationJson)
    ], DeleteMonitorResponse.prototype, "deleteMonitor404ApplicationJsonObject", void 0);
    return DeleteMonitorResponse;
}(SpeakeasyBase));
export { DeleteMonitorResponse };
