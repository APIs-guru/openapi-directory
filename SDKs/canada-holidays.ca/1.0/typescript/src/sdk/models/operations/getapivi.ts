import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiVi200ApplicationJsonLinksHolidays extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinksProvinces extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetApiVi200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=holidays" })
  holidays?: GetApiVi200ApplicationJsonLinksHolidays;

  @Metadata({ data: "json, name=provinces" })
  provinces?: GetApiVi200ApplicationJsonLinksProvinces;

  @Metadata({ data: "json, name=self" })
  self?: GetApiVi200ApplicationJsonLinksSelf;
}


export class GetApiVi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetApiVi200ApplicationJsonLinks;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetApiViResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getApiVi200ApplicationJsonObject?: GetApiVi200ApplicationJson;
}
