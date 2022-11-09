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
import * as shared from "../shared";
var ReplaceSettingValuePathParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValuePathParams, _super);
    function ReplaceSettingValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], ReplaceSettingValuePathParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", Number)
    ], ReplaceSettingValuePathParams.prototype, "settingId", void 0);
    return ReplaceSettingValuePathParams;
}(SpeakeasyBase));
export { ReplaceSettingValuePathParams };
var ReplaceSettingValueQueryParams = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueQueryParams, _super);
    function ReplaceSettingValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], ReplaceSettingValueQueryParams.prototype, "reason", void 0);
    return ReplaceSettingValueQueryParams;
}(SpeakeasyBase));
export { ReplaceSettingValueQueryParams };
var ReplaceSettingValueRequests = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueRequests, _super);
    function ReplaceSettingValueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSettingValueModel)
    ], ReplaceSettingValueRequests.prototype, "updateSettingValueModel2", void 0);
    return ReplaceSettingValueRequests;
}(SpeakeasyBase));
export { ReplaceSettingValueRequests };
var ReplaceSettingValueRequest = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueRequest, _super);
    function ReplaceSettingValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ReplaceSettingValuePathParams)
    ], ReplaceSettingValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReplaceSettingValueQueryParams)
    ], ReplaceSettingValueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReplaceSettingValueRequests)
    ], ReplaceSettingValueRequest.prototype, "request", void 0);
    return ReplaceSettingValueRequest;
}(SpeakeasyBase));
export { ReplaceSettingValueRequest };
var ReplaceSettingValueResponse = /** @class */ (function (_super) {
    __extends(ReplaceSettingValueResponse, _super);
    function ReplaceSettingValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReplaceSettingValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModel)
    ], ReplaceSettingValueResponse.prototype, "settingValueModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], ReplaceSettingValueResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReplaceSettingValueResponse.prototype, "statusCode", void 0);
    return ReplaceSettingValueResponse;
}(SpeakeasyBase));
export { ReplaceSettingValueResponse };
