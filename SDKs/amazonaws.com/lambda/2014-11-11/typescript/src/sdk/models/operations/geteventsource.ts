import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=UUID" })
  uuid: string;
}


export class GetEventSourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventSourcePathParams;

  @Metadata()
  headers: GetEventSourceHeaders;
}


export class GetEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventSourceConfiguration?: shared.EventSourceConfiguration;

  @Metadata()
  invalidParameterValueException?: shared.InvalidParameterValueException;

  @Metadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  @Metadata()
  serviceException?: shared.ServiceException;

  @Metadata()
  statusCode: number;
}
