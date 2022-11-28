import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMandatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class GetMandateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMandatePathParams;
}


export class GetMandateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems?: shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
}
