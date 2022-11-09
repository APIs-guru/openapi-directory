import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSavingsPlanHeaders extends SpeakeasyBase {
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


export class CreateSavingsPlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=commitment" })
  commitment: string;

  @Metadata({ data: "json, name=purchaseTime" })
  purchaseTime?: Date;

  @Metadata({ data: "json, name=savingsPlanOfferingId" })
  savingsPlanOfferingId: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=upfrontPaymentAmount" })
  upfrontPaymentAmount?: string;
}


export class CreateSavingsPlanRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSavingsPlanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSavingsPlanRequestBody;
}


export class CreateSavingsPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSavingsPlanResponse?: shared.CreateSavingsPlanResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
