import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}

export enum GetAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class GetAddSourceIdentifierToSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAddSourceIdentifierToSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" })
  sourceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAddSourceIdentifierToSubscriptionVersionEnum;
}


export class GetAddSourceIdentifierToSubscriptionHeaders extends SpeakeasyBase {
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


export class GetAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAddSourceIdentifierToSubscriptionQueryParams;

  @Metadata()
  headers: GetAddSourceIdentifierToSubscriptionHeaders;
}


export class GetAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
