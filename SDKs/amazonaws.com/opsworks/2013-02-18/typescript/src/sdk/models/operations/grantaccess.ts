import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GrantAccessXAmzTargetEnum {
    OpsWorks20130218GrantAccess = "OpsWorks_20130218.GrantAccess"
}


export class GrantAccessHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GrantAccessXAmzTargetEnum;
}


export class GrantAccessRequest extends SpeakeasyBase {
  @Metadata()
  headers: GrantAccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GrantAccessRequest;
}


export class GrantAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  grantAccessResult?: shared.GrantAccessResult;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
