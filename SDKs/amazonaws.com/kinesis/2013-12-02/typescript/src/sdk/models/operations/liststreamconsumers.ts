import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListStreamConsumersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListStreamConsumersXAmzTargetEnum {
    Kinesis20131202ListStreamConsumers = "Kinesis_20131202.ListStreamConsumers"
}


export class ListStreamConsumersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListStreamConsumersXAmzTargetEnum;
}


export class ListStreamConsumersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListStreamConsumersQueryParams;

  @Metadata()
  headers: ListStreamConsumersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListStreamConsumersInput;
}


export class ListStreamConsumersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  expiredNextTokenException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listStreamConsumersOutput?: shared.ListStreamConsumersOutput;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
