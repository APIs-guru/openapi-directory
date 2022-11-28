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
import { JobConfiguration } from "./jobconfiguration";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", JobConfiguration)
    ], Job.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Job.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobReference" }),
        __metadata("design:type", JobReference)
    ], Job.prototype, "jobReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Job.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Job.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", JobStatistics)
    ], Job.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", JobStatus)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], Job.prototype, "userEmail", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
