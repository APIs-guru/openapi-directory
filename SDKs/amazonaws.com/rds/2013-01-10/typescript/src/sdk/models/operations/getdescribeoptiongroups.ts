import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}

export enum GetDescribeOptionGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetDescribeOptionGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeOptionGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineName" })
  engineName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" })
  majorEngineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeOptionGroupsVersionEnum;
}


export class GetDescribeOptionGroupsHeaders extends SpeakeasyBase {
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


export class GetDescribeOptionGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeOptionGroupsQueryParams;

  @Metadata()
  headers: GetDescribeOptionGroupsHeaders;
}


export class GetDescribeOptionGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
