import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListofCardsCardsCardProviderEnum {
    Mastercard = "MASTERCARD"
}

export enum GetListofCardsCardsCardStatusEnum {
    Live = "LIVE"
,    CreatedActive = "CREATED_ACTIVE"
,    CreatedInactive = "CREATED_INACTIVE"
,    Deactivated = "DEACTIVATED"
}

export enum GetListofCardsCardsCardStatusReasonEnum {
    LostCard = "LOST_CARD"
,    StolenCard = "STOLEN_CARD"
,    CardDestroyed = "CARD_DESTROYED"
}


export class GetListofCardsCardsCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=cardId" })
  cardId?: number;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=eurIcan" })
  eurIcan?: number;

  @Metadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=gbpIcan" })
  gbpIcan?: number;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: GetListofCardsCardsCardProviderEnum;

  @Metadata({ data: "json, name=status" })
  status?: GetListofCardsCardsCardStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: GetListofCardsCardsCardStatusReasonEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}


export class GetListofCardsCards extends SpeakeasyBase {
  @Metadata({ data: "json, name=cards", elemType: operations.GetListofCardsCardsCard })
  cards?: GetListofCardsCardsCard[];
}


export class GetListofCardsResponse extends SpeakeasyBase {
  @Metadata()
  cards?: GetListofCardsCards;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
