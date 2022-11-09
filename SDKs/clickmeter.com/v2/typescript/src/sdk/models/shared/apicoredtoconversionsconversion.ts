import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiCoreDtoConversionsConversionProtocolEnum {
    Http = "Http"
,    Https = "Https"
}


export class ApiCoreDtoConversionsConversion extends SpeakeasyBase {
  @Metadata({ data: "json, name=code, form, name=code;" })
  code?: string;

  @Metadata({ data: "json, name=creationDate, form, name=creationDate;" })
  creationDate?: string;

  @Metadata({ data: "json, name=deleted, form, name=deleted;" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description, form, name=description;" })
  description?: string;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=protocol, form, name=protocol;" })
  protocol?: ApiCoreDtoConversionsConversionProtocolEnum;

  @Metadata({ data: "json, name=value, form, name=value;" })
  value?: number;
}
