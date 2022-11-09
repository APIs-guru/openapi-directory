import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGetQueueAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetGetQueueAttributesActionEnum {
    GetQueueAttributes = "GetQueueAttributes"
}

export enum GetGetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetGetQueueAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetQueueAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" })
  attributeNames?: shared.QueueAttributeNameEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetQueueAttributesVersionEnum;
}


export class GetGetQueueAttributesHeaders extends SpeakeasyBase {
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


export class GetGetQueueAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGetQueueAttributesPathParams;

  @Metadata()
  queryParams: GetGetQueueAttributesQueryParams;

  @Metadata()
  headers: GetGetQueueAttributesHeaders;
}


export class GetGetQueueAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
