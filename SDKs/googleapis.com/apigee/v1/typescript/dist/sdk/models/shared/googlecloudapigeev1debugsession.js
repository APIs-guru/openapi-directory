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
var GoogleCloudApigeeV1DebugSession = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DebugSession, _super);
    function GoogleCloudApigeeV1DebugSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSession.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSession.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSession.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSession.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSession.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracesize" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSession.prototype, "tracesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSession.prototype, "validity", void 0);
    return GoogleCloudApigeeV1DebugSession;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DebugSession };
var GoogleCloudApigeeV1DebugSessionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DebugSessionInput, _super);
    function GoogleCloudApigeeV1DebugSessionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracesize" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "tracesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity" }),
        __metadata("design:type", Number)
    ], GoogleCloudApigeeV1DebugSessionInput.prototype, "validity", void 0);
    return GoogleCloudApigeeV1DebugSessionInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DebugSessionInput };
