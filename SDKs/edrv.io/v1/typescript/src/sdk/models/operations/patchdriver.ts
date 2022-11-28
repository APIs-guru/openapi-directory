import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchDriverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchDriverRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchDriverRequestBodyPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=work" })
  work?: string;
}


export class PatchDriverRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PatchDriverRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: PatchDriverRequestBodyPhone;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=tokens" })
  tokens?: any[];
}


export class PatchDriver200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class PatchDriverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDriverPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchDriverRequestBody;
}


export class PatchDriverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchDriver200ApplicationJsonObject?: PatchDriver200ApplicationJson;
}
