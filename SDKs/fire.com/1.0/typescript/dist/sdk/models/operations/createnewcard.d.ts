import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateNewCardNewCardAddressTypeEnum {
    Home = "HOME",
    Business = "BUSINESS"
}
export declare class CreateNewCardNewCard extends SpeakeasyBase {
    acceptFeesAndCharges?: boolean;
    addressType?: CreateNewCardNewCardAddressTypeEnum;
    cardPin?: string;
    eurIcan?: number;
    gbpIcan?: number;
    userId?: number;
}
export declare enum CreateNewCardNewCardResponseStatusEnum {
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE"
}
export declare class CreateNewCardNewCardResponse extends SpeakeasyBase {
    cardId?: number;
    expiryDate?: Date;
    maskedPan?: string;
    status?: CreateNewCardNewCardResponseStatusEnum;
}
export declare class CreateNewCardRequest extends SpeakeasyBase {
    request: CreateNewCardNewCard;
}
export declare class CreateNewCardResponse extends SpeakeasyBase {
    contentType: string;
    newCardResponse?: CreateNewCardNewCardResponse;
    statusCode: number;
}
