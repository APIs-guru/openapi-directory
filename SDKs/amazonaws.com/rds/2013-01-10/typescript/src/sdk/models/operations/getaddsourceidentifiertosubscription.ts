import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}

export enum GetAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetAddSourceIdentifierToSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddSourceIdentifierToSubscriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" })
  sourceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddSourceIdentifierToSubscriptionVersionEnum;
}


export class GetAddSourceIdentifierToSubscriptionHeaders extends SpeakeasyBase {
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


export class GetAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAddSourceIdentifierToSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetAddSourceIdentifierToSubscriptionHeaders;
}


export class GetAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
