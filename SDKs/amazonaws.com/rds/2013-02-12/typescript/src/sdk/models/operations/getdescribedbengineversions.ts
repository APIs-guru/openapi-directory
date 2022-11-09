import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDbEngineVersionsActionEnum {
    DescribeDbEngineVersions = "DescribeDBEngineVersions"
}

export enum GetDescribeDbEngineVersionsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetDescribeDbEngineVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDbEngineVersionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupFamily" })
  dbParameterGroupFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DefaultOnly" })
  defaultOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ListSupportedCharacterSets" })
  listSupportedCharacterSets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDbEngineVersionsVersionEnum;
}


export class GetDescribeDbEngineVersionsHeaders extends SpeakeasyBase {
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


export class GetDescribeDbEngineVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDbEngineVersionsQueryParams;

  @Metadata()
  headers: GetDescribeDbEngineVersionsHeaders;
}


export class GetDescribeDbEngineVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
