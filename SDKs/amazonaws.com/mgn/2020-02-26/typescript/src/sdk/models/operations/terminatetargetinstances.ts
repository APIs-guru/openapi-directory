import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TerminateTargetInstancesHeaders extends SpeakeasyBase {
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


export class TerminateTargetInstancesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceServerIDs" })
  sourceServerIDs: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class TerminateTargetInstancesRequest extends SpeakeasyBase {
  @Metadata()
  headers: TerminateTargetInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TerminateTargetInstancesRequestBody;
}


export class TerminateTargetInstancesResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminateTargetInstancesResponse?: shared.TerminateTargetInstancesResponse;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
