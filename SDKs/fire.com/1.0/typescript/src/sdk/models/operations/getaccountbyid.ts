import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ican" })
  ican: number;
}


export class GetAccountByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountByIdPathParams;
}


export class GetAccountByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems;
}
