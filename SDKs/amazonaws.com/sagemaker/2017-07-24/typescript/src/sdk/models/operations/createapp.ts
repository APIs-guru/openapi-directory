import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAppXAmzTargetEnum {
    SageMakerCreateApp = "SageMaker.CreateApp"
}


export class CreateAppHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAppXAmzTargetEnum;
}


export class CreateAppRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAppHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAppRequest;
}


export class CreateAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAppResponse?: shared.CreateAppResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
