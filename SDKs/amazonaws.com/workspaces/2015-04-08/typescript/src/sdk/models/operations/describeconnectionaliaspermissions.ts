import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeConnectionAliasPermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliasPermissions = "WorkspacesService.DescribeConnectionAliasPermissions"
}


export class DescribeConnectionAliasPermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConnectionAliasPermissionsXAmzTargetEnum;
}


export class DescribeConnectionAliasPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConnectionAliasPermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConnectionAliasPermissionsRequest;
}


export class DescribeConnectionAliasPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectionAliasPermissionsResult?: shared.DescribeConnectionAliasPermissionsResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
