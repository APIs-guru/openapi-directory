import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiVi200ApplicationJsonLinksHolidays extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinksProvinces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holidays" })
  holidays?: GetApiVi200ApplicationJsonLinksHolidays;

  @SpeakeasyMetadata({ data: "json, name=provinces" })
  provinces?: GetApiVi200ApplicationJsonLinksProvinces;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetApiVi200ApplicationJsonLinksSelf;
}


export class GetApiVi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetApiVi200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetApiViResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApiVi200ApplicationJsonObject?: GetApiVi200ApplicationJson;
}
