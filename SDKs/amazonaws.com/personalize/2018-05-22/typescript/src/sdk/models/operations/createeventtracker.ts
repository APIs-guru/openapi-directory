import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEventTrackerXAmzTargetEnum {
    AmazonPersonalizeCreateEventTracker = "AmazonPersonalize.CreateEventTracker"
}


export class CreateEventTrackerHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateEventTrackerXAmzTargetEnum;
}


export class CreateEventTrackerRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventTrackerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEventTrackerRequest;
}


export class CreateEventTrackerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createEventTrackerResponse?: shared.CreateEventTrackerResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
