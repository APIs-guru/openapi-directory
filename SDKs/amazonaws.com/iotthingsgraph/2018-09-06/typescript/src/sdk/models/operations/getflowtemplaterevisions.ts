import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFlowTemplateRevisionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetFlowTemplateRevisionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetFlowTemplateRevisions = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"
}


export class GetFlowTemplateRevisionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetFlowTemplateRevisionsXAmzTargetEnum;
}


export class GetFlowTemplateRevisionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFlowTemplateRevisionsQueryParams;

  @Metadata()
  headers: GetFlowTemplateRevisionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetFlowTemplateRevisionsRequest;
}


export class GetFlowTemplateRevisionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFlowTemplateRevisionsResponse?: shared.GetFlowTemplateRevisionsResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
