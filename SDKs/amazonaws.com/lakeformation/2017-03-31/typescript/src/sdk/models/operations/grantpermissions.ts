import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GrantPermissionsXAmzTargetEnum {
    AwsLakeFormationGrantPermissions = "AWSLakeFormation.GrantPermissions"
}


export class GrantPermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GrantPermissionsXAmzTargetEnum;
}


export class GrantPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GrantPermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GrantPermissionsRequest;
}


export class GrantPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  grantPermissionsResponse?: Map<string, any>;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
