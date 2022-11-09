import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAuditStreamConfigurationHeaders extends SpeakeasyBase {
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
}


export class UpdateAuditStreamConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditStreamArn" })
  auditStreamArn?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class UpdateAuditStreamConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateAuditStreamConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAuditStreamConfigurationRequestBody;
}


export class UpdateAuditStreamConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateAuditStreamConfigurationResponse?: Map<string, any>;
}
