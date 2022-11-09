import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttributeValuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetAttributeValuesXAmzTargetEnum {
    AwsPriceListServiceGetAttributeValues = "AWSPriceListService.GetAttributeValues"
}


export class GetAttributeValuesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAttributeValuesXAmzTargetEnum;
}


export class GetAttributeValuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttributeValuesQueryParams;

  @Metadata()
  headers: GetAttributeValuesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAttributeValuesRequest;
}


export class GetAttributeValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  expiredNextTokenException?: any;

  @Metadata()
  getAttributeValuesResponse?: shared.GetAttributeValuesResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}
