import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCampaignPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateCampaignHeaders extends SpeakeasyBase {
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


// CreateCampaignRequestBodyWriteCampaignRequest
/** 
 * Specifies the configuration and other settings for a campaign.
**/
export class CreateCampaignRequestBodyWriteCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalTreatments", elemType: shared.WriteTreatmentResource })
  additionalTreatments?: shared.WriteTreatmentResource[];

  @Metadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: shared.CustomDeliveryConfiguration;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=HoldoutPercent" })
  holdoutPercent?: number;

  @Metadata({ data: "json, name=Hook" })
  hook?: shared.CampaignHook;

  @Metadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @Metadata({ data: "json, name=Limits" })
  limits?: shared.CampaignLimits;

  @Metadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.MessageConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: shared.Schedule;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=SegmentVersion" })
  segmentVersion?: number;

  @Metadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @Metadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @Metadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateCampaignRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteCampaignRequest" })
  writeCampaignRequest: CreateCampaignRequestBodyWriteCampaignRequest;
}


export class CreateCampaignRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCampaignPathParams;

  @Metadata()
  headers: CreateCampaignHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCampaignRequestBody;
}


export class CreateCampaignResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCampaignResponse?: shared.CreateCampaignResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
