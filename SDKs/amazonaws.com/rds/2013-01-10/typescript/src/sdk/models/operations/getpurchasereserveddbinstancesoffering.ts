import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPurchaseReservedDbInstancesOfferingActionEnum {
    PurchaseReservedDbInstancesOffering = "PurchaseReservedDBInstancesOffering"
}

export enum GetPurchaseReservedDbInstancesOfferingVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetPurchaseReservedDbInstancesOfferingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPurchaseReservedDbInstancesOfferingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceCount" })
  dbInstanceCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstanceId" })
  reservedDbInstanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPurchaseReservedDbInstancesOfferingVersionEnum;
}


export class GetPurchaseReservedDbInstancesOfferingHeaders extends SpeakeasyBase {
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


export class GetPurchaseReservedDbInstancesOfferingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPurchaseReservedDbInstancesOfferingQueryParams;

  @Metadata()
  headers: GetPurchaseReservedDbInstancesOfferingHeaders;
}


export class GetPurchaseReservedDbInstancesOfferingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
