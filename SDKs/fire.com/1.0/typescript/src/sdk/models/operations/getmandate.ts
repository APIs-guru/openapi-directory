import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMandatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mandateUuid" })
  mandateUuid: string;
}


export class GetMandateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMandatePathParams;
}


export class GetMandateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems?: shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems;
}
