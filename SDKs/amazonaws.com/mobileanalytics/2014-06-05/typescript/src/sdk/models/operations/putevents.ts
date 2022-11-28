import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-Client-Context" })
  xAmzClientContext: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-Client-Context-Encoding" })
  xAmzClientContextEncoding?: string;
}


export class PutEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: shared.Event })
  events: shared.Event[];
}


export class PutEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEventsRequestBody;
}


export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: shared.BadRequestException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
