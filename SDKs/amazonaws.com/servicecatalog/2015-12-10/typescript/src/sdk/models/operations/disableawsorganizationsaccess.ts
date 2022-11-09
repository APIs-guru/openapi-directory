import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisableAwsOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisableAwsOrganizationsAccess = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
}


export class DisableAwsOrganizationsAccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableAwsOrganizationsAccessXAmzTargetEnum;
}


export class DisableAwsOrganizationsAccessRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableAwsOrganizationsAccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DisableAwsOrganizationsAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableAwsOrganizationsAccessOutput?: Map<string, any>;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
