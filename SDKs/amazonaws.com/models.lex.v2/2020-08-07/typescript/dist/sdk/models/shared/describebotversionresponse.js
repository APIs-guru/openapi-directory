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
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";
var DescribeBotVersionResponse = /** @class */ (function (_super) {
    __extends(DescribeBotVersionResponse, _super);
    function DescribeBotVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botName" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "botName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botStatus" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "botStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], DescribeBotVersionResponse.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataPrivacy" }),
        __metadata("design:type", DataPrivacy)
    ], DescribeBotVersionResponse.prototype, "dataPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReasons" }),
        __metadata("design:type", Array)
    ], DescribeBotVersionResponse.prototype, "failureReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" }),
        __metadata("design:type", Number)
    ], DescribeBotVersionResponse.prototype, "idleSessionTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], DescribeBotVersionResponse.prototype, "roleArn", void 0);
    return DescribeBotVersionResponse;
}(SpeakeasyBase));
export { DescribeBotVersionResponse };
