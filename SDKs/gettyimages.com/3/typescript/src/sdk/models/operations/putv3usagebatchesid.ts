import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutV3UsageBatchesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutV3UsageBatchesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV3UsageBatchesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ReportUsageBatchRequest;
}


export class PutV3UsageBatchesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reportUsageBatchResponse?: shared.ReportUsageBatchResponse;
}
