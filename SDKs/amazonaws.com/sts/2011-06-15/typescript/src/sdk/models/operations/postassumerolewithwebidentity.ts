import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAssumeRoleWithWebIdentityActionEnum {
    AssumeRoleWithWebIdentity = "AssumeRoleWithWebIdentity"
}

export enum PostAssumeRoleWithWebIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class PostAssumeRoleWithWebIdentityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssumeRoleWithWebIdentityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssumeRoleWithWebIdentityVersionEnum;
}


export class PostAssumeRoleWithWebIdentityHeaders extends SpeakeasyBase {
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


export class PostAssumeRoleWithWebIdentityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAssumeRoleWithWebIdentityQueryParams;

  @Metadata()
  headers: PostAssumeRoleWithWebIdentityHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssumeRoleWithWebIdentityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
