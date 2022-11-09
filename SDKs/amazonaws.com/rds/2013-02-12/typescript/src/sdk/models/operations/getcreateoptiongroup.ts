import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}

export enum GetCreateOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateOptionGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateOptionGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineName" })
  engineName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" })
  majorEngineVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupDescription" })
  optionGroupDescription: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateOptionGroupVersionEnum;
}


export class GetCreateOptionGroupHeaders extends SpeakeasyBase {
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


export class GetCreateOptionGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateOptionGroupQueryParams;

  @Metadata()
  headers: GetCreateOptionGroupHeaders;
}


export class GetCreateOptionGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
