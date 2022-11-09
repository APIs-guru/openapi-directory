import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetAccountByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountByIdPathParams;
}


export class GetAccountByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}
