import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetQueueAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetSetQueueAttributesActionEnum {
    SetQueueAttributes = "SetQueueAttributes"
}

export enum GetSetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetSetQueueAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetQueueAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetQueueAttributesVersionEnum;
}


export class GetSetQueueAttributesHeaders extends SpeakeasyBase {
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


export class GetSetQueueAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetQueueAttributesPathParams;

  @Metadata()
  queryParams: GetSetQueueAttributesQueryParams;

  @Metadata()
  headers: GetSetQueueAttributesHeaders;
}


export class GetSetQueueAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
