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
var ChecksSetSuitesPreferencesPathParams = /** @class */ (function (_super) {
    __extends(ChecksSetSuitesPreferencesPathParams, _super);
    function ChecksSetSuitesPreferencesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksSetSuitesPreferencesPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksSetSuitesPreferencesPathParams.prototype, "repo", void 0);
    return ChecksSetSuitesPreferencesPathParams;
}(SpeakeasyBase));
export { ChecksSetSuitesPreferencesPathParams };
var ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks = /** @class */ (function (_super) {
    __extends(ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks, _super);
    function ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_id" }),
        __metadata("design:type", Number)
    ], ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setting" }),
        __metadata("design:type", Boolean)
    ], ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks.prototype, "setting", void 0);
    return ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks;
}(SpeakeasyBase));
export { ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks };
var ChecksSetSuitesPreferencesRequestBody = /** @class */ (function (_super) {
    __extends(ChecksSetSuitesPreferencesRequestBody, _super);
    function ChecksSetSuitesPreferencesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_trigger_checks", elemType: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks }),
        __metadata("design:type", Array)
    ], ChecksSetSuitesPreferencesRequestBody.prototype, "autoTriggerChecks", void 0);
    return ChecksSetSuitesPreferencesRequestBody;
}(SpeakeasyBase));
export { ChecksSetSuitesPreferencesRequestBody };
var ChecksSetSuitesPreferencesRequest = /** @class */ (function (_super) {
    __extends(ChecksSetSuitesPreferencesRequest, _super);
    function ChecksSetSuitesPreferencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChecksSetSuitesPreferencesPathParams)
    ], ChecksSetSuitesPreferencesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChecksSetSuitesPreferencesRequestBody)
    ], ChecksSetSuitesPreferencesRequest.prototype, "request", void 0);
    return ChecksSetSuitesPreferencesRequest;
}(SpeakeasyBase));
export { ChecksSetSuitesPreferencesRequest };
var ChecksSetSuitesPreferencesResponse = /** @class */ (function (_super) {
    __extends(ChecksSetSuitesPreferencesResponse, _super);
    function ChecksSetSuitesPreferencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChecksSetSuitesPreferencesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChecksSetSuitesPreferencesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckSuitePreference)
    ], ChecksSetSuitesPreferencesResponse.prototype, "checkSuitePreference", void 0);
    return ChecksSetSuitesPreferencesResponse;
}(SpeakeasyBase));
export { ChecksSetSuitesPreferencesResponse };
