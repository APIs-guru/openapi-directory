import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeServerLifeCycleStateHeaders extends SpeakeasyBase {
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
}


// ChangeServerLifeCycleStateRequestBodyLifeCycle
/** 
 * The request to change the source server migration lifecycle state.
**/
export class ChangeServerLifeCycleStateRequestBodyLifeCycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;
}


export class ChangeServerLifeCycleStateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lifeCycle" })
  lifeCycle: ChangeServerLifeCycleStateRequestBodyLifeCycle;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;
}


export class ChangeServerLifeCycleStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ChangeServerLifeCycleStateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ChangeServerLifeCycleStateRequestBody;
}


export class ChangeServerLifeCycleStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  sourceServer?: shared.SourceServer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uninitializedAccountException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
