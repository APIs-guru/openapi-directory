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
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { AppStatusEnum } from "./appstatusenum";
var DescribeAppResponse = /** @class */ (function (_super) {
    __extends(DescribeAppResponse, _super);
    function DescribeAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppArn" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "appArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppName" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "appName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AppType" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "appType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeAppResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainId" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastHealthCheckTimestamp" }),
        __metadata("design:type", Date)
    ], DescribeAppResponse.prototype, "lastHealthCheckTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUserActivityTimestamp" }),
        __metadata("design:type", Date)
    ], DescribeAppResponse.prototype, "lastUserActivityTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceSpec" }),
        __metadata("design:type", ResourceSpec)
    ], DescribeAppResponse.prototype, "resourceSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserProfileName" }),
        __metadata("design:type", String)
    ], DescribeAppResponse.prototype, "userProfileName", void 0);
    return DescribeAppResponse;
}(SpeakeasyBase));
export { DescribeAppResponse };
