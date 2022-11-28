import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutV3UsageBatchesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutV3UsageBatchesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV3UsageBatchesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ReportUsageBatchRequest;
}


export class PutV3UsageBatchesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportUsageBatchResponse?: shared.ReportUsageBatchResponse;
}
