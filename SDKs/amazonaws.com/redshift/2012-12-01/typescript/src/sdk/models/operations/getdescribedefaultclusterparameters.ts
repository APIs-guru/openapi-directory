import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeDefaultClusterParametersActionEnum {
    DescribeDefaultClusterParameters = "DescribeDefaultClusterParameters"
}

export enum GetDescribeDefaultClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeDefaultClusterParametersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDefaultClusterParametersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParameterGroupFamily" })
  parameterGroupFamily: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDefaultClusterParametersVersionEnum;
}


export class GetDescribeDefaultClusterParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeDefaultClusterParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeDefaultClusterParametersQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeDefaultClusterParametersHeaders;
}


export class GetDescribeDefaultClusterParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
