import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiCoreDtoConversionsConversionProtocolEnum {
    Http = "Http",
    Https = "Https"
}


export class ApiCoreDtoConversionsConversion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code, form, name=code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate, form, name=creationDate;" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol, form, name=protocol;" })
  protocol?: ApiCoreDtoConversionsConversionProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=value, form, name=value;" })
  value?: number;
}
