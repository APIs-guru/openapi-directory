import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateWorkteamXAmzTargetEnum {
    SageMakerCreateWorkteam = "SageMaker.CreateWorkteam"
}


export class CreateWorkteamHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateWorkteamXAmzTargetEnum;
}


export class CreateWorkteamRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateWorkteamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateWorkteamRequest;
}


export class CreateWorkteamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createWorkteamResponse?: shared.CreateWorkteamResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
