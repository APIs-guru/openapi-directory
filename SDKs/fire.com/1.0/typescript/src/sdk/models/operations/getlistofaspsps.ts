import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfAspspsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;
}


export class GetListOfAspspsAspspsAspspCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}


export class GetListOfAspspsAspspsAspsp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=aspspUuid" })
  aspspUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: GetListOfAspspsAspspsAspspCountry;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl?: string;
}


export class GetListOfAspspsAspsps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspsps", elemType: GetListOfAspspsAspspsAspsp })
  aspsps?: GetListOfAspspsAspspsAspsp[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetListOfAspspsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListOfAspspsQueryParams;
}


export class GetListOfAspspsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aspsps?: GetListOfAspspsAspsps;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
