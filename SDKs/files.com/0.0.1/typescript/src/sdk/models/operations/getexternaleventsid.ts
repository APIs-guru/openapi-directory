import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExternalEventsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetExternalEventsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetExternalEventsIdPathParams;
}


export class GetExternalEventsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  externalEventEntity?: shared.ExternalEventEntity;

  @Metadata()
  statusCode: number;
}
