import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPurchaseReservedDbInstancesOfferingActionEnum {
    PurchaseReservedDbInstancesOffering = "PurchaseReservedDBInstancesOffering"
}

export enum GetPurchaseReservedDbInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetPurchaseReservedDbInstancesOfferingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPurchaseReservedDbInstancesOfferingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceCount" })
  dbInstanceCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstanceId" })
  reservedDbInstanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPurchaseReservedDbInstancesOfferingVersionEnum;
}


export class GetPurchaseReservedDbInstancesOfferingHeaders extends SpeakeasyBase {
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


export class GetPurchaseReservedDbInstancesOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPurchaseReservedDbInstancesOfferingQueryParams;

  @SpeakeasyMetadata()
  headers: GetPurchaseReservedDbInstancesOfferingHeaders;
}


export class GetPurchaseReservedDbInstancesOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
