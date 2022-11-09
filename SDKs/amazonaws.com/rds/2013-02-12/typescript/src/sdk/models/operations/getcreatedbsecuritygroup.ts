import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateDbSecurityGroupActionEnum {
    CreateDbSecurityGroup = "CreateDBSecurityGroup"
}

export enum GetCreateDbSecurityGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateDbSecurityGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateDbSecurityGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupDescription" })
  dbSecurityGroupDescription: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" })
  dbSecurityGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateDbSecurityGroupVersionEnum;
}


export class GetCreateDbSecurityGroupHeaders extends SpeakeasyBase {
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


export class GetCreateDbSecurityGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateDbSecurityGroupQueryParams;

  @Metadata()
  headers: GetCreateDbSecurityGroupHeaders;
}


export class GetCreateDbSecurityGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
