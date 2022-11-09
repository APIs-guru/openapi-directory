import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLicenseByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class GetLicenseByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLicenseByIdQueryParams;
}


export class GetLicenseById200ApplicationJsonLicensesLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetLicenseById200ApplicationJsonLicenses extends SpeakeasyBase {
  @Metadata({ data: "json, name=license", elemType: operations.GetLicenseById200ApplicationJsonLicensesLicense })
  license?: GetLicenseById200ApplicationJsonLicensesLicense[];
}


export class GetLicenseById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=licenses" })
  licenses?: GetLicenseById200ApplicationJsonLicenses;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetLicenseByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLicenseById200ApplicationJsonObject?: GetLicenseById200ApplicationJson;
}
