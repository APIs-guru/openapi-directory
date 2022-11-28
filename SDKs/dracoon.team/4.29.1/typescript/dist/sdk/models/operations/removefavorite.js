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
var RemoveFavoritePathParams = /** @class */ (function (_super) {
    __extends(RemoveFavoritePathParams, _super);
    function RemoveFavoritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", Number)
    ], RemoveFavoritePathParams.prototype, "nodeId", void 0);
    return RemoveFavoritePathParams;
}(SpeakeasyBase));
export { RemoveFavoritePathParams };
var RemoveFavoriteHeaders = /** @class */ (function (_super) {
    __extends(RemoveFavoriteHeaders, _super);
    function RemoveFavoriteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RemoveFavoriteHeaders.prototype, "xSdsAuthToken", void 0);
    return RemoveFavoriteHeaders;
}(SpeakeasyBase));
export { RemoveFavoriteHeaders };
var RemoveFavoriteRequest = /** @class */ (function (_super) {
    __extends(RemoveFavoriteRequest, _super);
    function RemoveFavoriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFavoritePathParams)
    ], RemoveFavoriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFavoriteHeaders)
    ], RemoveFavoriteRequest.prototype, "headers", void 0);
    return RemoveFavoriteRequest;
}(SpeakeasyBase));
export { RemoveFavoriteRequest };
var RemoveFavoriteResponse = /** @class */ (function (_super) {
    __extends(RemoveFavoriteResponse, _super);
    function RemoveFavoriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveFavoriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveFavoriteResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveFavoriteResponse.prototype, "statusCode", void 0);
    return RemoveFavoriteResponse;
}(SpeakeasyBase));
export { RemoveFavoriteResponse };
