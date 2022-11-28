import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDetailsSingleBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class GetDetailsSingleBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDetailsSingleBatchPathParams;
}


export class GetDetailsSingleBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems?: shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems;
}
