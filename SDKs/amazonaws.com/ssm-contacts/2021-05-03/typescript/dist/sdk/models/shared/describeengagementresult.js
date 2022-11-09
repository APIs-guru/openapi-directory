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
var DescribeEngagementResult = /** @class */ (function (_super) {
    __extends(DescribeEngagementResult, _super);
    function DescribeEngagementResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ContactArn" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "contactArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Content" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=EngagementArn" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "engagementArn", void 0);
    __decorate([
        Metadata({ data: "json, name=IncidentId" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "incidentId", void 0);
    __decorate([
        Metadata({ data: "json, name=PublicContent" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "publicContent", void 0);
    __decorate([
        Metadata({ data: "json, name=PublicSubject" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "publicSubject", void 0);
    __decorate([
        Metadata({ data: "json, name=Sender" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "sender", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], DescribeEngagementResult.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=StopTime" }),
        __metadata("design:type", Date)
    ], DescribeEngagementResult.prototype, "stopTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], DescribeEngagementResult.prototype, "subject", void 0);
    return DescribeEngagementResult;
}(SpeakeasyBase));
export { DescribeEngagementResult };
