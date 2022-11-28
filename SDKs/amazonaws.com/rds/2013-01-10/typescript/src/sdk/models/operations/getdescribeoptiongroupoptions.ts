import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeOptionGroupOptionsActionEnum {
    DescribeOptionGroupOptions = "DescribeOptionGroupOptions"
}

export enum GetDescribeOptionGroupOptionsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetDescribeOptionGroupOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeOptionGroupOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineName" })
  engineName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" })
  majorEngineVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeOptionGroupOptionsVersionEnum;
}


export class GetDescribeOptionGroupOptionsHeaders extends SpeakeasyBase {
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


export class GetDescribeOptionGroupOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeOptionGroupOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeOptionGroupOptionsHeaders;
}


export class GetDescribeOptionGroupOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
