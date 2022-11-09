import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListImagesXAmzTargetEnum {
    SageMakerListImages = "SageMaker.ListImages"
}


export class ListImagesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListImagesXAmzTargetEnum;
}


export class ListImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListImagesQueryParams;

  @Metadata()
  headers: ListImagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListImagesRequest;
}


export class ListImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listImagesResponse?: shared.ListImagesResponse;

  @Metadata()
  statusCode: number;
}
