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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var DistrictStatusStateEnum;
(function (DistrictStatusStateEnum) {
    DistrictStatusStateEnum["Running"] = "running";
    DistrictStatusStateEnum["Pending"] = "pending";
    DistrictStatusStateEnum["Error"] = "error";
    DistrictStatusStateEnum["Paused"] = "paused";
})(DistrictStatusStateEnum || (DistrictStatusStateEnum = {}));
var DistrictStatus = /** @class */ (function (_super) {
    __extends(DistrictStatus, _super);
    function DistrictStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=instant_login" }),
        __metadata("design:type", Boolean)
    ], DistrictStatus.prototype, "instantLogin", void 0);
    __decorate([
        Metadata({ data: "json, name=last_sync" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "lastSync", void 0);
    __decorate([
        Metadata({ data: "json, name=launch_date" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "launchDate", void 0);
    __decorate([
        Metadata({ data: "json, name=pause_end" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "pauseEnd", void 0);
    __decorate([
        Metadata({ data: "json, name=pause_start" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "pauseStart", void 0);
    __decorate([
        Metadata({ data: "json, name=sis_type" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "sisType", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DistrictStatus.prototype, "state", void 0);
    return DistrictStatus;
}(SpeakeasyBase));
export { DistrictStatus };
