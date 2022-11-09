import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateCodeRepositoryXAmzTargetEnum {
    SageMakerUpdateCodeRepository = "SageMaker.UpdateCodeRepository"
}


export class UpdateCodeRepositoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateCodeRepositoryXAmzTargetEnum;
}


export class UpdateCodeRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCodeRepositoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCodeRepositoryInput;
}


export class UpdateCodeRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCodeRepositoryOutput?: shared.UpdateCodeRepositoryOutput;
}
