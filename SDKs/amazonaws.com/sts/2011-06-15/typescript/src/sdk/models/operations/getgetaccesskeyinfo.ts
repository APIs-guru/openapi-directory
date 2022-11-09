import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetAccessKeyInfoActionEnum {
    GetAccessKeyInfo = "GetAccessKeyInfo"
}

export enum GetGetAccessKeyInfoVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetGetAccessKeyInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" })
  accessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccessKeyInfoActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccessKeyInfoVersionEnum;
}


export class GetGetAccessKeyInfoHeaders extends SpeakeasyBase {
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


export class GetGetAccessKeyInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAccessKeyInfoQueryParams;

  @Metadata()
  headers: GetGetAccessKeyInfoHeaders;
}


export class GetGetAccessKeyInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
