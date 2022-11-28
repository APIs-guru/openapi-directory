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
var GetMonitorRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetMonitorRelationsPathParams, _super);
    function GetMonitorRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetMonitorRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetMonitorRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetMonitorRelationsPathParams;
}(SpeakeasyBase));
export { GetMonitorRelationsPathParams };
var GetMonitorRelations200ApplicationJsonMonitor = /** @class */ (function (_super) {
    __extends(GetMonitorRelations200ApplicationJsonMonitor, _super);
    function GetMonitorRelations200ApplicationJsonMonitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetMonitorRelations200ApplicationJsonMonitor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitorId" }),
        __metadata("design:type", String)
    ], GetMonitorRelations200ApplicationJsonMonitor.prototype, "monitorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetMonitorRelations200ApplicationJsonMonitor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetMonitorRelations200ApplicationJsonMonitor.prototype, "updatedAt", void 0);
    return GetMonitorRelations200ApplicationJsonMonitor;
}(SpeakeasyBase));
export { GetMonitorRelations200ApplicationJsonMonitor };
var GetMonitorRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMonitorRelations200ApplicationJson, _super);
    function GetMonitorRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor", elemType: GetMonitorRelations200ApplicationJsonMonitor }),
        __metadata("design:type", Array)
    ], GetMonitorRelations200ApplicationJson.prototype, "monitor", void 0);
    return GetMonitorRelations200ApplicationJson;
}(SpeakeasyBase));
export { GetMonitorRelations200ApplicationJson };
var GetMonitorRelationsRequest = /** @class */ (function (_super) {
    __extends(GetMonitorRelationsRequest, _super);
    function GetMonitorRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMonitorRelationsPathParams)
    ], GetMonitorRelationsRequest.prototype, "pathParams", void 0);
    return GetMonitorRelationsRequest;
}(SpeakeasyBase));
export { GetMonitorRelationsRequest };
var GetMonitorRelationsResponse = /** @class */ (function (_super) {
    __extends(GetMonitorRelationsResponse, _super);
    function GetMonitorRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMonitorRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMonitorRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMonitorRelations200ApplicationJson)
    ], GetMonitorRelationsResponse.prototype, "getMonitorRelations200ApplicationJsonObject", void 0);
    return GetMonitorRelationsResponse;
}(SpeakeasyBase));
export { GetMonitorRelationsResponse };
