import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePresignedNotebookInstanceUrlXAmzTargetEnum {
    SageMakerCreatePresignedNotebookInstanceUrl = "SageMaker.CreatePresignedNotebookInstanceUrl"
}


export class CreatePresignedNotebookInstanceUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePresignedNotebookInstanceUrlXAmzTargetEnum;
}


export class CreatePresignedNotebookInstanceUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePresignedNotebookInstanceUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePresignedNotebookInstanceUrlInput;
}


export class CreatePresignedNotebookInstanceUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPresignedNotebookInstanceUrlOutput?: shared.CreatePresignedNotebookInstanceUrlOutput;

  @Metadata()
  statusCode: number;
}
