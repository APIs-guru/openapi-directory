import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListHumanTaskUisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListHumanTaskUisXAmzTargetEnum {
    SageMakerListHumanTaskUis = "SageMaker.ListHumanTaskUis"
}


export class ListHumanTaskUisHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListHumanTaskUisXAmzTargetEnum;
}


export class ListHumanTaskUisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListHumanTaskUisQueryParams;

  @SpeakeasyMetadata()
  headers: ListHumanTaskUisHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListHumanTaskUisRequest;
}


export class ListHumanTaskUisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listHumanTaskUisResponse?: shared.ListHumanTaskUisResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
