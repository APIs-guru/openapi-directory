import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeleteQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetDeleteQueueActionEnum {
    DeleteQueue = "DeleteQueue"
}

export enum GetDeleteQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetDeleteQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteQueueActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteQueueVersionEnum;
}


export class GetDeleteQueueHeaders extends SpeakeasyBase {
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
}


export class GetDeleteQueueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeleteQueuePathParams;

  @Metadata()
  queryParams: GetDeleteQueueQueryParams;

  @Metadata()
  headers: GetDeleteQueueHeaders;
}


export class GetDeleteQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
