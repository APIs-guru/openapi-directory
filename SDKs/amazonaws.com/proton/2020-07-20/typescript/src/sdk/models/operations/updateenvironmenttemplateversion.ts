import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentTemplateVersion = "AwsProton20200720.UpdateEnvironmentTemplateVersion"
}


export class UpdateEnvironmentTemplateVersionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateEnvironmentTemplateVersionXAmzTargetEnum;
}


export class UpdateEnvironmentTemplateVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateEnvironmentTemplateVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateEnvironmentTemplateVersionInput;
}


export class UpdateEnvironmentTemplateVersionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateEnvironmentTemplateVersionOutput?: shared.UpdateEnvironmentTemplateVersionOutput;

  @Metadata()
  validationException?: any;
}
