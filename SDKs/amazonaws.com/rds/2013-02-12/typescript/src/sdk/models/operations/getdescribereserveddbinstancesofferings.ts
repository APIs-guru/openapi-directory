import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeReservedDbInstancesOfferingsActionEnum {
    DescribeReservedDbInstancesOfferings = "DescribeReservedDBInstancesOfferings"
}

export enum GetDescribeReservedDbInstancesOfferingsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeReservedDbInstancesOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedDbInstancesOfferingsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OfferingType" })
  offeringType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" })
  productDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedDbInstancesOfferingsVersionEnum;
}


export class GetDescribeReservedDbInstancesOfferingsHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedDbInstancesOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeReservedDbInstancesOfferingsQueryParams;

  @Metadata()
  headers: GetDescribeReservedDbInstancesOfferingsHeaders;
}


export class GetDescribeReservedDbInstancesOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
