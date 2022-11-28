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
// LogOperation
/**
 * The request as defined in OpenApi Spec.
**/
var LogOperation = /** @class */ (function (_super) {
    __extends(LogOperation, _super);
    function LogOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LogOperation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogOperation.prototype, "name", void 0);
    return LogOperation;
}(SpeakeasyBase));
export { LogOperation };
// LogService
/**
 * Apideck service provider associated with request.
**/
var LogService = /** @class */ (function (_super) {
    __extends(LogService, _super);
    function LogService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LogService.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogService.prototype, "name", void 0);
    return LogService;
}(SpeakeasyBase));
export { LogService };
export var LogUnifiedApiEnum;
(function (LogUnifiedApiEnum) {
    LogUnifiedApiEnum["Crm"] = "crm";
    LogUnifiedApiEnum["Lead"] = "lead";
    LogUnifiedApiEnum["Proxy"] = "proxy";
    LogUnifiedApiEnum["Vault"] = "vault";
    LogUnifiedApiEnum["Accounting"] = "accounting";
    LogUnifiedApiEnum["Hris"] = "hris";
    LogUnifiedApiEnum["Ats"] = "ats";
    LogUnifiedApiEnum["Pos"] = "pos";
    LogUnifiedApiEnum["FileStorage"] = "file-storage";
    LogUnifiedApiEnum["Sms"] = "sms";
})(LogUnifiedApiEnum || (LogUnifiedApiEnum = {}));
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_style" }),
        __metadata("design:type", String)
    ], Log.prototype, "apiStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base_url" }),
        __metadata("design:type", String)
    ], Log.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=child_request" }),
        __metadata("design:type", Boolean)
    ], Log.prototype, "childRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumer_id" }),
        __metadata("design:type", String)
    ], Log.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Log.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_message" }),
        __metadata("design:type", String)
    ], Log.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=execution" }),
        __metadata("design:type", Number)
    ], Log.prototype, "execution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_children" }),
        __metadata("design:type", Boolean)
    ], Log.prototype, "hasChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], Log.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Log.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latency" }),
        __metadata("design:type", Number)
    ], Log.prototype, "latency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", LogOperation)
    ], Log.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], Log.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Log.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sandbox" }),
        __metadata("design:type", Boolean)
    ], Log.prototype, "sandbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", LogService)
    ], Log.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ip" }),
        __metadata("design:type", String)
    ], Log.prototype, "sourceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], Log.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], Log.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], Log.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unified_api" }),
        __metadata("design:type", String)
    ], Log.prototype, "unifiedApi", void 0);
    return Log;
}(SpeakeasyBase));
export { Log };
