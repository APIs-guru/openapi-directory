import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LabelParameterVersionXAmzTargetEnum {
    AmazonSsmLabelParameterVersion = "AmazonSSM.LabelParameterVersion"
}


export class LabelParameterVersionHeaders extends SpeakeasyBase {
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
  xAmzTarget: LabelParameterVersionXAmzTargetEnum;
}


export class LabelParameterVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: LabelParameterVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LabelParameterVersionRequest;
}


export class LabelParameterVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  labelParameterVersionResult?: shared.LabelParameterVersionResult;

  @Metadata()
  parameterNotFound?: any;

  @Metadata()
  parameterVersionLabelLimitExceeded?: any;

  @Metadata()
  parameterVersionNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyUpdates?: any;
}
