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
import { CodeScanningAlertLocation } from "./codescanningalertlocation";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
var CodeScanningAlertInstanceMessage = /** @class */ (function (_super) {
    __extends(CodeScanningAlertInstanceMessage, _super);
    function CodeScanningAlertInstanceMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstanceMessage.prototype, "text", void 0);
    return CodeScanningAlertInstanceMessage;
}(SpeakeasyBase));
export { CodeScanningAlertInstanceMessage };
var CodeScanningAlertInstance = /** @class */ (function (_super) {
    __extends(CodeScanningAlertInstance, _super);
    function CodeScanningAlertInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysis_key" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "analysisKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifications" }),
        __metadata("design:type", Array)
    ], CodeScanningAlertInstance.prototype, "classifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_sha" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", CodeScanningAlertLocation)
    ], CodeScanningAlertInstance.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", CodeScanningAlertInstanceMessage)
    ], CodeScanningAlertInstance.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CodeScanningAlertInstance.prototype, "state", void 0);
    return CodeScanningAlertInstance;
}(SpeakeasyBase));
export { CodeScanningAlertInstance };
