import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExternalEventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetExternalEventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetExternalEventsIdPathParams;
}


export class GetExternalEventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  externalEventEntity?: shared.ExternalEventEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
