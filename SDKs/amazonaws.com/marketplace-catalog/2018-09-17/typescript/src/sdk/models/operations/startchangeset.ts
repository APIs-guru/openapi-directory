import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartChangeSetHeaders extends SpeakeasyBase {
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


export class StartChangeSetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "json, name=ChangeSet", elemType: shared.Change })
  changeSet: shared.Change[];

  @SpeakeasyMetadata({ data: "json, name=ChangeSetName" })
  changeSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;
}


export class StartChangeSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartChangeSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartChangeSetRequestBody;
}


export class StartChangeSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  startChangeSetResponse?: shared.StartChangeSetResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
