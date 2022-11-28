import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeReservedDbInstancesOfferingsActionEnum {
    DescribeReservedDbInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}

export enum GetDescribeReservedDbInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeReservedDbInstancesOfferingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedDbInstancesOfferingsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingType" })
  offeringType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" })
  productDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedDbInstancesOfferingsVersionEnum;
}


export class GetDescribeReservedDbInstancesOfferingsHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedDbInstancesOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeReservedDbInstancesOfferingsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeReservedDbInstancesOfferingsHeaders;
}


export class GetDescribeReservedDbInstancesOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
