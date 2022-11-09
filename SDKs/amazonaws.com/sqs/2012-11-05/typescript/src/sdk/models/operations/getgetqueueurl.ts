import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}

export enum GetGetQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetGetQueueUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetQueueUrlActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=QueueName" })
  queueName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=QueueOwnerAWSAccountId" })
  queueOwnerAwsAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetQueueUrlVersionEnum;
}


export class GetGetQueueUrlHeaders extends SpeakeasyBase {
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


export class GetGetQueueUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetQueueUrlQueryParams;

  @Metadata()
  headers: GetGetQueueUrlHeaders;
}


export class GetGetQueueUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
