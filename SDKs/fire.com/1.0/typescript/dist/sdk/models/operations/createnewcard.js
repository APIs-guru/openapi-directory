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
export var CreateNewCardNewCardAddressTypeEnum;
(function (CreateNewCardNewCardAddressTypeEnum) {
    CreateNewCardNewCardAddressTypeEnum["Home"] = "HOME";
    CreateNewCardNewCardAddressTypeEnum["Business"] = "BUSINESS";
})(CreateNewCardNewCardAddressTypeEnum || (CreateNewCardNewCardAddressTypeEnum = {}));
var CreateNewCardNewCard = /** @class */ (function (_super) {
    __extends(CreateNewCardNewCard, _super);
    function CreateNewCardNewCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptFeesAndCharges" }),
        __metadata("design:type", Boolean)
    ], CreateNewCardNewCard.prototype, "acceptFeesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressType" }),
        __metadata("design:type", String)
    ], CreateNewCardNewCard.prototype, "addressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardPin" }),
        __metadata("design:type", String)
    ], CreateNewCardNewCard.prototype, "cardPin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eurIcan" }),
        __metadata("design:type", Number)
    ], CreateNewCardNewCard.prototype, "eurIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gbpIcan" }),
        __metadata("design:type", Number)
    ], CreateNewCardNewCard.prototype, "gbpIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], CreateNewCardNewCard.prototype, "userId", void 0);
    return CreateNewCardNewCard;
}(SpeakeasyBase));
export { CreateNewCardNewCard };
export var CreateNewCardNewCardResponseStatusEnum;
(function (CreateNewCardNewCardResponseStatusEnum) {
    CreateNewCardNewCardResponseStatusEnum["CreatedActive"] = "CREATED_ACTIVE";
    CreateNewCardNewCardResponseStatusEnum["CreatedInactive"] = "CREATED_INACTIVE";
})(CreateNewCardNewCardResponseStatusEnum || (CreateNewCardNewCardResponseStatusEnum = {}));
var CreateNewCardNewCardResponse = /** @class */ (function (_super) {
    __extends(CreateNewCardNewCardResponse, _super);
    function CreateNewCardNewCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardId" }),
        __metadata("design:type", Number)
    ], CreateNewCardNewCardResponse.prototype, "cardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", Date)
    ], CreateNewCardNewCardResponse.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskedPan" }),
        __metadata("design:type", String)
    ], CreateNewCardNewCardResponse.prototype, "maskedPan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateNewCardNewCardResponse.prototype, "status", void 0);
    return CreateNewCardNewCardResponse;
}(SpeakeasyBase));
export { CreateNewCardNewCardResponse };
var CreateNewCardRequest = /** @class */ (function (_super) {
    __extends(CreateNewCardRequest, _super);
    function CreateNewCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNewCardNewCard)
    ], CreateNewCardRequest.prototype, "request", void 0);
    return CreateNewCardRequest;
}(SpeakeasyBase));
export { CreateNewCardRequest };
var CreateNewCardResponse = /** @class */ (function (_super) {
    __extends(CreateNewCardResponse, _super);
    function CreateNewCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNewCardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNewCardNewCardResponse)
    ], CreateNewCardResponse.prototype, "newCardResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNewCardResponse.prototype, "statusCode", void 0);
    return CreateNewCardResponse;
}(SpeakeasyBase));
export { CreateNewCardResponse };
