import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAccountModificationsXAmzTargetEnum {
    WorkspacesServiceDescribeAccountModifications = "WorkspacesService.DescribeAccountModifications"
}


export class DescribeAccountModificationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAccountModificationsXAmzTargetEnum;
}


export class DescribeAccountModificationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAccountModificationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAccountModificationsRequest;
}


export class DescribeAccountModificationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAccountModificationsResult?: shared.DescribeAccountModificationsResult;

  @Metadata()
  statusCode: number;
}
