import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePatchPropertiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribePatchPropertiesXAmzTargetEnum {
    AmazonSsmDescribePatchProperties = "AmazonSSM.DescribePatchProperties"
}


export class DescribePatchPropertiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePatchPropertiesXAmzTargetEnum;
}


export class DescribePatchPropertiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePatchPropertiesQueryParams;

  @Metadata()
  headers: DescribePatchPropertiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePatchPropertiesRequest;
}


export class DescribePatchPropertiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePatchPropertiesResult?: shared.DescribePatchPropertiesResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
