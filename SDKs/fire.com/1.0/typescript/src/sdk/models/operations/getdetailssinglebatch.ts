import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDetailsSingleBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetDetailsSingleBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDetailsSingleBatchPathParams;
}


export class GetDetailsSingleBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems?: shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
}
