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
import { UploadSummary } from "./uploadsummary";
// Task
/**
 * The type that defines the fields for the task details.
**/
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionDate" }),
        __metadata("design:type", String)
    ], Task.prototype, "completionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], Task.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailHref" }),
        __metadata("design:type", String)
    ], Task.prototype, "detailHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedType" }),
        __metadata("design:type", String)
    ], Task.prototype, "feedType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], Task.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Task.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], Task.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadSummary" }),
        __metadata("design:type", UploadSummary)
    ], Task.prototype, "uploadSummary", void 0);
    return Task;
}(SpeakeasyBase));
export { Task };
