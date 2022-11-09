import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PrepareTransactionRequestBodyVariationEnum {
    Gsb = "gsb"
,    Erzeugung = "erzeugung"
,    Eigenstrom = "eigenstrom"
,    Co2 = "co2"
,    Baeume = "baeume"
}


export class PrepareTransactionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=variation" })
  variation?: PrepareTransactionRequestBodyVariationEnum;
}


export class PrepareTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PrepareTransactionRequestBody;
}


export class PrepareTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
