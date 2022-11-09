import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUntagQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}

export enum GetUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetUntagQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUntagQueueActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUntagQueueVersionEnum;
}


export class GetUntagQueueHeaders extends SpeakeasyBase {
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


export class GetUntagQueueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUntagQueuePathParams;

  @Metadata()
  queryParams: GetUntagQueueQueryParams;

  @Metadata()
  headers: GetUntagQueueHeaders;
}


export class GetUntagQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
