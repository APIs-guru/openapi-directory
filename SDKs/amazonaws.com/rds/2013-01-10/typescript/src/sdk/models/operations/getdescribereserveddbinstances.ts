import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeReservedDbInstancesActionEnum {
    DescribeReservedDbInstances = "DescribeReservedDBInstances"
}

export enum GetDescribeReservedDbInstancesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetDescribeReservedDbInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedDbInstancesActionEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstanceId" })
  reservedDbInstanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedDbInstancesVersionEnum;
}


export class GetDescribeReservedDbInstancesHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedDbInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeReservedDbInstancesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeReservedDbInstancesHeaders;
}


export class GetDescribeReservedDbInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
