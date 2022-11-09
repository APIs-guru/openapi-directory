import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeConnectionAliasesXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliases = "WorkspacesService.DescribeConnectionAliases"
}


export class DescribeConnectionAliasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConnectionAliasesXAmzTargetEnum;
}


export class DescribeConnectionAliasesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeConnectionAliasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConnectionAliasesRequest;
}


export class DescribeConnectionAliasesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeConnectionAliasesResult?: shared.DescribeConnectionAliasesResult;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  statusCode: number;
}
