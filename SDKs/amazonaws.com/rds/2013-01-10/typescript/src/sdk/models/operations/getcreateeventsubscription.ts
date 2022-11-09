import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}

export enum GetCreateEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetCreateEventSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateEventSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnsTopicArn" })
  snsTopicArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceIds" })
  sourceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateEventSubscriptionVersionEnum;
}


export class GetCreateEventSubscriptionHeaders extends SpeakeasyBase {
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


export class GetCreateEventSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateEventSubscriptionQueryParams;

  @Metadata()
  headers: GetCreateEventSubscriptionHeaders;
}


export class GetCreateEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
