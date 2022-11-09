import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddTagsXAmzTargetEnum {
    SageMakerAddTags = "SageMaker.AddTags"
}


export class AddTagsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddTagsXAmzTargetEnum;
}


export class AddTagsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddTagsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddTagsInput;
}


export class AddTagsResponse extends SpeakeasyBase {
  @Metadata()
  addTagsOutput?: shared.AddTagsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
