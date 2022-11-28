import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicenseByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class GetLicenseById200ApplicationJsonLicensesLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetLicenseById200ApplicationJsonLicenses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license", elemType: GetLicenseById200ApplicationJsonLicensesLicense })
  license?: GetLicenseById200ApplicationJsonLicensesLicense[];
}


export class GetLicenseById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licenses" })
  licenses?: GetLicenseById200ApplicationJsonLicenses;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetLicenseByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLicenseByIdQueryParams;
}


export class GetLicenseByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLicenseById200ApplicationJsonObject?: GetLicenseById200ApplicationJson;
}
