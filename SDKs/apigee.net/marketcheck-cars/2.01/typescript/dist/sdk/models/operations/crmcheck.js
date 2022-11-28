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
var CrmCheckPathParams = /** @class */ (function (_super) {
    __extends(CrmCheckPathParams, _super);
    function CrmCheckPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" }),
        __metadata("design:type", String)
    ], CrmCheckPathParams.prototype, "vin", void 0);
    return CrmCheckPathParams;
}(SpeakeasyBase));
export { CrmCheckPathParams };
var CrmCheckQueryParams = /** @class */ (function (_super) {
    __extends(CrmCheckQueryParams, _super);
    function CrmCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], CrmCheckQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sale_date" }),
        __metadata("design:type", String)
    ], CrmCheckQueryParams.prototype, "saleDate", void 0);
    return CrmCheckQueryParams;
}(SpeakeasyBase));
export { CrmCheckQueryParams };
var CrmCheckRequest = /** @class */ (function (_super) {
    __extends(CrmCheckRequest, _super);
    function CrmCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CrmCheckPathParams)
    ], CrmCheckRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CrmCheckQueryParams)
    ], CrmCheckRequest.prototype, "queryParams", void 0);
    return CrmCheckRequest;
}(SpeakeasyBase));
export { CrmCheckRequest };
var CrmCheckResponse = /** @class */ (function (_super) {
    __extends(CrmCheckResponse, _super);
    function CrmCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CrmResponse)
    ], CrmCheckResponse.prototype, "crmResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CrmCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CrmCheckResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CrmCheckResponse.prototype, "statusCode", void 0);
    return CrmCheckResponse;
}(SpeakeasyBase));
export { CrmCheckResponse };
