import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResourceDataSyncQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResourceDataSyncXAmzTargetEnum {
    AmazonSsmListResourceDataSync = "AmazonSSM.ListResourceDataSync"
}


export class ListResourceDataSyncHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResourceDataSyncXAmzTargetEnum;
}


export class ListResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResourceDataSyncQueryParams;

  @Metadata()
  headers: ListResourceDataSyncHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResourceDataSyncRequest;
}


export class ListResourceDataSyncResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  listResourceDataSyncResult?: shared.ListResourceDataSyncResult;

  @Metadata()
  resourceDataSyncInvalidConfigurationException?: any;

  @Metadata()
  statusCode: number;
}
