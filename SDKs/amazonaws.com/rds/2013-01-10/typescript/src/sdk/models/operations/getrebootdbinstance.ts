import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRebootDbInstanceActionEnum {
    RebootDbInstance = "RebootDBInstance"
}

export enum GetRebootDbInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetRebootDbInstanceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRebootDbInstanceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ForceFailover" })
  forceFailover?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRebootDbInstanceVersionEnum;
}


export class GetRebootDbInstanceHeaders extends SpeakeasyBase {
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


export class GetRebootDbInstanceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRebootDbInstanceQueryParams;

  @Metadata()
  headers: GetRebootDbInstanceHeaders;
}


export class GetRebootDbInstanceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
