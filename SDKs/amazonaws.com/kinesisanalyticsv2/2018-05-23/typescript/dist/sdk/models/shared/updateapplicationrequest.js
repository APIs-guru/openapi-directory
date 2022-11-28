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
import { ApplicationConfigurationUpdate } from "./applicationconfigurationupdate";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { RunConfigurationUpdate } from "./runconfigurationupdate";
var UpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationRequest, _super);
    function UpdateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationConfigurationUpdate" }),
        __metadata("design:type", ApplicationConfigurationUpdate)
    ], UpdateApplicationRequest.prototype, "applicationConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationName" }),
        __metadata("design:type", String)
    ], UpdateApplicationRequest.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionUpdates", elemType: CloudWatchLoggingOptionUpdate }),
        __metadata("design:type", Array)
    ], UpdateApplicationRequest.prototype, "cloudWatchLoggingOptionUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConditionalToken" }),
        __metadata("design:type", String)
    ], UpdateApplicationRequest.prototype, "conditionalToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" }),
        __metadata("design:type", Number)
    ], UpdateApplicationRequest.prototype, "currentApplicationVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunConfigurationUpdate" }),
        __metadata("design:type", RunConfigurationUpdate)
    ], UpdateApplicationRequest.prototype, "runConfigurationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceExecutionRoleUpdate" }),
        __metadata("design:type", String)
    ], UpdateApplicationRequest.prototype, "serviceExecutionRoleUpdate", void 0);
    return UpdateApplicationRequest;
}(SpeakeasyBase));
export { UpdateApplicationRequest };
