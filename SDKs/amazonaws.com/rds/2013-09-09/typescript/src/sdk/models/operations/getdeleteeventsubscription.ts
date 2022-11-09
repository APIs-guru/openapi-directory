import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}

export enum GetDeleteEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetDeleteEventSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteEventSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteEventSubscriptionVersionEnum;
}


export class GetDeleteEventSubscriptionHeaders extends SpeakeasyBase {
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


export class GetDeleteEventSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteEventSubscriptionQueryParams;

  @Metadata()
  headers: GetDeleteEventSubscriptionHeaders;
}


export class GetDeleteEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
