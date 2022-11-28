import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePresignedNotebookInstanceUrlXAmzTargetEnum {
    SageMakerCreatePresignedNotebookInstanceUrl = "SageMaker.CreatePresignedNotebookInstanceUrl"
}


export class CreatePresignedNotebookInstanceUrlHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreatePresignedNotebookInstanceUrlXAmzTargetEnum;
}


export class CreatePresignedNotebookInstanceUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePresignedNotebookInstanceUrlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreatePresignedNotebookInstanceUrlInput;
}


export class CreatePresignedNotebookInstanceUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPresignedNotebookInstanceUrlOutput?: shared.CreatePresignedNotebookInstanceUrlOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
