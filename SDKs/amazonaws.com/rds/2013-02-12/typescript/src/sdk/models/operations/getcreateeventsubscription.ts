import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}

export enum GetCreateEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateEventSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateEventSubscriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnsTopicArn" })
  snsTopicArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceIds" })
  sourceIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateEventSubscriptionVersionEnum;
}


export class GetCreateEventSubscriptionHeaders extends SpeakeasyBase {
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


export class GetCreateEventSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateEventSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateEventSubscriptionHeaders;
}


export class GetCreateEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
