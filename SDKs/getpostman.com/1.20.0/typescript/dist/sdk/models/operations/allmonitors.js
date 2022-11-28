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
var AllMonitors200ApplicationJsonMonitors = /** @class */ (function (_super) {
    __extends(AllMonitors200ApplicationJsonMonitors, _super);
    function AllMonitors200ApplicationJsonMonitors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AllMonitors200ApplicationJsonMonitors.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AllMonitors200ApplicationJsonMonitors.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], AllMonitors200ApplicationJsonMonitors.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], AllMonitors200ApplicationJsonMonitors.prototype, "uid", void 0);
    return AllMonitors200ApplicationJsonMonitors;
}(SpeakeasyBase));
export { AllMonitors200ApplicationJsonMonitors };
var AllMonitors200ApplicationJson = /** @class */ (function (_super) {
    __extends(AllMonitors200ApplicationJson, _super);
    function AllMonitors200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitors", elemType: AllMonitors200ApplicationJsonMonitors }),
        __metadata("design:type", Array)
    ], AllMonitors200ApplicationJson.prototype, "monitors", void 0);
    return AllMonitors200ApplicationJson;
}(SpeakeasyBase));
export { AllMonitors200ApplicationJson };
var AllMonitorsResponse = /** @class */ (function (_super) {
    __extends(AllMonitorsResponse, _super);
    function AllMonitorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllMonitorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllMonitorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllMonitors200ApplicationJson)
    ], AllMonitorsResponse.prototype, "allMonitors200ApplicationJsonObject", void 0);
    return AllMonitorsResponse;
}(SpeakeasyBase));
export { AllMonitorsResponse };
