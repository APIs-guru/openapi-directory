import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}

export enum PostPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostPurchaseReservedNodeOfferingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPurchaseReservedNodeOfferingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPurchaseReservedNodeOfferingVersionEnum;
}


export class PostPurchaseReservedNodeOfferingHeaders extends SpeakeasyBase {
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


export class PostPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostPurchaseReservedNodeOfferingQueryParams;

  @Metadata()
  headers: PostPurchaseReservedNodeOfferingHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
