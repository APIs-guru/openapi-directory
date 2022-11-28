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
var DeleteItvPurchasePlatformPathParams = /** @class */ (function (_super) {
    __extends(DeleteItvPurchasePlatformPathParams, _super);
    function DeleteItvPurchasePlatformPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], DeleteItvPurchasePlatformPathParams.prototype, "platform", void 0);
    return DeleteItvPurchasePlatformPathParams;
}(SpeakeasyBase));
export { DeleteItvPurchasePlatformPathParams };
var DeleteItvPurchasePlatformQueryParams = /** @class */ (function (_super) {
    __extends(DeleteItvPurchasePlatformQueryParams, _super);
    function DeleteItvPurchasePlatformQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], DeleteItvPurchasePlatformQueryParams.prototype, "lang", void 0);
    return DeleteItvPurchasePlatformQueryParams;
}(SpeakeasyBase));
export { DeleteItvPurchasePlatformQueryParams };
var DeleteItvPurchasePlatformSecurity = /** @class */ (function (_super) {
    __extends(DeleteItvPurchasePlatformSecurity, _super);
    function DeleteItvPurchasePlatformSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], DeleteItvPurchasePlatformSecurity.prototype, "accountAuth", void 0);
    return DeleteItvPurchasePlatformSecurity;
}(SpeakeasyBase));
export { DeleteItvPurchasePlatformSecurity };
var DeleteItvPurchasePlatformRequest = /** @class */ (function (_super) {
    __extends(DeleteItvPurchasePlatformRequest, _super);
    function DeleteItvPurchasePlatformRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItvPurchasePlatformPathParams)
    ], DeleteItvPurchasePlatformRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItvPurchasePlatformQueryParams)
    ], DeleteItvPurchasePlatformRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvCancelSubscriptionRequest)
    ], DeleteItvPurchasePlatformRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteItvPurchasePlatformSecurity)
    ], DeleteItvPurchasePlatformRequest.prototype, "security", void 0);
    return DeleteItvPurchasePlatformRequest;
}(SpeakeasyBase));
export { DeleteItvPurchasePlatformRequest };
var DeleteItvPurchasePlatformResponse = /** @class */ (function (_super) {
    __extends(DeleteItvPurchasePlatformResponse, _super);
    function DeleteItvPurchasePlatformResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteItvPurchasePlatformResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], DeleteItvPurchasePlatformResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteItvPurchasePlatformResponse.prototype, "statusCode", void 0);
    return DeleteItvPurchasePlatformResponse;
}(SpeakeasyBase));
export { DeleteItvPurchasePlatformResponse };
