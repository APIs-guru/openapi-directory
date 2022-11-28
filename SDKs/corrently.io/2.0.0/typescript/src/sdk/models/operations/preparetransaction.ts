import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PrepareTransactionRequestBodyVariationEnum {
    Gsb = "gsb",
    Erzeugung = "erzeugung",
    Eigenstrom = "eigenstrom",
    Co2 = "co2",
    Baeume = "baeume"
}


export class PrepareTransactionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=variation" })
  variation?: PrepareTransactionRequestBodyVariationEnum;
}


export class PrepareTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PrepareTransactionRequestBody;
}


export class PrepareTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
