import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchDriverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchDriverRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchDriverRequestBodyPhone extends SpeakeasyBase {
  @Metadata({ data: "json, name=home" })
  home?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=work" })
  work?: string;
}


export class PatchDriverRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=address" })
  address?: PatchDriverRequestBodyAddress;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: PatchDriverRequestBodyPhone;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=tokens" })
  tokens?: any[];
}


export class PatchDriverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDriverPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchDriverRequestBody;
}


export class PatchDriver200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchDriverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchDriver200ApplicationJsonObject?: PatchDriver200ApplicationJson;
}
