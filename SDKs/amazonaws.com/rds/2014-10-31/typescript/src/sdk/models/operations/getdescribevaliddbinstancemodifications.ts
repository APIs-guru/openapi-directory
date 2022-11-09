import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeValidDbInstanceModificationsActionEnum {
    DescribeValidDbInstanceModifications = "DescribeValidDBInstanceModifications"
}

export enum GetDescribeValidDbInstanceModificationsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDescribeValidDbInstanceModificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeValidDbInstanceModificationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeValidDbInstanceModificationsVersionEnum;
}


export class GetDescribeValidDbInstanceModificationsHeaders extends SpeakeasyBase {
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


export class GetDescribeValidDbInstanceModificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeValidDbInstanceModificationsQueryParams;

  @Metadata()
  headers: GetDescribeValidDbInstanceModificationsHeaders;
}


export class GetDescribeValidDbInstanceModificationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
