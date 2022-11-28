import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeEngineDefaultParametersActionEnum {
    DescribeEngineDefaultParameters = "DescribeEngineDefaultParameters"
}

export enum GetDescribeEngineDefaultParametersVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeEngineDefaultParametersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEngineDefaultParametersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" })
  dbParameterGroupFamily: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEngineDefaultParametersVersionEnum;
}


export class GetDescribeEngineDefaultParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeEngineDefaultParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEngineDefaultParametersQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEngineDefaultParametersHeaders;
}


export class GetDescribeEngineDefaultParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
