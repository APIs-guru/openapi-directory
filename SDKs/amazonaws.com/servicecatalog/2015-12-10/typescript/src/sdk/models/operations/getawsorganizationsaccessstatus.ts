import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAwsOrganizationsAccessStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetAwsOrganizationsAccessStatus = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
}


export class GetAwsOrganizationsAccessStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAwsOrganizationsAccessStatusXAmzTargetEnum;
}


export class GetAwsOrganizationsAccessStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAwsOrganizationsAccessStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetAwsOrganizationsAccessStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAwsOrganizationsAccessStatusOutput?: shared.GetAwsOrganizationsAccessStatusOutput;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
