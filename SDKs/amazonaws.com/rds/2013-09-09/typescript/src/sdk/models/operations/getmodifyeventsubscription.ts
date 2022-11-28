import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyEventSubscriptionActionEnum {
    ModifyEventSubscription = "ModifyEventSubscription"
}

export enum GetModifyEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetModifyEventSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyEventSubscriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyEventSubscriptionVersionEnum;
}


export class GetModifyEventSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyEventSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyEventSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyEventSubscriptionHeaders;
}


export class GetModifyEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
