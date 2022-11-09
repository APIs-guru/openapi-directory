import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnableAwsOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceEnableAwsOrganizationsAccess = "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
}


export class EnableAwsOrganizationsAccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableAwsOrganizationsAccessXAmzTargetEnum;
}


export class EnableAwsOrganizationsAccessRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableAwsOrganizationsAccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class EnableAwsOrganizationsAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableAwsOrganizationsAccessOutput?: Map<string, any>;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  operationNotSupportedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
