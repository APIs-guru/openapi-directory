import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeHsmConfigurationsActionEnum {
    DescribeHsmConfigurations = "DescribeHsmConfigurations"
}

export enum GetDescribeHsmConfigurationsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeHsmConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeHsmConfigurationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" })
  tagValues?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeHsmConfigurationsVersionEnum;
}


export class GetDescribeHsmConfigurationsHeaders extends SpeakeasyBase {
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


export class GetDescribeHsmConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeHsmConfigurationsQueryParams;

  @Metadata()
  headers: GetDescribeHsmConfigurationsHeaders;
}


export class GetDescribeHsmConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
