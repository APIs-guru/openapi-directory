import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}

export enum GetCreateOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class GetCreateOptionGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateOptionGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineName" })
  engineName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" })
  majorEngineVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupDescription" })
  optionGroupDescription: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptionGroupName" })
  optionGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateOptionGroupVersionEnum;
}


export class GetCreateOptionGroupHeaders extends SpeakeasyBase {
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


export class GetCreateOptionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateOptionGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateOptionGroupHeaders;
}


export class GetCreateOptionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
