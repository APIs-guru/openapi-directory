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
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";
var StreamingSession = /** @class */ (function (_super) {
    __extends(StreamingSession, _super);
    function StreamingSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], StreamingSession.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceType" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "ec2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileId" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownedBy" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "ownedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingImageId" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "streamingImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StreamingSession.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminateAt" }),
        __metadata("design:type", Date)
    ], StreamingSession.prototype, "terminateAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], StreamingSession.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], StreamingSession.prototype, "updatedBy", void 0);
    return StreamingSession;
}(SpeakeasyBase));
export { StreamingSession };
