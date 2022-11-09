import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDirectDebitByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directDebitUuid" })
  directDebitUuid: string;
}


export class GetDirectDebitByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDirectDebitByUuidPathParams;
}


export class GetDirectDebitByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems?: shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
}
