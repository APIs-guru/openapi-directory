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
var PausePromotionPathParams = /** @class */ (function (_super) {
    __extends(PausePromotionPathParams, _super);
    function PausePromotionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" }),
        __metadata("design:type", String)
    ], PausePromotionPathParams.prototype, "promotionId", void 0);
    return PausePromotionPathParams;
}(SpeakeasyBase));
export { PausePromotionPathParams };
var PausePromotionSecurity = /** @class */ (function (_super) {
    __extends(PausePromotionSecurity, _super);
    function PausePromotionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], PausePromotionSecurity.prototype, "apiAuth", void 0);
    return PausePromotionSecurity;
}(SpeakeasyBase));
export { PausePromotionSecurity };
var PausePromotionRequest = /** @class */ (function (_super) {
    __extends(PausePromotionRequest, _super);
    function PausePromotionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PausePromotionPathParams)
    ], PausePromotionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PausePromotionSecurity)
    ], PausePromotionRequest.prototype, "security", void 0);
    return PausePromotionRequest;
}(SpeakeasyBase));
export { PausePromotionRequest };
var PausePromotionResponse = /** @class */ (function (_super) {
    __extends(PausePromotionResponse, _super);
    function PausePromotionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PausePromotionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PausePromotionResponse.prototype, "statusCode", void 0);
    return PausePromotionResponse;
}(SpeakeasyBase));
export { PausePromotionResponse };
