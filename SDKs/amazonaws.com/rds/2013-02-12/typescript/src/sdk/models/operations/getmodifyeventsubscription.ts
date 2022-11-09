import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyEventSubscriptionActionEnum {
    ModifyEventSubscription = "ModifyEventSubscription"
}

export enum GetModifyEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetModifyEventSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyEventSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnsTopicArn" })
  snsTopicArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyEventSubscriptionVersionEnum;
}


export class GetModifyEventSubscriptionHeaders extends SpeakeasyBase {
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


export class GetModifyEventSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyEventSubscriptionQueryParams;

  @Metadata()
  headers: GetModifyEventSubscriptionHeaders;
}


export class GetModifyEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
