import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDirectDebitByUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directDebitUuid" })
  directDebitUuid: string;
}


export class GetDirectDebitByUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDirectDebitByUuidPathParams;
}


export class GetDirectDebitByUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems?: shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
}
