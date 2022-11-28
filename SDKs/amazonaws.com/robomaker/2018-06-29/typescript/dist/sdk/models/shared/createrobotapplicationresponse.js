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
import { Environment } from "./environment";
import { RobotSoftwareSuite } from "./robotsoftwaresuite";
import { Source } from "./source";
var CreateRobotApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateRobotApplicationResponse, _super);
    function CreateRobotApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Environment)
    ], CreateRobotApplicationResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], CreateRobotApplicationResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=robotSoftwareSuite" }),
        __metadata("design:type", RobotSoftwareSuite)
    ], CreateRobotApplicationResponse.prototype, "robotSoftwareSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Source }),
        __metadata("design:type", Array)
    ], CreateRobotApplicationResponse.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateRobotApplicationResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateRobotApplicationResponse.prototype, "version", void 0);
    return CreateRobotApplicationResponse;
}(SpeakeasyBase));
export { CreateRobotApplicationResponse };
