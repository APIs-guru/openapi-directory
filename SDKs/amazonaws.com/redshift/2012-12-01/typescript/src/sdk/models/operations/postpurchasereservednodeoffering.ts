import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}

export enum PostPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostPurchaseReservedNodeOfferingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPurchaseReservedNodeOfferingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPurchaseReservedNodeOfferingVersionEnum;
}


export class PostPurchaseReservedNodeOfferingHeaders extends SpeakeasyBase {
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


export class PostPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPurchaseReservedNodeOfferingQueryParams;

  @SpeakeasyMetadata()
  headers: PostPurchaseReservedNodeOfferingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
