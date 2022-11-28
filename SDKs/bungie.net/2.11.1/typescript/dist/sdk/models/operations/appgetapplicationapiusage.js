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
var AppGetApplicationApiUsagePathParams = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsagePathParams, _super);
    function AppGetApplicationApiUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" }),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsagePathParams.prototype, "applicationId", void 0);
    return AppGetApplicationApiUsagePathParams;
}(SpeakeasyBase));
export { AppGetApplicationApiUsagePathParams };
var AppGetApplicationApiUsageQueryParams = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageQueryParams, _super);
    function AppGetApplicationApiUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], AppGetApplicationApiUsageQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], AppGetApplicationApiUsageQueryParams.prototype, "start", void 0);
    return AppGetApplicationApiUsageQueryParams;
}(SpeakeasyBase));
export { AppGetApplicationApiUsageQueryParams };
var AppGetApplicationApiUsageSecurity = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageSecurity, _super);
    function AppGetApplicationApiUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppGetApplicationApiUsageSecurity.prototype, "oauth2", void 0);
    return AppGetApplicationApiUsageSecurity;
}(SpeakeasyBase));
export { AppGetApplicationApiUsageSecurity };
var AppGetApplicationApiUsageRequest = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageRequest, _super);
    function AppGetApplicationApiUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppGetApplicationApiUsagePathParams)
    ], AppGetApplicationApiUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppGetApplicationApiUsageQueryParams)
    ], AppGetApplicationApiUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppGetApplicationApiUsageSecurity)
    ], AppGetApplicationApiUsageRequest.prototype, "security", void 0);
    return AppGetApplicationApiUsageRequest;
}(SpeakeasyBase));
export { AppGetApplicationApiUsageRequest };
var AppGetApplicationApiUsageResponse = /** @class */ (function (_super) {
    __extends(AppGetApplicationApiUsageResponse, _super);
    function AppGetApplicationApiUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AppGetApplicationApiUsageResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppGetApplicationApiUsageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppGetApplicationApiUsageResponse.prototype, "statusCode", void 0);
    return AppGetApplicationApiUsageResponse;
}(SpeakeasyBase));
export { AppGetApplicationApiUsageResponse };
