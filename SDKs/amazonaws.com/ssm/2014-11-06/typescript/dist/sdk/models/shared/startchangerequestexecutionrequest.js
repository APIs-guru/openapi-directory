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
import { Runbook } from "./runbook";
import { Tag } from "./tag";
var StartChangeRequestExecutionRequest = /** @class */ (function (_super) {
    __extends(StartChangeRequestExecutionRequest, _super);
    function StartChangeRequestExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChangeDetails" }),
        __metadata("design:type", String)
    ], StartChangeRequestExecutionRequest.prototype, "changeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChangeRequestName" }),
        __metadata("design:type", String)
    ], StartChangeRequestExecutionRequest.prototype, "changeRequestName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], StartChangeRequestExecutionRequest.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], StartChangeRequestExecutionRequest.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], StartChangeRequestExecutionRequest.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], StartChangeRequestExecutionRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Runbooks", elemType: Runbook }),
        __metadata("design:type", Array)
    ], StartChangeRequestExecutionRequest.prototype, "runbooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledEndTime" }),
        __metadata("design:type", Date)
    ], StartChangeRequestExecutionRequest.prototype, "scheduledEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledTime" }),
        __metadata("design:type", Date)
    ], StartChangeRequestExecutionRequest.prototype, "scheduledTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], StartChangeRequestExecutionRequest.prototype, "tags", void 0);
    return StartChangeRequestExecutionRequest;
}(SpeakeasyBase));
export { StartChangeRequestExecutionRequest };
