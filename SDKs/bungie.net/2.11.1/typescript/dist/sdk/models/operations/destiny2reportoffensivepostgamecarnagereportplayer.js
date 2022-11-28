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
import * as shared from "../shared";
var Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams = /** @class */ (function (_super) {
    __extends(Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams, _super);
    function Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" }),
        __metadata("design:type", Number)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams.prototype, "activityId", void 0);
    return Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams;
}(SpeakeasyBase));
export { Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams };
var Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity = /** @class */ (function (_super) {
    __extends(Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity, _super);
    function Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity.prototype, "oauth2", void 0);
    return Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;
}(SpeakeasyBase));
export { Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity };
var Destiny2ReportOffensivePostGameCarnageReportPlayerRequest = /** @class */ (function (_super) {
    __extends(Destiny2ReportOffensivePostGameCarnageReportPlayerRequest, _super);
    function Destiny2ReportOffensivePostGameCarnageReportPlayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerRequest.prototype, "security", void 0);
    return Destiny2ReportOffensivePostGameCarnageReportPlayerRequest;
}(SpeakeasyBase));
export { Destiny2ReportOffensivePostGameCarnageReportPlayerRequest };
var Destiny2ReportOffensivePostGameCarnageReportPlayerResponse = /** @class */ (function (_super) {
    __extends(Destiny2ReportOffensivePostGameCarnageReportPlayerResponse, _super);
    function Destiny2ReportOffensivePostGameCarnageReportPlayerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2ReportOffensivePostGameCarnageReportPlayerResponse.prototype, "statusCode", void 0);
    return Destiny2ReportOffensivePostGameCarnageReportPlayerResponse;
}(SpeakeasyBase));
export { Destiny2ReportOffensivePostGameCarnageReportPlayerResponse };
