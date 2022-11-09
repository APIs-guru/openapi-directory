import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListClusterJobsXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListClusterJobs = "AWSIESnowballJobManagementService.ListClusterJobs"
}


export class ListClusterJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListClusterJobsXAmzTargetEnum;
}


export class ListClusterJobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListClusterJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListClusterJobsRequest;
}


export class ListClusterJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  listClusterJobsResult?: shared.ListClusterJobsResult;

  @Metadata()
  statusCode: number;
}
