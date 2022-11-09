import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateServiceTemplateVersion = "AwsProton20200720.UpdateServiceTemplateVersion"
}


export class UpdateServiceTemplateVersionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateServiceTemplateVersionXAmzTargetEnum;
}


export class UpdateServiceTemplateVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateServiceTemplateVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateServiceTemplateVersionInput;
}


export class UpdateServiceTemplateVersionResponse extends SpeakeasyBase {
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
  updateServiceTemplateVersionOutput?: shared.UpdateServiceTemplateVersionOutput;

  @Metadata()
  validationException?: any;
}
