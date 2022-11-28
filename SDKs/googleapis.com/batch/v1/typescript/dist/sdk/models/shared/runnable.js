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
import { Barrier } from "./barrier";
import { Container } from "./container";
import { Environment } from "./environment";
import { Script } from "./script";
// Runnable
/**
 * Runnable describes instructions for executing a specific script or container as part of a Task.
**/
var Runnable = /** @class */ (function (_super) {
    __extends(Runnable, _super);
    function Runnable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysRun" }),
        __metadata("design:type", Boolean)
    ], Runnable.prototype, "alwaysRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=background" }),
        __metadata("design:type", Boolean)
    ], Runnable.prototype, "background", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barrier" }),
        __metadata("design:type", Barrier)
    ], Runnable.prototype, "barrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", Container)
    ], Runnable.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Environment)
    ], Runnable.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreExitStatus" }),
        __metadata("design:type", Boolean)
    ], Runnable.prototype, "ignoreExitStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", Script)
    ], Runnable.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], Runnable.prototype, "timeout", void 0);
    return Runnable;
}(SpeakeasyBase));
export { Runnable };
