import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListofCardsCardsCardProviderEnum {
    Mastercard = "MASTERCARD"
}

export enum GetListofCardsCardsCardStatusEnum {
    Live = "LIVE",
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE",
    Deactivated = "DEACTIVATED"
}

export enum GetListofCardsCardsCardStatusReasonEnum {
    LostCard = "LOST_CARD",
    StolenCard = "STOLEN_CARD",
    CardDestroyed = "CARD_DESTROYED"
}


export class GetListofCardsCardsCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cardId" })
  cardId?: number;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=eurIcan" })
  eurIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gbpIcan" })
  gbpIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: GetListofCardsCardsCardProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetListofCardsCardsCardStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: GetListofCardsCardsCardStatusReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}


export class GetListofCardsCards extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cards", elemType: GetListofCardsCardsCard })
  cards?: GetListofCardsCardsCard[];
}


export class GetListofCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cards?: GetListofCardsCards;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
