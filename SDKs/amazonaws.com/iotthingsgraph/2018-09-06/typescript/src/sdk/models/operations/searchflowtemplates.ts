import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchFlowTemplatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum SearchFlowTemplatesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchFlowTemplates = "IotThingsGraphFrontEndService.SearchFlowTemplates"
}


export class SearchFlowTemplatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: SearchFlowTemplatesXAmzTargetEnum;
}


export class SearchFlowTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchFlowTemplatesQueryParams;

  @Metadata()
  headers: SearchFlowTemplatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchFlowTemplatesRequest;
}


export class SearchFlowTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  searchFlowTemplatesResponse?: shared.SearchFlowTemplatesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
