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
var FlagSpaceItemPathParams = /** @class */ (function (_super) {
    __extends(FlagSpaceItemPathParams, _super);
    function FlagSpaceItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], FlagSpaceItemPathParams.prototype, "itemId", void 0);
    return FlagSpaceItemPathParams;
}(SpeakeasyBase));
export { FlagSpaceItemPathParams };
var FlagSpaceItemSecurity = /** @class */ (function (_super) {
    __extends(FlagSpaceItemSecurity, _super);
    function FlagSpaceItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], FlagSpaceItemSecurity.prototype, "oauth", void 0);
    return FlagSpaceItemSecurity;
}(SpeakeasyBase));
export { FlagSpaceItemSecurity };
var FlagSpaceItemRequest = /** @class */ (function (_super) {
    __extends(FlagSpaceItemRequest, _super);
    function FlagSpaceItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FlagSpaceItemPathParams)
    ], FlagSpaceItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FlagSpaceItemSecurity)
    ], FlagSpaceItemRequest.prototype, "security", void 0);
    return FlagSpaceItemRequest;
}(SpeakeasyBase));
export { FlagSpaceItemRequest };
var FlagSpaceItemResponse = /** @class */ (function (_super) {
    __extends(FlagSpaceItemResponse, _super);
    function FlagSpaceItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FlagSpaceItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FlagSpaceItemResponse.prototype, "statusCode", void 0);
    return FlagSpaceItemResponse;
}(SpeakeasyBase));
export { FlagSpaceItemResponse };
