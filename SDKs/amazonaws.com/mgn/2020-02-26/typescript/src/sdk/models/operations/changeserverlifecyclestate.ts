import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeServerLifeCycleStateHeaders extends SpeakeasyBase {
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


// ChangeServerLifeCycleStateRequestBodyLifeCycle
/** 
 * The request to change the source server migration lifecycle state.
**/
export class ChangeServerLifeCycleStateRequestBodyLifeCycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;
}


export class ChangeServerLifeCycleStateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=lifeCycle" })
  lifeCycle: ChangeServerLifeCycleStateRequestBodyLifeCycle;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;
}


export class ChangeServerLifeCycleStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: ChangeServerLifeCycleStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ChangeServerLifeCycleStateRequestBody;
}


export class ChangeServerLifeCycleStateResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  sourceServer?: shared.SourceServer;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;

  @Metadata()
  validationException?: any;
}
