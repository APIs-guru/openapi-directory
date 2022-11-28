import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListofCardsCardsCardProviderEnum {
    Mastercard = "MASTERCARD"
}
export declare enum GetListofCardsCardsCardStatusEnum {
    Live = "LIVE",
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE",
    Deactivated = "DEACTIVATED"
}
export declare enum GetListofCardsCardsCardStatusReasonEnum {
    LostCard = "LOST_CARD",
    StolenCard = "STOLEN_CARD",
    CardDestroyed = "CARD_DESTROYED"
}
export declare class GetListofCardsCardsCard extends SpeakeasyBase {
    blocked?: boolean;
    cardId?: number;
    dateCreated?: Date;
    emailAddress?: string;
    eurIcan?: number;
    expiryDate?: Date;
    firstName?: string;
    gbpIcan?: number;
    lastName?: string;
    maskedPan?: string;
    provider?: GetListofCardsCardsCardProviderEnum;
    status?: GetListofCardsCardsCardStatusEnum;
    statusReason?: GetListofCardsCardsCardStatusReasonEnum;
    userId?: number;
}
export declare class GetListofCardsCards extends SpeakeasyBase {
    cards?: GetListofCardsCardsCard[];
}
export declare class GetListofCardsResponse extends SpeakeasyBase {
    cards?: GetListofCardsCards;
    contentType: string;
    statusCode: number;
}
