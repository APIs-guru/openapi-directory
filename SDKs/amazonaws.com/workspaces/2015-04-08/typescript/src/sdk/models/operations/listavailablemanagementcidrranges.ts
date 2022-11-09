import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAvailableManagementCidrRangesXAmzTargetEnum {
    WorkspacesServiceListAvailableManagementCidrRanges = "WorkspacesService.ListAvailableManagementCidrRanges"
}


export class ListAvailableManagementCidrRangesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAvailableManagementCidrRangesXAmzTargetEnum;
}


export class ListAvailableManagementCidrRangesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListAvailableManagementCidrRangesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAvailableManagementCidrRangesRequest;
}


export class ListAvailableManagementCidrRangesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValuesException?: any;

  @Metadata()
  listAvailableManagementCidrRangesResult?: shared.ListAvailableManagementCidrRangesResult;

  @Metadata()
  statusCode: number;
}
