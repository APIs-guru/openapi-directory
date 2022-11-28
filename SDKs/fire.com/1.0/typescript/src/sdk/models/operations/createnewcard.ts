import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateNewCardNewCardAddressTypeEnum {
    Home = "HOME",
    Business = "BUSINESS"
}


export class CreateNewCardNewCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptFeesAndCharges" })
  acceptFeesAndCharges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=addressType" })
  addressType?: CreateNewCardNewCardAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cardPin" })
  cardPin?: string;

  @SpeakeasyMetadata({ data: "json, name=eurIcan" })
  eurIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=gbpIcan" })
  gbpIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;
}

export enum CreateNewCardNewCardResponseStatusEnum {
    CreatedActive = "CREATED_ACTIVE",
    CreatedInactive = "CREATED_INACTIVE"
}


export class CreateNewCardNewCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardId" })
  cardId?: number;

  @SpeakeasyMetadata({ data: "json, name=expiryDate" })
  expiryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=maskedPan" })
  maskedPan?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateNewCardNewCardResponseStatusEnum;
}


export class CreateNewCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNewCardNewCard;
}


export class CreateNewCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  newCardResponse?: CreateNewCardNewCardResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
