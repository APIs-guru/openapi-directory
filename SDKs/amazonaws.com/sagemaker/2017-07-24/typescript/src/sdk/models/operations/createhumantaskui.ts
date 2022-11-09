import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHumanTaskUiXAmzTargetEnum {
    SageMakerCreateHumanTaskUi = "SageMaker.CreateHumanTaskUi"
}


export class CreateHumanTaskUiHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateHumanTaskUiXAmzTargetEnum;
}


export class CreateHumanTaskUiRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateHumanTaskUiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateHumanTaskUiRequest;
}


export class CreateHumanTaskUiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createHumanTaskUiResponse?: shared.CreateHumanTaskUiResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
