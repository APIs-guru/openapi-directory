import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}

export enum GetDeleteEventSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class GetDeleteEventSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteEventSubscriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteEventSubscriptionVersionEnum;
}


export class GetDeleteEventSubscriptionHeaders extends SpeakeasyBase {
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


export class GetDeleteEventSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteEventSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteEventSubscriptionHeaders;
}


export class GetDeleteEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
