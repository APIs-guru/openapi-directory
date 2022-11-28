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
export var GetListofCardsCardsCardProviderEnum;
(function (GetListofCardsCardsCardProviderEnum) {
    GetListofCardsCardsCardProviderEnum["Mastercard"] = "MASTERCARD";
})(GetListofCardsCardsCardProviderEnum || (GetListofCardsCardsCardProviderEnum = {}));
export var GetListofCardsCardsCardStatusEnum;
(function (GetListofCardsCardsCardStatusEnum) {
    GetListofCardsCardsCardStatusEnum["Live"] = "LIVE";
    GetListofCardsCardsCardStatusEnum["CreatedActive"] = "CREATED_ACTIVE";
    GetListofCardsCardsCardStatusEnum["CreatedInactive"] = "CREATED_INACTIVE";
    GetListofCardsCardsCardStatusEnum["Deactivated"] = "DEACTIVATED";
})(GetListofCardsCardsCardStatusEnum || (GetListofCardsCardsCardStatusEnum = {}));
export var GetListofCardsCardsCardStatusReasonEnum;
(function (GetListofCardsCardsCardStatusReasonEnum) {
    GetListofCardsCardsCardStatusReasonEnum["LostCard"] = "LOST_CARD";
    GetListofCardsCardsCardStatusReasonEnum["StolenCard"] = "STOLEN_CARD";
    GetListofCardsCardsCardStatusReasonEnum["CardDestroyed"] = "CARD_DESTROYED";
})(GetListofCardsCardsCardStatusReasonEnum || (GetListofCardsCardsCardStatusReasonEnum = {}));
var GetListofCardsCardsCard = /** @class */ (function (_super) {
    __extends(GetListofCardsCardsCard, _super);
    function GetListofCardsCardsCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetListofCardsCardsCard.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardId" }),
        __metadata("design:type", Number)
    ], GetListofCardsCardsCard.prototype, "cardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetListofCardsCardsCard.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eurIcan" }),
        __metadata("design:type", Number)
    ], GetListofCardsCardsCard.prototype, "eurIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiryDate" }),
        __metadata("design:type", Date)
    ], GetListofCardsCardsCard.prototype, "expiryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gbpIcan" }),
        __metadata("design:type", Number)
    ], GetListofCardsCardsCard.prototype, "gbpIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskedPan" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "maskedPan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], GetListofCardsCardsCard.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], GetListofCardsCardsCard.prototype, "userId", void 0);
    return GetListofCardsCardsCard;
}(SpeakeasyBase));
export { GetListofCardsCardsCard };
var GetListofCardsCards = /** @class */ (function (_super) {
    __extends(GetListofCardsCards, _super);
    function GetListofCardsCards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cards", elemType: GetListofCardsCardsCard }),
        __metadata("design:type", Array)
    ], GetListofCardsCards.prototype, "cards", void 0);
    return GetListofCardsCards;
}(SpeakeasyBase));
export { GetListofCardsCards };
var GetListofCardsResponse = /** @class */ (function (_super) {
    __extends(GetListofCardsResponse, _super);
    function GetListofCardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListofCardsCards)
    ], GetListofCardsResponse.prototype, "cards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListofCardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListofCardsResponse.prototype, "statusCode", void 0);
    return GetListofCardsResponse;
}(SpeakeasyBase));
export { GetListofCardsResponse };
