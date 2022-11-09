import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateNewCardNewCardAddressTypeEnum {
    Home = "HOME"
,    Business = "BUSINESS"
}


export class CreateNewCardNewCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptFeesAndCharges" })
  acceptFeesAndCharges?: boolean;

  @Metadata({ data: "json, name=addressType" })
  addressType?: CreateNewCardNewCardAddressTypeEnum;

  @Metadata({ data: "json, name=cardPin" })
  cardPin?: string;

  @Metadata({ data: "json, name=eurIcan" })
  eurIcan?: number;

  @Metadata({ data: "json, name=gbpIcan" })
  gbpIcan?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: number;
}


export class CreateNewCardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNewCardNewCard;
}

export enum CreateNewCardNewCardResponseStatusEnum {
    CreatedActive = "CREATED_ACTIVE"
,    CreatedInactive = "CREATED_INACTIVE"
}


export class CreateNewCardNewCardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardId" })
  cardId?: number;

  @Metadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @Metadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @Metadata({ data: "json, name=status" })
  status?: CreateNewCardNewCardResponseStatusEnum;
}


export class CreateNewCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  newCardResponse?: CreateNewCardNewCardResponse;

  @Metadata()
  statusCode: number;
}
