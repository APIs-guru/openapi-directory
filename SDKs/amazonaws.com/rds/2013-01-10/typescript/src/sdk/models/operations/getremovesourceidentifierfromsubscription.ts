import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}

export enum GetRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetRemoveSourceIdentifierFromSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveSourceIdentifierFromSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" })
  sourceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubscriptionName" })
  subscriptionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveSourceIdentifierFromSubscriptionVersionEnum;
}


export class GetRemoveSourceIdentifierFromSubscriptionHeaders extends SpeakeasyBase {
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


export class GetRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveSourceIdentifierFromSubscriptionQueryParams;

  @Metadata()
  headers: GetRemoveSourceIdentifierFromSubscriptionHeaders;
}


export class GetRemoveSourceIdentifierFromSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
