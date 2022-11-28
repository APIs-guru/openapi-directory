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
import { LifecycleEnum } from "./lifecycleenum";
import { PreviousBuild } from "./previousbuild";
var Build = /** @class */ (function (_super) {
    __extends(Build, _super);
    function Build() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], Build.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], Build.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_time_millis" }),
        __metadata("design:type", Number)
    ], Build.prototype, "buildTimeMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_url" }),
        __metadata("design:type", String)
    ], Build.prototype, "buildUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_email" }),
        __metadata("design:type", String)
    ], Build.prototype, "committerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_name" }),
        __metadata("design:type", String)
    ], Build.prototype, "committerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dont_build" }),
        __metadata("design:type", String)
    ], Build.prototype, "dontBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", String)
    ], Build.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", PreviousBuild)
    ], Build.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queued_at" }),
        __metadata("design:type", Date)
    ], Build.prototype, "queuedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reponame" }),
        __metadata("design:type", String)
    ], Build.prototype, "reponame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retry_of" }),
        __metadata("design:type", Number)
    ], Build.prototype, "retryOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], Build.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stop_time" }),
        __metadata("design:type", Date)
    ], Build.prototype, "stopTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], Build.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Build.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs_url" }),
        __metadata("design:type", String)
    ], Build.prototype, "vcsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=why" }),
        __metadata("design:type", String)
    ], Build.prototype, "why", void 0);
    return Build;
}(SpeakeasyBase));
export { Build };
