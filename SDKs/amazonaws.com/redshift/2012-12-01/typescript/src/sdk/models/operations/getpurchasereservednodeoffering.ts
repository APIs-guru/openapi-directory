import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPurchaseReservedNodeOfferingActionEnum {
    PurchaseReservedNodeOffering = "PurchaseReservedNodeOffering"
}

export enum GetPurchaseReservedNodeOfferingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetPurchaseReservedNodeOfferingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPurchaseReservedNodeOfferingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NodeCount" })
  nodeCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeOfferingId" })
  reservedNodeOfferingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPurchaseReservedNodeOfferingVersionEnum;
}


export class GetPurchaseReservedNodeOfferingHeaders extends SpeakeasyBase {
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


export class GetPurchaseReservedNodeOfferingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPurchaseReservedNodeOfferingQueryParams;

  @Metadata()
  headers: GetPurchaseReservedNodeOfferingHeaders;
}


export class GetPurchaseReservedNodeOfferingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
