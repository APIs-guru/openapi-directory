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
var GetDealerRvIdPathParams = /** @class */ (function (_super) {
    __extends(GetDealerRvIdPathParams, _super);
    function GetDealerRvIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetDealerRvIdPathParams.prototype, "id", void 0);
    return GetDealerRvIdPathParams;
}(SpeakeasyBase));
export { GetDealerRvIdPathParams };
var GetDealerRvIdQueryParams = /** @class */ (function (_super) {
    __extends(GetDealerRvIdQueryParams, _super);
    function GetDealerRvIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetDealerRvIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" }),
        __metadata("design:type", Boolean)
    ], GetDealerRvIdQueryParams.prototype, "provider", void 0);
    return GetDealerRvIdQueryParams;
}(SpeakeasyBase));
export { GetDealerRvIdQueryParams };
var GetDealerRvIdRequest = /** @class */ (function (_super) {
    __extends(GetDealerRvIdRequest, _super);
    function GetDealerRvIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealerRvIdPathParams)
    ], GetDealerRvIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDealerRvIdQueryParams)
    ], GetDealerRvIdRequest.prototype, "queryParams", void 0);
    return GetDealerRvIdRequest;
}(SpeakeasyBase));
export { GetDealerRvIdRequest };
var GetDealerRvIdResponse = /** @class */ (function (_super) {
    __extends(GetDealerRvIdResponse, _super);
    function GetDealerRvIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDealerRvIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dealer)
    ], GetDealerRvIdResponse.prototype, "dealer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetDealerRvIdResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDealerRvIdResponse.prototype, "statusCode", void 0);
    return GetDealerRvIdResponse;
}(SpeakeasyBase));
export { GetDealerRvIdResponse };
