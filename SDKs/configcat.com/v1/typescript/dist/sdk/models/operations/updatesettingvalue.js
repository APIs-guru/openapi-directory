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
var UpdateSettingValuePathParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValuePathParams, _super);
    function UpdateSettingValuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], UpdateSettingValuePathParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", Number)
    ], UpdateSettingValuePathParams.prototype, "settingId", void 0);
    return UpdateSettingValuePathParams;
}(SpeakeasyBase));
export { UpdateSettingValuePathParams };
var UpdateSettingValueQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSettingValueQueryParams, _super);
    function UpdateSettingValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=reason" }),
        __metadata("design:type", String)
    ], UpdateSettingValueQueryParams.prototype, "reason", void 0);
    return UpdateSettingValueQueryParams;
}(SpeakeasyBase));
export { UpdateSettingValueQueryParams };
var UpdateSettingValueRequests = /** @class */ (function (_super) {
    __extends(UpdateSettingValueRequests, _super);
    function UpdateSettingValueRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueRequests.prototype, "operations", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueRequests.prototype, "operations1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueRequests.prototype, "operations2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json", elemType: shared.Operation }),
        __metadata("design:type", Array)
    ], UpdateSettingValueRequests.prototype, "operations3", void 0);
    return UpdateSettingValueRequests;
}(SpeakeasyBase));
export { UpdateSettingValueRequests };
var UpdateSettingValueRequest = /** @class */ (function (_super) {
    __extends(UpdateSettingValueRequest, _super);
    function UpdateSettingValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValuePathParams)
    ], UpdateSettingValueRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueQueryParams)
    ], UpdateSettingValueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSettingValueRequests)
    ], UpdateSettingValueRequest.prototype, "request", void 0);
    return UpdateSettingValueRequest;
}(SpeakeasyBase));
export { UpdateSettingValueRequest };
var UpdateSettingValueResponse = /** @class */ (function (_super) {
    __extends(UpdateSettingValueResponse, _super);
    function UpdateSettingValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSettingValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModel)
    ], UpdateSettingValueResponse.prototype, "settingValueModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SettingValueModelHaljson)
    ], UpdateSettingValueResponse.prototype, "settingValueModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSettingValueResponse.prototype, "statusCode", void 0);
    return UpdateSettingValueResponse;
}(SpeakeasyBase));
export { UpdateSettingValueResponse };
