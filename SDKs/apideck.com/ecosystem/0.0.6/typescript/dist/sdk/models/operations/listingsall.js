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
var ListingsAllPathParams = /** @class */ (function (_super) {
    __extends(ListingsAllPathParams, _super);
    function ListingsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" }),
        __metadata("design:type", String)
    ], ListingsAllPathParams.prototype, "ecosystemId", void 0);
    return ListingsAllPathParams;
}(SpeakeasyBase));
export { ListingsAllPathParams };
var ListingsAllQueryParams = /** @class */ (function (_super) {
    __extends(ListingsAllQueryParams, _super);
    function ListingsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ListingsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_id" }),
        __metadata("design:type", String)
    ], ListingsAllQueryParams.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListingsAllQueryParams.prototype, "limit", void 0);
    return ListingsAllQueryParams;
}(SpeakeasyBase));
export { ListingsAllQueryParams };
var ListingsAllRequest = /** @class */ (function (_super) {
    __extends(ListingsAllRequest, _super);
    function ListingsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListingsAllPathParams)
    ], ListingsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListingsAllQueryParams)
    ], ListingsAllRequest.prototype, "queryParams", void 0);
    return ListingsAllRequest;
}(SpeakeasyBase));
export { ListingsAllRequest };
var ListingsAllResponse = /** @class */ (function (_super) {
    __extends(ListingsAllResponse, _super);
    function ListingsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListingsAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetListingsResponse)
    ], ListingsAllResponse.prototype, "getListingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListingsAllResponse.prototype, "statusCode", void 0);
    return ListingsAllResponse;
}(SpeakeasyBase));
export { ListingsAllResponse };
