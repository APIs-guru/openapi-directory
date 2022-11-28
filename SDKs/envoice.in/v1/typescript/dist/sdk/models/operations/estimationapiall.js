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
var EstimationApiAllQueryParams = /** @class */ (function (_super) {
    __extends(EstimationApiAllQueryParams, _super);
    function EstimationApiAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" }),
        __metadata("design:type", Number)
    ], EstimationApiAllQueryParams.prototype, "queryOptionsPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" }),
        __metadata("design:type", Number)
    ], EstimationApiAllQueryParams.prototype, "queryOptionsPageSize", void 0);
    return EstimationApiAllQueryParams;
}(SpeakeasyBase));
export { EstimationApiAllQueryParams };
var EstimationApiAllHeaders = /** @class */ (function (_super) {
    __extends(EstimationApiAllHeaders, _super);
    function EstimationApiAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], EstimationApiAllHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], EstimationApiAllHeaders.prototype, "xAuthSecret", void 0);
    return EstimationApiAllHeaders;
}(SpeakeasyBase));
export { EstimationApiAllHeaders };
var EstimationApiAllRequest = /** @class */ (function (_super) {
    __extends(EstimationApiAllRequest, _super);
    function EstimationApiAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiAllQueryParams)
    ], EstimationApiAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EstimationApiAllHeaders)
    ], EstimationApiAllRequest.prototype, "headers", void 0);
    return EstimationApiAllRequest;
}(SpeakeasyBase));
export { EstimationApiAllRequest };
var EstimationApiAllResponse = /** @class */ (function (_super) {
    __extends(EstimationApiAllResponse, _super);
    function EstimationApiAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], EstimationApiAllResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EstimationApiAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResultEstimationDetailsApiModel)
    ], EstimationApiAllResponse.prototype, "listResultEstimationDetailsApiModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EstimationApiAllResponse.prototype, "statusCode", void 0);
    return EstimationApiAllResponse;
}(SpeakeasyBase));
export { EstimationApiAllResponse };
