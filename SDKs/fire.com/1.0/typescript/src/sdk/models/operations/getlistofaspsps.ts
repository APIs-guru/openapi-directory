import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfAspspsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;
}


export class GetListOfAspspsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListOfAspspsQueryParams;
}


export class GetListOfAspspsAspspsAspspCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}


export class GetListOfAspspsAspspsAspsp extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=aspspUuid" })
  aspspUuid?: string;

  @Metadata({ data: "json, name=country" })
  country?: GetListOfAspspsAspspsAspspCountry;

  @Metadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl?: string;
}


export class GetListOfAspspsAspsps extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspsps", elemType: operations.GetListOfAspspsAspspsAspsp })
  aspsps?: GetListOfAspspsAspspsAspsp[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetListOfAspspsResponse extends SpeakeasyBase {
  @Metadata()
  aspsps?: GetListOfAspspsAspsps;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
