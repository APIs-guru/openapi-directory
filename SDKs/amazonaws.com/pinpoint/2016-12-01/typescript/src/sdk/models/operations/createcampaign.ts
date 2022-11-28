import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCampaignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class CreateCampaignHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateCampaignRequestBodyWriteCampaignRequest
/** 
 * Specifies the configuration and other settings for a campaign.
**/
export class CreateCampaignRequestBodyWriteCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalTreatments", elemType: shared.WriteTreatmentResource })
  additionalTreatments?: shared.WriteTreatmentResource[];

  @SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" })
  customDeliveryConfiguration?: shared.CustomDeliveryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=HoldoutPercent" })
  holdoutPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=Hook" })
  hook?: shared.CampaignHook;

  @SpeakeasyMetadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: shared.CampaignLimits;

  @SpeakeasyMetadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.MessageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: shared.Schedule;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentVersion" })
  segmentVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TreatmentDescription" })
  treatmentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TreatmentName" })
  treatmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateCampaignRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WriteCampaignRequest" })
  writeCampaignRequest: CreateCampaignRequestBodyWriteCampaignRequest;
}


export class CreateCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCampaignPathParams;

  @SpeakeasyMetadata()
  headers: CreateCampaignHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCampaignRequestBody;
}


export class CreateCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCampaignResponse?: shared.CreateCampaignResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
