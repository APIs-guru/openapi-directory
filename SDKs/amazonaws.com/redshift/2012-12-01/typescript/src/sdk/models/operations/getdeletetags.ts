import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteTagsActionEnum {
    DeleteTags = "DeleteTags"
}

export enum GetDeleteTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceName" })
  resourceName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTagsVersionEnum;
}


export class GetDeleteTagsHeaders extends SpeakeasyBase {
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


export class GetDeleteTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteTagsQueryParams;

  @Metadata()
  headers: GetDeleteTagsHeaders;
}


export class GetDeleteTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
