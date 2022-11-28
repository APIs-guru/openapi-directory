import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPurchaseReservedDbInstancesOfferingActionEnum {
    PurchaseReservedDbInstancesOffering = "PurchaseReservedDBInstancesOffering"
}

export enum PostPurchaseReservedDbInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class PostPurchaseReservedDbInstancesOfferingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPurchaseReservedDbInstancesOfferingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPurchaseReservedDbInstancesOfferingVersionEnum;
}


export class PostPurchaseReservedDbInstancesOfferingHeaders extends SpeakeasyBase {
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


export class PostPurchaseReservedDbInstancesOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPurchaseReservedDbInstancesOfferingQueryParams;

  @SpeakeasyMetadata()
  headers: PostPurchaseReservedDbInstancesOfferingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPurchaseReservedDbInstancesOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
