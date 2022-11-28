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
var AppPkgIdGetPathParams = /** @class */ (function (_super) {
    __extends(AppPkgIdGetPathParams, _super);
    function AppPkgIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" }),
        __metadata("design:type", String)
    ], AppPkgIdGetPathParams.prototype, "appPkgId", void 0);
    return AppPkgIdGetPathParams;
}(SpeakeasyBase));
export { AppPkgIdGetPathParams };
var AppPkgIdGetQueryParams = /** @class */ (function (_super) {
    __extends(AppPkgIdGetQueryParams, _super);
    function AppPkgIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all_fields" }),
        __metadata("design:type", String)
    ], AppPkgIdGetQueryParams.prototype, "allFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_default" }),
        __metadata("design:type", String)
    ], AppPkgIdGetQueryParams.prototype, "excludeDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_fields" }),
        __metadata("design:type", String)
    ], AppPkgIdGetQueryParams.prototype, "excludeFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppPkgIdGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AppPkgIdGetQueryParams.prototype, "filter", void 0);
    return AppPkgIdGetQueryParams;
}(SpeakeasyBase));
export { AppPkgIdGetQueryParams };
var AppPkgIdGetRequest = /** @class */ (function (_super) {
    __extends(AppPkgIdGetRequest, _super);
    function AppPkgIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppPkgIdGetPathParams)
    ], AppPkgIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppPkgIdGetQueryParams)
    ], AppPkgIdGetRequest.prototype, "queryParams", void 0);
    return AppPkgIdGetRequest;
}(SpeakeasyBase));
export { AppPkgIdGetRequest };
var AppPkgIdGetResponse = /** @class */ (function (_super) {
    __extends(AppPkgIdGetResponse, _super);
    function AppPkgIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AppPkgIdGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppPkgIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProblemDetails)
    ], AppPkgIdGetResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppPkgIdGetResponse.prototype, "statusCode", void 0);
    return AppPkgIdGetResponse;
}(SpeakeasyBase));
export { AppPkgIdGetResponse };
