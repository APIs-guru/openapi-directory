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
var UpdateSettingPathParams = /** @class */ (function (_super) {
    __extends(UpdateSettingPathParams, _super);
    function UpdateSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", Number)
    ], UpdateSettingPathParams.prototype, "settingId", void 0);
    return UpdateSettingPathParams;
}(SpeakeasyBase));
export { UpdateSettingPathParams };
var UpdateSettingRequests = /** @class */ (function (_super) {
    __extends(UpdateSettingRequests, _super);
    function UpdateSettingRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingRequests.prototype, "operations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingRequests.prototype, "operations1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingRequests.prototype, "operations2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingRequests.prototype, "operations3", void 0);
    return UpdateSettingRequests;
}(SpeakeasyBase));
export { UpdateSettingRequests };
var UpdateSettingRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingRequest, _super);
    function UpdateSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSettingPathParams)
    ], UpdateSettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateSettingRequests)
    ], UpdateSettingRequest.prototype, "request", void 0);
    return UpdateSettingRequest;
}(SpeakeasyBase));
export { UpdateSettingRequest };
var UpdateSettingResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingResponse, _super);
    function UpdateSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateSettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SettingModel)
    ], UpdateSettingResponse.prototype, "settingModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SettingModelHaljson)
    ], UpdateSettingResponse.prototype, "settingModelHaljson", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateSettingResponse.prototype, "statusCode", void 0);
    return UpdateSettingResponse;
}(SpeakeasyBase));
export { UpdateSettingResponse };
