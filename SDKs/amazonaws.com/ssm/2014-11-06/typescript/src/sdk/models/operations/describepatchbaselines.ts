import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePatchBaselinesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribePatchBaselinesXAmzTargetEnum {
    AmazonSsmDescribePatchBaselines = "AmazonSSM.DescribePatchBaselines"
}


export class DescribePatchBaselinesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePatchBaselinesXAmzTargetEnum;
}


export class DescribePatchBaselinesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePatchBaselinesQueryParams;

  @Metadata()
  headers: DescribePatchBaselinesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePatchBaselinesRequest;
}


export class DescribePatchBaselinesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePatchBaselinesResult?: shared.DescribePatchBaselinesResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
