import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeReservedDbInstancesActionEnum {
    DescribeReservedDbInstances = "DescribeReservedDBInstances"
}

export enum GetDescribeReservedDbInstancesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeReservedDbInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeReservedDbInstancesActionEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstanceId" })
  reservedDbInstanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" })
  reservedDbInstancesOfferingId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeReservedDbInstancesVersionEnum;
}


export class GetDescribeReservedDbInstancesHeaders extends SpeakeasyBase {
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


export class GetDescribeReservedDbInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeReservedDbInstancesQueryParams;

  @Metadata()
  headers: GetDescribeReservedDbInstancesHeaders;
}


export class GetDescribeReservedDbInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
